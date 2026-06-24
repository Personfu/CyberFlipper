# Upstream Comparison — 2026-06-23

## Sources checked

- UberGuidoZ/Flipper commits on `main`: https://github.com/UberGuidoZ/Flipper/commits/main/
- DarkFlippers/unleashed-firmware commits on `dev`: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/
- Official Flipper download/release channel: https://flipper.net/pages/downloads
- Official Flipper docs: https://docs.flipper.net/

## UberGuidoZ/Flipper `main`

Latest visible items:

- 2026-06-06: `Merge pull request #683 from RogueMaster/main` (`29117c7`).
- 2026-06-04: `RM FAP UPDATES API v87.2` (`9e4fae2`).
- 2026-06-04: `RM FAP UPDATES API v87.2 README` (`8f0a1cb`).
- 2026-05-26: RogueMaster merge and module/FAP updates.
- 2026-05-22: `Fix Aleff-BadUSB submodule pointer`.

CyberFlipper handling:

- Treat third-party application pack changes as compatibility intelligence, not direct import candidates.
- Require provenance review for every `.fap`, submodule pointer, archived payload reference, or binary artifact.
- Require maintainer approval before documenting any USB HID, wireless, RF, NFC, RFID, or access-control behavior derived from community packs.
- Keep all user-facing examples as defensive inventory, detection, and authorization checklists.

## DarkFlippers/unleashed-firmware `dev`

Latest visible items:

- 2026-05-23: `upd changelog` (`c5bcab3`).
- 2026-05-09: `upd changelog` (`44ff715`).
- 2026-05-09: `hotfix faac slh` (`41628a4`).
- 2026-05-04: `force build params` (`09fc864`).
- 2026-05-03: `add canvas_buffer to api` (`daec03b`).
- 2026-04-30: `remove duplicate code from raw protocol` (`bcbb1b5`).

CyberFlipper handling:

- FAAC SLH and raw-protocol items are protocol-sensitive. Do not translate them into usage steps, replay examples, or bypass claims.
- Build parameter changes require reproducibility review before they are used in release notes or build instructions.
- API additions should be treated as developer-compatibility notes only until tested against official firmware baselines.
- Changelog-only updates can be summarized but should not be treated as validated security changes.

## Decision matrix

| Item | Import? | Document? | Human approval required? | Rationale |
| --- | --- | --- | --- | --- |
| FAP API compatibility notes | No direct import | Yes, high level | Yes | Compatibility can affect app stability. |
| Community firmware protocol changes | No | Only as risk notes | Yes | Protocol-sensitive and jurisdiction-dependent. |
| Binary or packaged app artifacts | No | Inventory only | Yes | Requires provenance and licensing review. |
| USB HID examples | No | Only visible text-entry demos | Yes | HID content can be dual-use. |
| Official Flipper release notes | No import | Yes | No, unless operationalized | Best baseline for compatibility notes. |

## Publication guidance

Use language such as `authorized lab review`, `inventory`, `compatibility watch`, and `defensive validation`. Avoid language suggesting replay, bypass, unrestricted signal capture, credential access, stealth, or deployment against third-party systems.
