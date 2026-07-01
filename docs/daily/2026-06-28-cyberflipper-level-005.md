# CyberFlipper Daily Authorized Security Research Update - 2026-06-28

## Level

Level 005 - Communications and workflow inventory.

## Scope

This update adds safe Flipper BadUSB training scripts for authorized lab hosts. The scripts create visible local reports and do not collect credentials, message contents, browser profiles, cookies, tokens, password-vault data, VPN secrets, cloud-drive contents, or private documents.

## Upstream firmware and tooling watch

- UberGuidoZ/Flipper main page access was rate-limited during this run, so no claim is made beyond prior known visible activity. Recheck before citing exact newest commits in public release notes.
- DarkFlippers/unleashed-firmware dev page showed recent commit history around NFC/FeliCa, MIFARE, app, and firmware maintenance activity. The practical BadUSB takeaway is unchanged: keep scripts conservative, visible, and compatible with baseline DuckyScript-style syntax.
- CISA KEV remains the correct source for mitigation-priority notes. Use it to drive patch and exposure-review content, not exploit payloads.

## Repository updates prepared

Added Level 005 safe content under `badusb/CyberFlipper_Lab/level_005/`:

- `cf_l005_windows_communications_inventory.txt`
- `cf_l005_windows_project_knowledge_inventory.txt`
- `cf_l005_linux_workflow_inventory.txt`
- `README.md`

## Defensive breakdown

Communications, meeting, project-management, and knowledge-base tools are common pivots during phishing, social engineering, token-abuse, and post-incident scoping. Level 005 teaches safe inventory patterns: identify the existence and version of applications without reading their data or touching secrets.

## Detection and mitigation guidance

Detection ideas:

- New HID keyboard device attached to endpoint.
- `powershell -NoProfile` launched from an interactive desktop session.
- Linux terminal opened and receives rapid command sequences.
- Creation of files matching `cyberflipper_l005_*` on Desktop or home directory.

Mitigation ideas:

- USB device-control policy for untrusted HID devices.
- PowerShell script block/transcript logging.
- Endpoint alerts for rapid typed shell commands.
- Least-privilege desktop users.
- Written authorization before HID testing.

## Approval note

Human approval is required before publishing or deploying these payloads because they launch shells and inventory installed software, even though the content is local, visible, read-only, and defensive.
