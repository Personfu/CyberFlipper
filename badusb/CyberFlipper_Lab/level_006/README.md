# CyberFlipper Level 006 - Community Desktop Review Suite

Level 006 is a community-quality workstation review suite. It is built to look intentional, run from a Flipper Zero as DuckyScript-style `.txt` content, and produce visible local reports that a learner can inspect immediately.

## Files

- `cf_l006_windows_desktop_stack_audit.txt` - Windows desktop software and running client report.
- `cf_l006_windows_browser_review.txt` - Windows browser presence and update-service report.
- `cf_l006_linux_desktop_stack_audit.txt` - Linux desktop tool, interface, and listening-socket report.
- `cf_l006_macos_workstation_review.txt` - macOS system, application, and firewall-state report.

## Expected Output

Each script writes a local report with a `cyberflipper_l006_` prefix and opens it visibly with Notepad, TextEdit, or the desktop text viewer.

## Defensive Value

This level teaches software exposure review, response scoping, and host visibility. A defender can use the reports to understand what browsers, meeting clients, creative tools, file-sync clients, and productivity applications exist on an authorized lab workstation.

## Detection and Mitigation

Monitor for new keyboard devices launching PowerShell or Terminal. Watch for rapid typed command sequences and new report files with the `cyberflipper_` prefix. Mitigate with endpoint telemetry, PowerShell logging, USB device control, least-privilege accounts, and written approval before HID testing.

## Human Approval

Human review is required before publishing or deployment because the scripts launch command interpreters and enumerate installed applications or local system state. The scripts are visible and report-only.
