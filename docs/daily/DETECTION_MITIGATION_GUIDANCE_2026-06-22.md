# Detection and Mitigation Guidance — 2026-06-22

## Scope

This document provides defensive controls for CyberFlipper lab work. It is intended for authorized security research, training, and repository review. It does not describe compromise workflows or production-device operation.

## USB HID controls

Detection opportunities:

- New keyboard or mouse device enrollment outside approved maintenance windows.
- HID devices appearing while a host is locked, unattended, or in a restricted lab zone.
- Rapid scripted text entry where no approved lab demonstration is scheduled.
- Unrecognized USB VID/PID or serial combinations on managed endpoints.

Mitigations:

- Enforce allowlists for managed lab hosts where practical.
- Require operator presence and visible screen recording for demonstrations.
- Use isolated test machines with no production access.
- Document expected visible output before the test begins.
- Disconnect and investigate if any prompt, window, or host differs from the approved plan.

## NFC and LF RFID controls

Detection opportunities:

- Unscheduled badge-reader maintenance or unusual reader-error reports.
- Public screenshots or tickets containing card identifiers or parser output.
- Unapproved storage of card-related files in repositories, chat, issue trackers, or shared drives.

Mitigations:

- Use synthetic training cards where possible.
- Keep raw values out of public repositories.
- Redact screenshots and logs before review.
- Store evidence in an approved restricted location.
- Prefer stronger credential technologies and backend authorization checks for real access-control systems.

## Sub-GHz and infrared controls

Detection opportunities:

- Unplanned remote-control interference reports.
- Unknown remotes in shared meeting spaces.
- Unapproved radio testing in production areas.

Mitigations:

- Keep testing receive-only unless explicit transmission approval exists.
- Record owner, device model, location, and approved frequency scope.
- Avoid public release of captures, pairing data, production remote identifiers, or room-specific control maps.
- For shared A/V spaces, inventory remotes and remove unmanaged spares.

## Firmware/tooling controls

Detection opportunities:

- New firmware, app bundles, or plugin binaries added without review.
- Documentation that blends official firmware behavior with community firmware behavior without labels.
- References to parser output or app behavior that came from unreviewed upstream commits.

Mitigations:

- Separate official release notes from community firmware watch notes.
- Require source URL, license status, and maintainer approval for every imported artifact.
- Do not publish binaries from community forks through CyberFlipper without explicit review.
- Use changelogs and compatibility notes rather than bundled artifacts.

## Approval gate

Human approval is required before any detection guidance is converted into operational procedures for live environments. The default repository posture is documentation-only until a maintainer approves deployment.
