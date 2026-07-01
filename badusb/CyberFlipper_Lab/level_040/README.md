# CyberFlipper Level 040 — Firmware, App Catalog, and HID Policy Review

Level 040 turns firmware and app ecosystem tracking into a practical defensive lab. It focuses on provenance, version tracking, USB/HID policy visibility, and safe workstation review.

## Files

```text
cf_l040_windows_hid_policy_review.txt
cf_l040_linux_usb_hid_review.txt
cf_l040_macos_usb_hid_review.txt
```

## Purpose

- Record visible local USB/HID policy posture.
- Support safe BadUSB detection engineering.
- Pair firmware/app catalog research with host-side control review.
- Create local reports that can be attached to a lab notebook.

## Expected output

Each script creates a visible local report using a `cyberflipper_` prefix:

```text
cyberflipper_l040_windows_hid_policy_review.txt
cyberflipper_l040_linux_usb_hid_review.txt
cyberflipper_l040_macos_usb_hid_review.txt
```

## Defensive value

- Confirms whether endpoint policy exposes USB/HID control evidence.
- Teaches what host telemetry is available before running any HID training file.
- Encourages written authorization and documented test windows.
- Helps reviewers separate firmware/app research from host-side security posture.

## Review requirements

Human review required before merge or public release because these files launch local command interpreters and inspect workstation configuration. They do not hide execution, escalate privileges, collect secrets, transmit data, or modify system policy.

## Safety boundary

Allowed: visible local review, report creation, policy visibility, documentation.

Not allowed: credential collection, tokens, cookies, browser profile data, password-manager data, persistence, stealth, evasion, destructive logic, RF abuse, Wi-Fi cracking, captive credential capture, unauthorized exploitation, or privileged service abuse.