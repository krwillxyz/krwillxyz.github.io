#!/usr/bin/env python3
import json
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent


def main() -> None:
    state = json.loads((ROOT / "state.json").read_text(encoding="utf-8"))
    assert state["kind"] == "krwill_qr_pointer.v1"
    assert state["mode"] in {"profile", "lost", "redirect"}

    target = state["target"]
    if state["mode"] == "redirect":
        assert isinstance(target, str)
        parsed = urlparse(target)
        assert target.startswith("/") or parsed.scheme == "https"
        assert target.rstrip("/") != "/q/p6f5jt4szo"
    else:
        assert target is None

    required = [
        ROOT / "index.html",
        ROOT / "kristopher-williams.vcf",
        ROOT / "route.css",
    ]
    assert all(path.is_file() for path in required)

    vcard = (ROOT / "kristopher-williams.vcf").read_text(encoding="utf-8")
    assert vcard.startswith("BEGIN:VCARD\nVERSION:4.0\n")
    assert "FN:Kristopher Williams" in vcard
    assert "URL:https://krwill.xyz/" in vcard
    assert vcard.rstrip().endswith("END:VCARD")

    page = (ROOT / "index.html").read_text(encoding="utf-8")
    assert 'id="profile-panel"' in page
    assert 'id="lost-panel"' in page
    assert "I%20found%20your%20wallet" in page
    assert "phone" not in page.lower()

    print(f"ok  Wise Owl mode={state['mode']} target={target}")


if __name__ == "__main__":
    main()
