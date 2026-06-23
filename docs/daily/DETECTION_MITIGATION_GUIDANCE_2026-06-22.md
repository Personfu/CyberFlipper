# Detection and Mitigation Guidance — 2026-06-22

## Scope

This guidance is for defenders reviewing classroom labs, hardware workbenches, owned devices, and public CyberFlipper documentation. It is intentionally limited to policy, logging, inventory, and mitigation patterns.

## USB HID and peripheral controls

Detection ideas:

- Log newly attached USB keyboard-class devices.
- Alert when a new keyboard appears while a workstation is locked, unattended, or in a shared lab space.
- Track rapid text-entry anomalies as a training signal, not as a sole indicator.
- Correlate physical-access events with workstation logs and help-desk tickets.

Mitigation ideas:

- Use managed device-control policy where appropriate.
- Require screen locking and supervised demos for public/shared systems.
- Keep lab hosts separate from production workstations.
- Use clear consent banners in training rooms.
- Keep USB demonstrations visible and reversible.

Publication boundary:

- Public examples may type visible text, scope cards, or checklists.
- Anything that opens tools, changes host settings, runs commands, or interacts with sensitive applications requires human approval and should not be published by default.

## NFC and LF RFID controls

Detection ideas:

- Keep a written inventory of authorized test tags and readers.
- Document production badge technologies separately from lab tags.
- Review access-control logs after authorized exercises.
- Watch for repeated failed reads or unusual reader interactions during approved tests.

Mitigation ideas:

- Use modern badge technologies and layered access controls.
- Separate facility access reviews from public training material.
- Revoke lost cards promptly.
- Redact identifiers from screenshots, photos, and notes.

Publication boundary:

- Public examples should use blank tags, synthetic diagrams, or redacted inventories.
- Real badge data, facility reader details, and derived tag files require human approval and should normally remain private.

## Sub-GHz and RF controls

Detection ideas:

- Maintain a lab RF activity log with date, owner, purpose, and receive/transmit status.
- Document approved equipment and antennas.
- Track complaints or interference reports during lab sessions.

Mitigation ideas:

- Prefer receive-only demonstrations for public education.
- Review regional rules before any lab work involving transmission.
- Avoid public-space testing.
- Keep all signal artifacts out of public releases unless synthetic and approved.

Publication boundary:

- Public examples should focus on ethics, inventory, rules, and defensive policy.
- Captures, protocol-specific procedures, and device-control examples require human approval.

## Infrared controls

Detection ideas:

- Maintain a meeting-room A/V inventory.
- Track replacement remotes and owner-approved control paths.
- Document rooms where shared remotes are unmanaged.

Mitigation ideas:

- Lock or supervise control panels in public rooms.
- Keep spare remotes controlled.
- Document escalation contacts for A/V issues.

Publication boundary:

- Public examples should be inventory templates and maintenance checklists.
- Broad automation, public-space control, or disruptive use cases are not suitable for publication.

## Firmware and dependency controls

Detection ideas:

- Track firmware version, source, build hash, and SD-card pack version.
- Separate official firmware references from community firmware references.
- Record any third-party app or asset source before publication.

Mitigation ideas:

- Prefer official firmware notes for public baselines.
- Require license and provenance review for community content.
- Do not publish binaries or third-party assets without explicit approval.

## CISA KEV workflow

Detection and triage ideas:

- Match KEV entries to owned assets.
- Assign an owner and due date.
- Record remediation evidence or documented exception.
- Use KEV as a defensive prioritization source, not as public lab material.

Publication boundary:

- Claims about new KEV entries require direct verification from the official CISA source before publication.
