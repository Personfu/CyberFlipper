# Defensive Source Digest — 2026-06-22

## Method

Sources were reviewed for defensive relevance, education value, and publication risk. This digest is suitable for repository review but does not authorize deployment, live RF/NFC/RFID/IR testing, app import, firmware flashing, or public claims.

## Source set

### CISA KEV

- Catalog page: `https://www.cisa.gov/known-exploited-vulnerabilities-catalog`
- JSON feed: `https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`

Run result: both official CISA KEV endpoints returned HTTP 403 to the browser used in this run. No new KEV entries are claimed. CyberFlipper should continue using KEV as a defensive prioritization process, but a human maintainer should verify the latest catalog directly before publication.

Recommended use in CyberFlipper:

- KEV status is a patch-prioritization signal, not a justification to add exploit detail.
- If a KEV item affects lab tooling, update the local lab-host hardening checklist.
- If a KEV item affects firmware build systems, CI runners, browsers, decompression tools, USB stacks, NFC libraries, or Bluetooth components, route it to human approval.

### Official Flipper documentation

- NFC: `https://docs.flipper.net/zero/nfc`
- Bad USB: `https://docs.flipper.net/zero/bad-usb`
- Sub-GHz: `https://docs.flipper.net/zero/sub-ghz`
- 125 kHz RFID: `https://docs.flipper.net/zero/rfid`
- Firmware releases: `https://github.com/flipperdevices/flipperzero-firmware/releases`

Defensive framing:

- NFC documentation supports education about smart-card technology and emphasizes complex protocols, encryption, authentication, and two-way transfer. CyberFlipper should use this to explain why captured data requires strict handling.
- Bad USB documentation supports USB HID risk education. CyberFlipper examples should remain limited to visible text-entry demonstrations in isolated labs.
- Sub-GHz documentation supports legal/region-aware review. CyberFlipper should not publish transmission instructions, live captures, rolling-code material, or production remote data.
- LF RFID documentation supports physical access-control risk discussion. CyberFlipper should prefer migration guidance and inventory templates over operational card handling.

### Upstream firmware/tooling discussions

- UberGuidoZ/Flipper `main` recent movement: RogueMaster merge and FAP API v87.2 updates in early June 2026.
- DarkFlippers/unleashed-firmware `dev` recent movement: app bumps, NFC parser/display changes, changelog updates, and privacy-sensitive app references in mid-June 2026.

Defensive framing:

- Community firmware streams are useful for awareness and compatibility drift detection.
- Upstream deltas should not be imported without license, provenance, safety, and privacy review.
- Parser-related changes should be documented only with synthetic data and redaction rules.

## Detection and mitigation guidance

### Lab host controls

- Maintain a written inventory of approved USB devices by VID/PID, serial, owner, and test purpose.
- Log unexpected HID enrollment events on Windows, macOS, and Linux lab hosts.
- Use an isolated lab workstation for demonstrations.
- Keep browsers, OS packages, qFlipper, build dependencies, and archive tooling current.
- Treat downloaded firmware, plugins, and community app packs as untrusted until scanned and reviewed.

### Repository controls

- Require human approval for files that contain binary data, generated app packages, signal captures, NFC dumps, RFID values, screenshots from real cards, or real equipment identifiers.
- Prefer Markdown templates and checklists over executable samples.
- Keep a source URL and review status in every daily update.
- Do not merge community firmware behavior into official-baseline documentation unless explicitly labeled.

### Documentation controls

- Redact all unique identifiers from examples.
- Use synthetic test names such as `LAB_CARD_001`, `LAB_REMOTE_001`, and `LAB_HOST_001`.
- Label each example as `authorized lab only` and include owner, scope, date, and reviewer fields.
- Do not publish screenshots that show authentication-related NFC fields, production RF data, or site-specific access-control details.

## Human approval flags

Approval is required for:

- Any claim that a third-party product is vulnerable.
- Any reference to location or tracking applications.
- Any material derived from real lab captures or production devices.
- Any USB HID example beyond visible text-entry notes.
- Any change that imports code or data from community firmware repositories.
- Any documentation that includes authentication-adjacent card fields, even if shown only as screenshots.

## Safe repository action

This digest is safe to stage as documentation. It should remain review-only until a maintainer confirms source availability and whether the Fu-LLC repository accepts daily generated updates.
