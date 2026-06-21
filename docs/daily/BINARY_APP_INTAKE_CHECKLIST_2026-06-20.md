# Binary App Intake Checklist — 2026-06-20

Use this checklist before importing upstream `.fap` applications or other binary artifacts into CyberFlipper release folders.

## Required metadata

- Upstream repository:
- Upstream commit SHA:
- Artifact path:
- Artifact hash:
- Build date claimed by upstream:
- Source repository for artifact:
- License:
- Reviewer:
- Approved lab scope:

## Review steps

1. Prefer source build over binary import.
2. Verify the artifact hash and record it in a release manifest.
3. Confirm license compatibility with CyberFlipper distribution.
4. Confirm the app purpose from source, documentation, and maintainer notes.
5. Run static inspection where possible.
6. Run the app only in an isolated lab profile first.
7. Confirm that the app does not collect secrets, modify security posture, persist on hosts, or interact with third-party systems outside the approved lab.
8. Record any RF, BLE, Wi-Fi, NFC, LF RFID, IR, GPIO, or HID capability.
9. Require owner approval for any transmit-capable or control-capable workflow.
10. Keep non-reviewed apps out of public SD-card bundles.

## Risk labels

- GREEN: Documentation-only or passive viewer; no sensitive data exposure.
- YELLOW: Reads lab media or parses local files; may expose identifiers or authenticator material.
- RED: Prebuilt binary, transmit-capable radio app, HID injector, network-capable app, credential-adjacent feature, or physical-access-system feature.

Default for unreviewed `.fap` artifacts: RED / HOLD.
