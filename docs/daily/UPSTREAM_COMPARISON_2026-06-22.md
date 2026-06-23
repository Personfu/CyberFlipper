# Upstream Comparison — 2026-06-22

## Purpose

Track recent upstream Flipper ecosystem changes and translate them into safe CyberFlipper governance notes. This file does not import code, binaries, signal data, or device-control instructions.

## Sources reviewed

- CyberFlipper target repository: https://github.com/Fu-LLC/CyberFlipper
- CyberFlipper accessible staging repository: https://github.com/Personfu/CyberFlipper
- UberGuidoZ/Flipper `main`: https://github.com/UberGuidoZ/Flipper/commits/main/
- DarkFlippers/unleashed-firmware `dev`: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/
- Official Flipper firmware releases: https://github.com/flipperdevices/flipperzero-firmware/releases

## Access note

Direct writes to `Fu-LLC/CyberFlipper` were blocked by GitHub integration permissions during this run. Updates are staged in `Personfu/CyberFlipper` for review.

## UberGuidoZ/Flipper observations

Visible commit activity on `main` remains centered on RogueMaster merge and FAP API updates:

| Date | Commit | Visible title | CyberFlipper disposition |
| --- | --- | --- | --- |
| 2026-06-06 | `29117c7` | Merge pull request #683 from RogueMaster/main | Human review; do not import automatically. |
| 2026-06-04 | `9e4fae2` | RM FAP UPDATES API v87.2 | Compatibility watch; verify official API baseline before publishing. |
| 2026-06-04 | `8f0a1cb` | RM FAP UPDATES API v87.2 README | Documentation watch only. |
| 2026-05-26 | `6aeaa54` | Merge pull request #682 from RogueMaster/main | Human review; no automated merge. |
| 2026-05-26 | `7cc946a` | Module Update | Review provenance and licensing before reference. |
| 2026-05-26 | `99eaad2` | RM FAP UPDATES | Review provenance and licensing before reference. |

Safe action:

- Add compatibility tracking notes only.
- Prefer official firmware release notes for public claims.
- Require manual review for any app, binary, sample, training file, radio/NFC/RFID artifact, or tutorial derived from this source.

## DarkFlippers/unleashed-firmware observations

Visible commit activity on `dev` remains centered on changelog updates, hardware-adjacent fixes, build behavior, API surface, and cleanup work:

| Date | Commit | Visible title | CyberFlipper disposition |
| --- | --- | --- | --- |
| 2026-05-23 | `c5bcab3` | upd changelog | Documentation watch. |
| 2026-05-09 | `44ff715` | upd changelog | Documentation watch. |
| 2026-05-09 | `41628a4` | hotfix faac slh | Human approval required. |
| 2026-05-04 | `09fc864` | force build params | Build reproducibility review required. |
| 2026-05-03 | `daec03b` | add canvas_buffer to api | API compatibility review. |
| 2026-04-30 | `bcbb1b5` | remove duplicate code from raw protocol | Human approval required. |

Safe action:

- Record the existence of upstream changes.
- Do not publish derived device-control procedures or captured artifacts.
- Review licensing, firmware policy, safety language, and jurisdiction before any public reference.

## Official Flipper firmware baseline

Official release notes remain the preferred public baseline.

Relevant items from the release feed:

- `1.4.3`: bugfix release for `1.4.2`; Infrared CLI plugin MissingImports fix.
- `1.4.2`: NFC CLI and parser work, Sub-GHz additions, BLE pairing-security improvements with re-pairing recommendation, JS GUI bindings, Infrared remote updates, USB HID example fixes, HID Remote autoclicker configuration, CLI command improvements, iButton write support, and LF RFID animal-tag country display.

CyberFlipper interpretation:

- NFC/Sub-GHz/iButton/LF RFID items require careful wording and human approval.
- BLE pairing-security guidance is useful as a defensive checklist item: remove stale pairings and re-pair after affected firmware updates.
- USB HID handling changes justify a public-safe training-design review, not new automation examples.
- Infrared CLI bugfix notes justify A/V inventory and troubleshooting templates, not disruptive examples.

## Review gates

Before merge or publication, maintainers should confirm:

1. Source dates and commit IDs still match upstream pages.
2. No copied upstream code, assets, or binary material is included.
3. No operational device-control instructions are present.
4. No training example modifies a host beyond visible text entry.
5. All community firmware references are clearly marked as unendorsed external sources.
6. Any CISA KEV claim is verified directly against the official source before publication.
