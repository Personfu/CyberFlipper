# CyberFlipper Daily Authorized Security-Research Update — 2026-06-22

## Scope

This update is documentation-only and is intended for owner-approved CyberFlipper lab work, defensive review, hardware/firmware inventory, and education. It does not add executable firmware, app binaries, live signal files, card dumps, keys, secrets, production identifiers, or host-modifying USB HID material.

## Repository status

Target repository reviewed: `https://github.com/Fu-LLC/CyberFlipper`

Direct write access to the Fu-LLC organization was not available through the current GitHub integration in prior runs. This update is therefore staged in the accessible review path and should be promoted to Fu-LLC only after a human maintainer verifies source accuracy, licensing/provenance, and organizational approval.

Open daily review PRs already exist for 2026-06-20 and 2026-06-21 in the accessible fork path. This 2026-06-22 update is independent and date-scoped to avoid conflicting with those pending review packages.

## Upstream watch summary

### UberGuidoZ/Flipper — `main`

Recent June 2026 commits visible in the connector search:

- `29117c73ab6c3ac47eabf8f23e9dacc24f09012b` — Merge pull request #683 from RogueMaster/main — created 2026-06-05.
- `9e4fae2b5aa44fd20de4a2e6c4dbf417c0a8602f` — RM FAP UPDATES API v87.2 — created 2026-06-04.
- `8f0a1cb4be5087cef07da1c2b93b8e4555cf96b1` — RM FAP UPDATES API v87.2 README — created 2026-06-04.

Defensive implication: treat this stream as compatibility and provenance watch material. Do not import files into CyberFlipper without maintainer review of licensing, upstream origin, binary status, and safety impact.

### DarkFlippers/unleashed-firmware — `dev`

Recent June 2026 commits visible in the connector search:

- `fbfa062aab3870685d70af09a61f62edf76f588d` — bump apps — created 2026-06-18.
- `c850aeb1feec86c08cd61d435f7083a0eafbe23b` — bump apps — created 2026-06-18.
- `e13c82aa702da361a1c32f6e4a63187d76a72aea` — upd changelog — created 2026-06-16.
- `45bca81baaa26fa320a55d6d71d8a17afc3c002a` — NFC: add Bambu Lab filament spool parser (#1012) — created 2026-06-16.
- `5939675b09fc04abd1278205f4279a3daaa13847` — upd changelog — created 2026-06-15.
- `968bf30b74084e859dd72afba6f2a1a7aed81b33` — NFC: show MIFARE Ultralight/NTAG PWD & PACK on read screen too (#1011) — created 2026-06-15.
- `1f6a061ad80447647dbff2009ca639404b13654a` — NFC: show MIFARE Ultralight/NTAG PWD & PACK in full info view (#1010) — created 2026-06-14.
- `c79d12302eb28d26484c29aace893dc2e3e04d55` — apply findmy app PR with google support — created 2026-06-12.

Defensive implication: NFC display/parser changes are relevant to lab transparency and data-handling review, but any material that surfaces authentication-related NFC fields must be approval-gated and sanitized before public documentation.

## Source digest

Primary sources reviewed or queued for review:

- CISA KEV catalog: `https://www.cisa.gov/known-exploited-vulnerabilities-catalog`
- CISA KEV JSON feed: `https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`
- Official Flipper firmware releases: `https://github.com/flipperdevices/flipperzero-firmware/releases`
- Official NFC documentation: `https://docs.flipper.net/zero/nfc`
- Official Bad USB documentation: `https://docs.flipper.net/zero/bad-usb`
- Official Sub-GHz documentation: `https://docs.flipper.net/zero/sub-ghz`
- Official 125 kHz RFID documentation: `https://docs.flipper.net/zero/rfid`
- Upstream comparison source: `https://github.com/UberGuidoZ/Flipper/commits/main/`
- Upstream comparison source: `https://github.com/DarkFlippers/unleashed-firmware/commits/dev/`

CISA KEV note: the official CISA page and JSON feed returned HTTP 403 in this run's browser. No newly added KEV entries are asserted in this update. Use KEV as a triage process reference until a maintainer verifies the latest catalog directly.

## Defensive breakdown

### USB HID / Bad USB review

The official Flipper documentation describes Bad USB as HID-style keyboard/mouse behavior driven by text payloads and notes that files are uploaded to the SD-card BadUSB folder. CyberFlipper documentation should continue to frame this capability as a physical-access risk and restrict examples to visible text-entry checklists in a lab text editor.

Recommended defender controls:

- Maintain device-control policy for new USB HID devices on managed hosts.
- Alert on unexpected keyboard/mouse device enrollment during locked-screen or unattended periods.
- Keep an approved-device inventory for lab hosts.
- Require a visible lab operator, written authorization, and an isolated host for any HID demonstration.

### NFC review

Official Flipper NFC documentation states that NFC is used with public transport cards, access cards or tags, and digital business cards, and that the device can read, save, emulate, analyze readers, and generate cards. DarkFlippers June changes add or expose parser/display behavior around NFC data. CyberFlipper should document these as data-minimization and disclosure risks, not as operational instructions.

Recommended defender controls:

- Treat any captured NFC metadata as sensitive lab data.
- Do not publish real card images, dumps, identifiers, authentication fields, or site-specific screenshots.
- Use synthetic examples or empty templates for training.
- Require owner approval before parser-derived fields are included in docs.

### Sub-GHz review

Official Flipper documentation states that Sub-GHz can receive and transmit in 300–928 MHz ranges and includes region information for allowed transmission frequencies. CyberFlipper should avoid live transmission guidance and focus on inventory, legal authorization, device-owner consent, and mitigation checklists.

Recommended defender controls:

- Record radio testing scope, owner, location, device model, and permitted frequency bands.
- Prefer receive-only observation and lab signal generators over production devices.
- Do not publish raw captures, rolling-code material, access-control remotes, or pairing procedures.

### LF RFID review

LF RFID remains relevant for physical access-control education. CyberFlipper should keep LF RFID content limited to inventory templates, risk review, and migration guidance toward stronger credentials. Do not include real badge identifiers or cloning workflows.

## Human approval required before publishing or deployment

- Any change derived from community firmware, plugins, or app packs.
- Any file containing real RF/NFC/RFID/IR/GPIO observations.
- Any example that could modify a host, device, reader, remote, or production system.
- Any public claim about a vulnerability, bypass, exploitability, or vendor weakness.
- Any licensed third-party material whose redistribution status has not been verified.
- Any parser output that displays authentication-related NFC fields or unique device identifiers.

## Safe next steps

- Keep this update as a review PR until a maintainer validates source links and licensing.
- Convert any operational examples into empty templates unless the lab scope is explicitly documented.
- Track official Flipper firmware releases separately from community firmware streams.
- Re-check CISA KEV through an authenticated or direct browser session before claiming a current KEV delta.
