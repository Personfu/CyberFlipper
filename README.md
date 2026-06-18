# CyberFlipper

**FLLC / Personfu developer hardware lab for Flipper Zero, Proxmark, Hak5-style training workflows, DEF CON Badgelife, DEF CON 34 SAO reference planning, NFC/RFID, RF/IR, tamper-evident practice, 3D printing, soldering, sensors, Arduino, Raspberry Pi, ESP32, red/blue payload education, and embedded security documentation.**

Public site: `https://personfu.github.io/CyberFlipper/`  
Engineering Forge: `https://personfu.github.io/CyberFlipper/engineering.html`  
Workbench Manifest: `https://personfu.github.io/CyberFlipper/workbench.html`  
CVE Audit Payloads: `https://personfu.github.io/CyberFlipper/cve-audits.html`  
Primary FLLC site: `https://fllc.net`  
Repository: `https://github.com/Personfu/CyberFlipper`

## What this repository is

CyberFlipper is being cleaned up into a professional public content hub and lab asset repository. The goal is to publish free, useful, defensible developer content while creating a clear path to FLLC services such as workshops, documentation cleanup, hardware lab kits, student training, portfolio projects, and authorized assessment support.

The public site now emphasizes:

- Flipper Zero SD-card organization, IR/NFC/RFID learning sets, GPIO safety, and app notes
- Proxmark and NFC/RFID lab notebooks for owned cards and test tags
- Hak5-style payload engineering concepts framed as logged, reversible, authorized training cases
- DEF CON Badgelife PCB planning, DEF CON 34 SAO spec-sheet reference, BOMs, soldering practice, and bring-up notes
- 3D-printed housings, badge stands, fixtures, sensor pods, cable relief, and heat-set insert planning
- Arduino, Raspberry Pi, and ESP32 build patterns for telemetry, dashboards, consent pages, and local logging
- Tamper-evident inspection, seal taxonomy, and chain-of-custody thinking
- Aerospace and embedded reliability habits: telemetry plans, firmware hygiene, and student-team documentation
- Red-team validation cards and blue-team audit scripts that stay public-safe and authorized

## Engineering Forge

`web/engineering.html` is the flagship build showcase. It includes:

- A CSS-rendered badge/SAO visual system for a more polished Badgelife identity
- A direct CTA to the official DEF CON 34 SAO spec sheet
- Safe SAO planning guidance: power budget, header orientation, mechanical fit, firmware bring-up, BOM, and test flow
- 3D printing, soldering, sensor, Arduino, Raspberry Pi, ESP32, Flipper, and Proxmark content lanes
- Public surface-level payload examples that stay harmless and classroom-safe

The Engineering Forge is intentionally positioned as educational/fan engineering content. CyberFlipper/FLLC does not claim official DEF CON affiliation.

## Workbench Manifest

`web/workbench.html` is the portfolio-grade build pipeline. It turns FLLC hardware content into repeatable deliverables:

- Scope and safety card
- CAD/STL or enclosure render
- KiCad/schematic or wiring reference
- BOM with part alternates and substitution risks
- Firmware with version output, serial diagnostics, and safe failure behavior
- Sensor telemetry examples such as CSV logs or dashboard screenshots
- Public-safe payload cards: consent prompts, scope banners, local-only logs, and defensive test cases
- Test report: continuity, smoke test, enclosure fit, photos, and lessons learned

This page exists to make the project look like real engineering work: proof on the bench, not loose claims.

## CVE Audit Payload Library

`web/cve-audits.html` turns the user's BadUSB-style concept into a safer public format: visible PowerShell report generators and red/blue payload cards.

Current audit scripts:

- `web/audits/CVE-2025-26399-SolarWinds-WHD-audit.ps1` — SolarWinds Web Help Desk inventory and exposure report.
- `web/audits/CVE-2009-0238-Excel-audit.ps1` — legacy Excel / Office exposure and patch-evidence report.

Supporting files:

- `web/audits/README.md` — usage rules and safety standard.
- `web/payloads.json` — public-safe red-team validation and blue-team response catalog.
- `web/data/cve-feed.json` — tracked advisory feed displayed by the site.
- `scripts/refresh-cve-feed.mjs` — refreshes public NVD metadata for tracked CVEs.
- `.github/workflows/refresh-cve-feed.yml` — scheduled/manual GitHub Action that updates the feed.

