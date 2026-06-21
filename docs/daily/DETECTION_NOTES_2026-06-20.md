# Detection Notes — 2026-06-20

## BadUSB / HID

Telemetry to collect in an authorized lab:

- USB device insertion events.
- New keyboard/HID class devices.
- Process creation shortly after HID insertion.
- Script interpreter or shell launch shortly after HID insertion.
- High-volume keystroke sequences that exceed normal human typing rates.
- Endpoint alerts that correlate with the test window.

Mitigation guidance:

- Use USB device allowlisting for sensitive workstations where feasible.
- Keep lab scripts visible, local, and reversible.
- Require pre-test and post-test operator notes.
- Do not test on production hosts unless the owner has approved the exact test window and scope.

## NFC / LF RFID

Telemetry and documentation to collect:

- Badge policy owner.
- Test card owner.
- Card type observed.
- Whether the card is synthetic, blank, training-only, or production.
- Whether any authenticator, password, UID, facility code, or access-control mapping was exposed.

Mitigation guidance:

- Do not place production card material in Git.
- Redact screenshots.
- Use time-limited lab credentials.
- Verify revocation and lost-badge workflow separately from Flipper testing.

## Sub-GHz / RF

Telemetry and documentation to collect:

- Region and regulatory context.
- Frequency band.
- Receive-only or transmit-capable status.
- Device owner authorization.
- Lab isolation method.

Mitigation guidance:

- Prefer receive-only observations.
- Use shielded or isolated test setups for transmit-capable work.
- Do not publish replay, brute-force, or third-party device-control workflows.

## Firmware / apps

Telemetry and documentation to collect:

- Upstream source URL.
- Commit SHA.
- Artifact hash.
- License.
- Build toolchain.
- Review owner.
- Capability labels.

Mitigation guidance:

- Quarantine unreviewed binaries.
- Prefer reproducible source builds.
- Keep capability labels visible in release notes.
