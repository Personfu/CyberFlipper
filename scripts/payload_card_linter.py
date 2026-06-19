#!/usr/bin/env python3
"""Lint CyberFlipper payload-card text for public-safety review.

The linter is intentionally conservative. It flags risky words and missing
safety sections so public examples stay visible, reversible, logged, and scoped.
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path

REQUIRED_SECTIONS = ["scope", "authorization", "defensive use", "rollback", "logging"]
RISK_PATTERNS = {
    "credential capture": re.compile(r"credential|password|token dump|cookie theft", re.I),
    "stealth/evasion": re.compile(r"hidden window|bypass|evasion|disable av|amsi|uac", re.I),
    "persistence": re.compile(r"persistence|startup folder|run key|scheduled task", re.I),
    "remote shell": re.compile(r"reverse shell|bind shell|meterpreter|c2 beacon", re.I),
    "destructive": re.compile(r"wipe|encrypt files|ransom|destroy|delete shadows", re.I),
}


def main() -> None:
    parser = argparse.ArgumentParser(description="Lint public CyberFlipper payload cards.")
    parser.add_argument("paths", nargs="+", type=Path)
    args = parser.parse_args()

    failed = False
    for path in args.paths:
        text = path.read_text(encoding="utf-8", errors="replace")
        low = text.lower()
        print(f"reviewing {path}")
        for section in REQUIRED_SECTIONS:
            if section not in low:
                print(f"  missing section hint: {section}")
                failed = True
        for label, pattern in RISK_PATTERNS.items():
            if pattern.search(text):
                print(f"  risky pattern: {label}")
                failed = True
    raise SystemExit(1 if failed else 0)


if __name__ == "__main__":
    main()
