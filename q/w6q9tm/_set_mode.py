#!/usr/bin/env python3
import argparse
import json
import subprocess
from datetime import UTC, datetime
from pathlib import Path
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parent
REPO = ROOT.parents[1]
STATE = ROOT / "state.json"
STATE_RELATIVE = STATE.relative_to(REPO)


def run(*args: str) -> None:
    subprocess.run(args, cwd=REPO, check=True)


def proposed_state(mode: str, previous: dict) -> dict:
    now = datetime.now(UTC).replace(microsecond=0)
    activated_at = previous.get("activated_at")
    if mode == "active" and not activated_at:
        activated_at = now.isoformat()
    return {
        "kind": "krwill_keychain_pointer.v1",
        "mode": mode,
        "activated_at": activated_at,
        "updated_at": now.isoformat(),
        "updated_at_local": now.astimezone(ZoneInfo("America/Los_Angeles")).isoformat(),
        "note": (
            "The keychain is physically attached to Kristopher's keys."
            if mode == "active"
            else "The keychain is not currently in service."
        ),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Change the w6q9tm keychain route mode.")
    parser.add_argument("mode", choices=("inactive", "active"))
    parser.add_argument("--publish", action="store_true", help="commit and push the state change")
    parser.add_argument("--dry-run", action="store_true", help="print the proposed state only")
    args = parser.parse_args()

    previous = json.loads(STATE.read_text(encoding="utf-8"))
    value = proposed_state(args.mode, previous)
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
    print(f"set w6q9tm keychain mode={args.mode}")

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
        run("git", "commit", "-m", f"Set w6q9tm keychain mode to {args.mode}")
        run("git", "push", "origin", "main")


if __name__ == "__main__":
    main()
