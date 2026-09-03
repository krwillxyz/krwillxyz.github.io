#!/usr/bin/env python3
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def main() -> None:
    state = json.loads((ROOT / "state.json").read_text(encoding="utf-8"))
    assert state["kind"] == "krwill_keychain_pointer.v1"
    assert state["mode"] in {"inactive", "active"}
    assert state["activated_at"] is None or isinstance(state["activated_at"], str)
    if state["mode"] == "active":
        assert isinstance(state["activated_at"], str)

    required = [ROOT / "index.html", ROOT / "route.css", ROOT / "state.json"]
    assert all(path.is_file() for path in required)

    page = (ROOT / "index.html").read_text(encoding="utf-8")
    assert 'id="inactive-panel"' in page
    assert 'id="active-panel"' in page
    assert "I%20found%20your%20keys" in page
    assert "window.location.replace" not in page
    assert "http-equiv=\"refresh\"" not in page
    assert "phone" not in page.lower()

    print(f"ok  w6q9tm keychain mode={state['mode']}")


if __name__ == "__main__":
    main()
