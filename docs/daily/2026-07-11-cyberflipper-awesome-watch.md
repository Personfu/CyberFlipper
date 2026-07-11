# CyberFlipper Awesome Watch — 2026-07-11

## Scope

Authorized defensive research only. No offensive code was copied. RF, Marauder, jammer, fuzzing, cracking, NFC/RFID, BadUSB, and firmware projects are used only for safety controls, detection ideas, interoperability review, and mitigation-first education.

## What changed

### Official firmware

- `flipperdevices/flipperzero-firmware` recently fixed two NFC parser stack-buffer overflows in MIFARE Ultralight `FAST_READ` handling and DESFire file-settings parsing. The fixes add explicit bounds checks before copying variable-length data into fixed-size stack storage.
- Recent official changes also include USB HID keyboard LED-state reporting fixes, file-copy retry behavior, CCID test-app USB refactoring, and documentation repairs.

### Community firmware and tooling

- `DarkFlippers/unleashed-firmware` synchronized its application tag and API on 2026-07-11. CyberFlipper should treat API synchronization as an interoperability and rollback checkpoint, not as proof that every third-party app is safe.
- `UberGuidoZ/Flipper` repaired dead links in Sub-GHz documentation on 2026-07-11. Documentation integrity belongs in release validation because broken references can push operators toward stale or unreviewed material.
- `RogueMaster/flipperzero-firmware-wPlugins` continued rapid plugin and Sub-GHz raw-editor updates. The defensive lesson is to record exact commit, firmware API, plugin source, license, rollback image, and test hardware before installation.
- `RocketGod-git/ProtoPirate` remains relevant only as a source of protocol-boundary, memory-pressure, plugin-isolation, and lawful-radio-lab lessons. Brute-force, emulation, vehicle, or transmission functionality is excluded from CyberFlipper instructions.

## Why it matters

Parser fixes show that malformed or oversized NFC data can become a device-side memory-safety risk. Defensive labs should validate rejection behavior, capture firmware provenance, and require update/rollback readiness without teaching exploitation. Rapid third-party firmware and plugin changes also create compatibility, provenance, and supply-chain risk.

## Safe repository additions

This run adds Level 020: **NFC Parser Boundary and Firmware Provenance Review**.

The pack includes:

- a defensive breakdown of the parser issue class;
- a firmware and plugin provenance worksheet;
- visible local BadUSB worksheets for Windows, Linux, and macOS;
- a lint and human-review checklist;
- no tag emulation, malformed-frame generation, fuzzing corpus, exploit reproduction, radio transmission, credential access, persistence, or stealth.

## Source notes

Primary references reviewed:

- Flipper Devices firmware commit `0dd3681f63af74fc12f6ad3f50e93c56e4b9dd28` — NFC parser bounds fixes.
- Flipper Devices firmware recent commits covering HID state reporting, storage retry, CCID refactoring, and documentation.
- DarkFlippers Unleashed commit `9bcabc0134a4503e341b804999dd73ec890466af` — app tag/API synchronization.
- UberGuidoZ Flipper commits `8a740059a34b8f67d80bd1495c83fc2ce8e0b5b1` and `a6f21a4e8bcdf3df8db06a2710eb7822f38507a4` — Sub-GHz documentation-link repair.
- NIST Cybersecurity Framework 2.0 for Govern, Identify, Protect, Detect, Respond, and Recover framing.

## Publication gate

Human review is required before merge because this pack contains BadUSB-style host automation files. Reviewers must confirm visible execution, local-only output, `cyberflipper_` filename prefixes, no elevation, no hidden windows, no secret collection, and no remote transfer.
