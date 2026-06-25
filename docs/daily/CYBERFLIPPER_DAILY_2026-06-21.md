# CyberFlipper Daily Authorized Research Update - 2026-06-21

Scope: public, defensive, educational, and authorized lab documentation only.

## Executive summary

This update compares the current public activity in the CyberFlipper upstream watch list and turns it into repository-safe research notes. No operational misuse content is included. The focus is firmware provenance, compatibility tracking, review gates, and defensive handling of USB HID, NFC, LF RFID, Sub-GHz, and infrared features.

## Upstream observations

### UberGuidoZ/Flipper main

Recent visible activity on `main` shows a June 6, 2026 merge from RogueMaster and June 4, 2026 FAP API v87.2 updates. Treat these as compatibility signals only. Do not import assets, app binaries, or SD-card material without manual license, provenance, and safety review.

Source: https://github.com/UberGuidoZ/Flipper/commits/main/

### DarkFlippers/unleashed-firmware dev

Recent visible activity on `dev` includes a May 23, 2026 changelog update, May 9, 2026 FAAC SLH hotfix, May 4, 2026 build-parameter changes, May 3, 2026 `canvas_buffer` API addition, and April 30, 2026 raw-protocol cleanup. Protocol-sensitive changes require human review before any downstream documentation, test asset, or compatibility claim is published.

Source: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/

### Official firmware baseline

Official Flipper firmware release 1.4.3 is a bugfix release for 1.4.2 and fixes an infrared CLI plugin import issue. Release 1.4.2 is more relevant for CyberFlipper tracking because it includes NFC CLI expansion, Sub-GHz protocol additions, BLE pairing-security guidance, JavaScript GUI bindings, Infrared remote updates, BadUSB key-combo fixes, HID remote changes, CLI improvements, iButton additions, and LF RFID display improvements.

Source: https://github.com/flipperdevices/flipperzero-firmware/releases

## Defensive interpretation

1. Firmware/app imports: require a source URL, license review, upstream commit reference, and maintainer approval.
2. BadUSB/HID content: keep public examples limited to visible text-entry demonstrations, consent banners, inventory forms, and local-only training notes.
3. NFC and LF RFID content: document risks, policy, badge lifecycle, reader inventory, and card-type taxonomy. Do not store real identifiers, dumps, keys, or facility access material.
4. Sub-GHz content: keep notes at policy, regional compliance, device inventory, and receiver-side observation level. Do not publish replay, bypass, or unauthorized transmission workflows.
5. Infrared content: allow classroom/owned-device inventory and remote-control troubleshooting. Avoid disruptive public-space control examples.
6. Hardware notes: require bench photos, power limits, connector pinout review, smoke-test status, and fail-safe notes before public release.

## CISA KEV and advisory handling

CISA KEV remains the primary active-exploitation triage source for CyberFlipper defensive notes. Because KEV entries can change daily, publication should cite the current catalog and preserve the date checked. For this update, no KEV-specific exploit reproduction, proof-of-concept, or third-party compromise steps are added. The repository should only document defensive triage fields: affected product, business exposure, owner, patch or mitigation decision, due date, verification status, and exception owner.

Source: https://www.cisa.gov/known-exploited-vulnerabilities-catalog

## Safe repository changes prepared

- Added a daily source digest and upstream comparison.
- Added a hardware and firmware review checklist.
- Added a human approval queue for protocol-sensitive and deployment-sensitive items.
- Added a lab-only payload design card limited to visible text-entry documentation patterns.
- Added changelog notes for maintainers.

## Human approval required before publishing or deployment

- Any import from UberGuidoZ, RogueMaster, DarkFlippers, or other community firmware trees.
- Any firmware build, app binary, compiled FAP, SD-card bundle, or external asset.
- Any card, tag, key, reader, remote, or signal file derived from a real environment.
- Any documentation that could be read as instruction to use third-party devices without written authorization.
- Any detection content that names a real customer, facility, badge system, or internal control.

## Publication decision

Status: safe for review branch.

Do not merge until a human maintainer confirms licensing, source links, and public wording.
