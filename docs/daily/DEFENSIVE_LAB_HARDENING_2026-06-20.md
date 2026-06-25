# Defensive Lab Hardening Notes — 2026-06-20

## Purpose

Use current public vulnerability pressure as input for CyberFlipper lab hygiene. This file is defensive-only and does not include exploit procedure, exploit code, weaponized payloads, or third-party targeting steps.

## Priority areas

### 1. Lab Linux hosts and build runners

Actions:

- Keep kernels and distribution packages current.
- Prefer ephemeral CI/build runners when testing third-party firmware or apps.
- Record OS, kernel, package baseline, and patch date for each build host.
- Restrict interactive shell access on shared lab machines.
- Avoid testing unknown binaries on long-lived workstations.

Detection and monitoring notes:

- Log package-update events.
- Track unusual local privilege-boundary events through standard EDR/SIEM controls.
- Compare expected package state against approved baselines.
- Rebuild lab images from clean templates after high-risk review work.

### 2. Firmware and app artifact review

Actions:

- Prefer source builds over binary-only imports.
- Record artifact hash, source URL, commit ID, and build notes.
- Treat executable files as untrusted until reviewed.
- Keep binary import decisions outside automated daily publishing unless human-approved.

Minimum artifact record:

```text
Artifact:
Source URL:
Source commit/tag:
Build method:
Hash:
Reviewer:
Network behavior reviewed: yes/no
Protocol-sensitive behavior reviewed: yes/no
Human approval: required for publish
```

### 3. BadUSB documentation

Allowed:

- Text-entry checklists.
- Local lab banners.
- Incident-note templates.
- Keyboard-layout tests.

Blocked:

- Host configuration changes.
- File download or execution.
- Credential handling.
- Stealth, evasion, persistence, or destructive actions.
- Network callbacks or third-party interaction.

### 4. NFC / LF RFID / Sub-GHz / IR documentation

Allowed:

- Inventory templates.
- Policy review questions.
- Owner authorization records.
- Mitigation guidance.
- Lost badge response workflow.
- BLE pairing hygiene notes.

Blocked:

- Real badge dumps.
- Facility codes.
- Cloned card data.
- Live unauthorized RF transmission steps.
- Device-specific bypass claims without owner authorization and legal review.

## Lab record template

```text
Date:
Reviewer:
System:
Purpose:
Authorization owner:
Firmware source:
Firmware version/commit:
Executable artifacts reviewed: yes/no
Sensitive protocol material present: yes/no
Human approval required: yes/no
Publish decision: approve / hold / reject
Notes:
```

## Publish decision for this update

Recommended decision: publish documentation-only files to a review branch. Hold any executable artifacts, binary firmware, protocol operational examples, or non-benign BadUSB material pending human approval.
