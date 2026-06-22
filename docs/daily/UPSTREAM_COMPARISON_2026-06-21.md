# Upstream Comparison - 2026-06-21

Sources reviewed:

- CyberFlipper target repository: https://github.com/Fu-LLC/CyberFlipper
- UberGuidoZ/Flipper commits: https://github.com/UberGuidoZ/Flipper/commits/main/
- DarkFlippers/unleashed-firmware commits: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/
- Official Flipper firmware releases: https://github.com/flipperdevices/flipperzero-firmware/releases
- Flipper Bad USB documentation: https://docs.flipper.net/zero/bad-usb
- Flipper Sub-GHz read documentation: https://docs.flipper.net/zero/sub-ghz/read
- Flipper NFC read documentation: https://docs.flipper.net/zero/nfc/read
- Flipper LF RFID read documentation: https://docs.flipper.net/zero/rfid/read
- Flipper Infrared read documentation: https://docs.flipper.net/zero/infrared/read
- CISA KEV catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog

## Comparison table

| Area | Recent source signal | CyberFlipper action | Approval gate |
| --- | --- | --- | --- |
| Community app/API material | UberGuidoZ main shows June 2026 RogueMaster merge and FAP API v87.2 notes. | Track compatibility and provenance. Do not import binaries or app packs automatically. | Human license and safety review. |
| Custom firmware dev | DarkFlippers dev shows changelog, build, API, protocol, and UI work. | Treat as upstream watch material only. | Human approval before any protocol-sensitive copy. |
| Official release baseline | Official firmware 1.4.3 is a narrow bugfix; 1.4.2 contains larger subsystem changes. | Use official release notes as the default compatibility baseline. | Maintainer confirms target firmware version. |
| BadUSB/HID | Official docs describe HID behavior and script storage under SD-card BadUSB paths. | Public examples remain text-entry only: consent banners, notes, and checklists. | Human approval before public payload examples. |
| NFC/LF RFID | Official docs cover reading, saving, and emulation capabilities. | Repository notes must avoid real IDs, dumps, keys, or access data. | Human approval for any card-type examples. |
| Sub-GHz | Official docs emphasize frequency, modulation, regional limits, and saved signals. | Keep public guidance to inventory, policy, and compliance checks. | Human approval for any signal file or transmission note. |
| Infrared | Official docs cover reading infrared signals and universal remote use. | Allow owned-device inventory and troubleshooting notes. | Human approval for classroom/public-space examples. |
| Vulnerability triage | CISA KEV remains active-exploitation triage source. | Capture owner, affected product, due date, mitigation, and verification status only. | Human approval before naming customer systems. |

## Review outcome

No code import is recommended today. Safe additions are documentation-only and should be used as review scaffolding for authorized labs.