The audit scripts intentionally avoid hidden windows, execution-policy bypass examples, credential collection, persistence, exploitability tests, and live-target instructions. They are for owned systems, administered systems, classroom labs, and written-scope assessments.

## Authorized-use boundary

This repository is for owned hardware, classroom labs, CTF ranges, client-approved scopes, and defensive education.

Do not use CyberFlipper content for unauthorized access, credential capture, stealth, persistence, evasion, reverse shells, exploit chains, or testing against systems, cards, devices, RF environments, or networks you do not own or administer. Public content should reduce risk, teach defensive thinking, and produce clean documentation.

## Website map

```text
web/
├── index.html          # FLLC dev lab landing page
├── engineering.html    # Engineering Forge: Badgelife, SAO, fabrication, sensors, safe payloads
├── workbench.html      # Workbench Manifest: build pipeline, artifacts, deliverables
├── cve-audits.html     # safe CVE audit payload library and red/blue catalog
├── free-labs.html      # free safe starter labs and content lanes
├── about.html          # project positioning, policy, and service paths
├── stats.html          # content metrics and publication standards
├── download.html       # safe release/download guidance
├── intel.html          # CVE research dashboard
├── audits/             # visible, read-only PowerShell audit scripts
├── data/cve-feed.json  # auto-updated tracked CVE metadata
├── styles.css          # cyberpunk HUD theme
├── fllc-visuals.css    # Badgelife / SAO / hardware-lab visual layer
└── dashboard.js        # shared UI animation/session script
```

## Free public labs

The Free Labs page starts with 12 safe starter modules:

1. Flipper SD Hygiene
2. IR Remote Baseline
3. NFC Tag Anatomy
4. Proxmark Notes
5. GPIO Bring-Up
6. Badgelife Build Log
7. Tamper-Evident Inspection
8. RF Listening Ethics
9. Payload Documentation
10. Aerospace Telemetry Mindset
11. FLLC Portfolio Writeup
12. Workshop Kit Plan

Each module is designed to create a documented deliverable and a defensive takeaway.

## Public payload example policy

Public payload examples must be boring on purpose. Acceptable examples include:

- Scope banners and consent prompts
- Local-only log creation
- Sensor telemetry and CSV demos
- Documentation scaffolds for authorized tests
- Training payloads that are reversible, visible, and explained
- CVE presence audits that collect product, version, service, patch, and exposure evidence
- Blue-team response cards for patch tickets, detection notes, and lab validation

Do not publish credential capture, persistence, stealth, evasion, exploitation chains, reverse shells, bypass flags, hidden execution, or instructions for live targets.

## Auto-update behavior

The GitHub Action in `.github/workflows/refresh-cve-feed.yml` runs daily and can also be triggered manually. It executes `scripts/refresh-cve-feed.mjs`, refreshes public advisory metadata for tracked CVEs, and commits changes to `web/data/cve-feed.json` only when that feed changes.

This is repository content refresh, not endpoint behavior. It does not run on visitor machines.

## Download / install guidance

Use GitHub Releases when available. For Flipper Zero content packs, prefer qFlipper SD-card copy workflows and back up your SD card before replacing files. Do not flash firmware or run device content unless you understand the update path and have a rollback plan.

## Development notes

The public site is static HTML/CSS/JS under `web/`. Keep pages simple, readable, and safe:

- Every public lab must name the lawful scope.
- Every tool note must include a defensive use case.
- Every payload concept must be reversible and logged.
- Every RF/NFC topic must stay on owned test gear.
- Every FLLC service path should point to a professional outcome.
- Every hardware build should produce a portfolio artifact: BOM, photos, wiring notes, firmware version, test result, and next step.
- Every CVE audit script should be visible, read-only, local-output, and tied to remediation documentation.

## Maintainer positioning

CyberFlipper is part of the FLLC public display and revenue path. Free content should prove capability without handing out misuse workflows. Professional work should be routed to FLLC for training, implementation, documentation, and lab-kit buildouts.

---

© 2026 FLLC / Furulie LLC / Personfu. For authorized security education and defensive engineering only.
