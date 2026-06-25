# Lab-Only Authorized Testing Examples — 2026-06-22

## Rule of use

These examples are templates for documentation and planning. They are not runnable attack material and are not approval to operate against any third-party system. Use only with written owner authorization, isolated lab assets, and human review.

## Example 1 — USB HID visible text-entry demonstration

Objective: validate that endpoint controls can detect a newly attached HID-style device during a scheduled lab window.

Allowed activity:

- Operator manually opens a plain text editor on an isolated lab host.
- Demonstration types a preapproved banner and checklist into that visible editor.
- Observer records whether endpoint logging captured the new HID device.

Expected visible output:

```text
CYBERFLIPPER LAB DEMO
AUTHORIZED TEXT-ENTRY ONLY
HOST: LAB_HOST_001
OWNER: LAB_OWNER
DATE: YYYY-MM-DD
STOP IF THIS IS NOT THE EXPECTED TEXT EDITOR
```

Not allowed in this example:

- Opening system tools.
- Reading local files.
- Network access.
- Host configuration changes.
- Hidden windows or unattended operation.

## Example 2 — NFC inventory documentation

Objective: document a lab-owned training tag without exposing sensitive values.

Allowed activity:

- Record card family only when approved.
- Use synthetic asset labels.
- Store no raw identifiers in the repository.

Template:

```text
Asset: LAB_CARD_001
Owner: LAB_OWNER
Purpose: awareness training
Card family: approved public label only
Raw values stored in repo: no
Screenshots redacted: yes
Reviewer:
```

## Example 3 — Sub-GHz receive-only awareness

Objective: review whether training material properly documents legal and organizational scope.

Allowed activity:

- Complete a scope form for lab-owned equipment.
- Use receive-only observations when permitted.
- Do not publish captures or production device values.

Template:

```text
Device: LAB_REMOTE_001
Owner: LAB_OWNER
Location: LAB_ROOM
Mode: receive-only planning note
Transmission approval: not granted
Capture published: no
Reviewer:
```

## Example 4 — Infrared A/V inventory

Objective: reduce unmanaged remote-control risk in meeting rooms.

Allowed activity:

- Inventory remotes and displays.
- Note ownership and replacement path.
- Avoid disruptive tests during active use.

Template:

```text
Room: LAB_ROOM
Display/audio device: LAB_AV_001
Remote owner: FACILITIES_OR_IT
Replacement remote documented: yes/no
Shared unmanaged spare removed: yes/no
Reviewer:
```

## Approval status

All examples remain documentation-only until a maintainer approves a specific lab plan. Any expansion beyond these templates requires review before publication or deployment.
