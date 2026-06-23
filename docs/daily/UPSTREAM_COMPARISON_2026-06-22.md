# Upstream Comparison — 2026-06-22

## Purpose

This document compares recent public upstream movement that may influence CyberFlipper documentation, defensive review, and compatibility planning. It is not an import request and does not approve publication or deployment of upstream content.

## Compared sources

- `https://github.com/UberGuidoZ/Flipper/commits/main/`
- `https://github.com/DarkFlippers/unleashed-firmware/commits/dev/`
- `https://github.com/flipperdevices/flipperzero-firmware/releases`

## UberGuidoZ/Flipper — recent June activity

Connector search for `committer-date:>=2026-06-01` returned three commits:

| Commit | Date observed | Message | CyberFlipper review action |
|---|---:|---|---|
| `29117c73` | 2026-06-05 | Merge pull request #683 from RogueMaster/main | Treat as upstream aggregation; review provenance before any reference. |
| `9e4fae2` | 2026-06-04 | RM FAP UPDATES API v87.2 | Track app API compatibility; do not import app artifacts automatically. |
| `8f0a1cb` | 2026-06-04 | RM FAP UPDATES API v87.2 README | Review documentation deltas for compatibility notes only. |

Review notes:

- FAP/API notes are relevant to SD-card app compatibility and documentation drift.
- Community app packs can include unrelated functionality, mixed licenses, binary assets, and protocol-sensitive material.
- CyberFlipper should only reference upstream material after a maintainer confirms source, license, and safety scope.

## DarkFlippers/unleashed-firmware — recent June activity

Connector search for `committer-date:>=2026-06-01` returned June commits including app bumps, changelog updates, NFC parser/display work, and a Find My app-related PR application.

| Commit | Date observed | Message | CyberFlipper review action |
|---|---:|---|---|
| `fbfa062` | 2026-06-18 | bump apps | Review only as app-bundle movement. |
| `c850aeb` | 2026-06-18 | bump apps | Review only as app-bundle movement. |
| `e13c82a` | 2026-06-16 | upd changelog | Use as release-note context after source verification. |
| `45bca81` | 2026-06-16 | NFC: add Bambu Lab filament spool parser (#1012) | Review as parser/provenance/licensing item. |
| `5939675` | 2026-06-15 | upd changelog | Use as release-note context after source verification. |
| `968bf30` | 2026-06-15 | NFC: show MIFARE Ultralight/NTAG PWD & PACK on read screen too (#1011) | Approval-gate; authentication-related fields require sanitization. |
| `1f6a061` | 2026-06-14 | NFC: show MIFARE Ultralight/NTAG PWD & PACK in full info view (#1010) | Approval-gate; authentication-related fields require sanitization. |
| `c79d123` | 2026-06-12 | apply findmy app PR with google support | Approval-gate; location/device-tracking context requires privacy review. |

Review notes:

- Parser additions can improve transparency for legitimate asset review, but public docs must avoid real tag data or unique identifiers.
- Displaying password/authentication-adjacent NFC fields increases the need for redaction policies in screenshots and tutorials.
- Location/device-tracking app references need privacy, legal, and organizational approval before any public mention beyond a neutral watch note.

## Official firmware baseline

Official Flipper firmware releases remain the safest baseline for public compatibility notes. The release page currently shows:

- `1.4.3` as a bugfix release for firmware `1.4.2`, with an infrared CLI plugin MissingImports fix.
- `1.4.2` as a broader release covering NFC CLI and card parser improvements, Sub-GHz protocol additions, BLE pairing-security recommendations, JavaScript GUI bindings, infrared remote updates, BadUSB fixes, HID remote changes, CLI changes, and iButton updates.

CyberFlipper guidance:

- Prefer official firmware release notes for public documentation.
- Keep community firmware deltas in an approval-gated watch file.
- Do not blend official and community behavior unless the distinction is explicit.

## Import decision

No upstream code, binary, signal, card, key, or generated artifact is approved for import by this comparison. Documentation references only are safe to review, provided source links and licenses are verified by a human maintainer.
