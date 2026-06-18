# CyberFlipper CVE Audit Library

This folder contains public-safe, defensive audit scripts for owned systems, classroom labs, and written-scope assessments.

These are not BadUSB payloads. They are visible, read-only report generators designed to help asset owners answer three questions:

1. Is the affected product or legacy software present?
2. What local evidence supports patch or upgrade triage?
3. What should be documented for the remediation ticket?

## Current scripts

| Script | Purpose |
| --- | --- |
| `CVE-2025-26399-SolarWinds-WHD-audit.ps1` | SolarWinds Web Help Desk inventory and exposure report. |
| `CVE-2009-0238-Excel-audit.ps1` | Legacy Excel / Office exposure and patch-evidence report. |

## Usage

Open PowerShell as the appropriate administrator or standard user for your environment and run the script visibly:

```powershell
powershell -NoProfile -ExecutionPolicy RemoteSigned -File .\CVE-2025-26399-SolarWinds-WHD-audit.ps1 -OutputDirectory "$env:USERPROFILE\Desktop"
```

## Safety rules

- Run only on systems you own, administer, or have written permission to assess.
- Do not hide execution windows.
- Do not bypass policy controls.
- Do not collect credentials, tokens, cookies, private keys, or user content.
- Do not test exploitability on production systems.
- Attach the generated report to a patch, upgrade, or risk-acceptance ticket.
