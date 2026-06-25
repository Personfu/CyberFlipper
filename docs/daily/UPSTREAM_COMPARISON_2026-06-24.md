# Upstream Comparison — 2026-06-24

## Inputs

- Target repository: https://github.com/Fu-LLC/CyberFlipper
- UberGuidoZ/Flipper main commits: https://github.com/UberGuidoZ/Flipper/commits/main/
- DarkFlippers/unleashed-firmware dev commits: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/
- Official Flipper firmware releases: https://github.com/flipperdevices/flipperzero-firmware/releases

## UberGuidoZ/Flipper main

Most recent visible commits:

| Date | Commit | Subject | CyberFlipper handling |
| --- | --- | --- | --- |
| 2026-06-06 | 29117c7 | Merge pull request #683 from RogueMaster/main | Track for provenance only. No direct import. |
| 2026-06-04 | 9e4fae2 | RM FAP UPDATES API v87.2 | Requires FAP API compatibility review and binary/source provenance review. |
| 2026-06-04 | 8f0a1cb | RM FAP UPDATES API v87.2 README | Documentation-only review allowed. |
| 2026-05-26 | 6aeaa54 / 7cc946a / 99eaad2 | RogueMaster merge, module update, FAP update | Human approval before any adoption. |

## DarkFlippers/unleashed-firmware dev

Most recent visible commits:

| Date | Commit | Subject | CyberFlipper handling |
| --- | --- | --- | --- |
| 2026-05-23 | c5bcab3 | upd changelog | Documentation review only. |
| 2026-05-09 | 44ff715 | upd changelog | Documentation review only. |
| 2026-05-09 | 41628a4 | hotfix faac slh | Protocol-sensitive. Human approval required before publication. |
| 2026-05-08 | 466c923 | upd changelog | Documentation review only. |

## Official firmware reference

Official Flipper firmware release notes show 1.4.3 as the latest visible release. It is a narrow Infrared CLI MissingImports bugfix on top of Firmware 1.4.2. Firmware 1.4.2 remains the main compatibility baseline for broader changes: NFC CLI, Sub-GHz protocol changes, BLE pairing guidance, JS UI bindings, infrared updates, BadUSB fixes, HID Remote changes, CLI changes, iButton additions, and LF RFID improvements.

## Import policy

Do not import from community firmware or payload repositories automatically. Before adoption, require:

1. Source and license review.
2. Reproducible-build or checksum evidence where applicable.
3. Review for credential handling, persistence, evasion, destructive action, unauthorized access-control material, and third-party compromise instructions.
4. Hardware test on an isolated lab Flipper and sacrificial host where USB behavior is involved.
5. Maintainer sign-off in the human approval queue.

## Safe CyberFlipper action

This daily update does not import binaries, firmware, protocol dictionaries, payload repositories, or exploit logic. It adds only governance documentation and lab-only text-entry review material.
