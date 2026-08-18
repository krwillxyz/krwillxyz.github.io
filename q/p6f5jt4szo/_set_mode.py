#!/usr/bin/env python3
import argparse
import json
import subprocess
from datetime import UTC, datetime
from pathlib import Path
from urllib.parse import urlparse
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parent
REPO = ROOT.parents[1]
STATE = ROOT / "state.json"
STATE_RELATIVE = STATE.relative_to(REPO)


def run(*args: str) -> None:
    subprocess.run(args, cwd=REPO, check=True)


def proposed_state(mode: str, target: str | None) -> dict:
    if mode == "redirect":
        if not target:
            raise SystemExit("redirect mode requires a target")
        parsed = urlparse(target)
        if not target.startswith("/") and parsed.scheme != "https":
            raise SystemExit("redirect target must be root-relative or HTTPS")
        if target.rstrip("/") == "/q/p6f5jt4szo":
            raise SystemExit("redirect target would create a loop")
    elif target is not None:
        raise SystemExit(f"{mode} mode does not accept a target")

    now = datetime.now(UTC).replace(microsecond=0)
    return {
        "kind": "krwill_qr_pointer.v1",
        "mode": mode,
        "target": target,
        "updated_at": now.isoformat(),
        "updated_at_local": now.astimezone(ZoneInfo("America/Los_Angeles")).isoformat(),
        "note": "Set mode to lost for recovery, or redirect with an HTTPS target for a future destination.",
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Change the permanent Wise Owl QR route mode.")
    parser.add_argument("mode", choices=("profile", "lost", "redirect"))
    parser.add_argument("target", nargs="?")
    parser.add_argument("--publish", action="store_true", help="commit and push the state change")
    parser.add_argument("--dry-run", action="store_true", help="print the proposed state only")
    args = parser.parse_args()

    target = args.target
    value = proposed_state(args.mode, target)
    if args.dry_run:
        print(json.dumps(value, indent=2))
        return

    if args.publish:
        dirty = subprocess.run(
            ("git", "status", "--porcelain"),
            cwd=REPO,
            check=True,
            capture_output=True,
            text=True,
        ).stdout.strip()
        if dirty:
            raise SystemExit("refusing --publish because the repository has uncommitted changes")

    STATE.write_text(json.dumps(value, indent=2) + "\n", encoding="utf-8")
    run("python3", str(ROOT / "_test_route.py"))
    print(f"set Wise Owl mode={args.mode} target={target}")

    if args.publish:
        run("git", "add", "--", str(STATE_RELATIVE))
        staged = subprocess.run(
            ("git", "diff", "--cached", "--name-only"),
            cwd=REPO,
            check=True,
            capture_output=True,
            text=True,
        ).stdout.splitlines()
        if staged != [str(STATE_RELATIVE)]:
            raise SystemExit(f"refusing to commit unexpected staged files: {staged}")
        run("git", "commit", "-m", f"Set Wise Owl mode to {args.mode}")
        run("git", "push", "origin", "main")


if __name__ == "__main__":
    main()
