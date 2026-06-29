# CyberFlipper Community Feature Matrix

CyberFlipper should read like a serious Flipper Zero community project: clear scope, visible outputs, repeatable lab workflows, and review gates. This matrix turns the training ladder into a polished public roadmap instead of a loose script pile.

## Community Positioning

CyberFlipper is a defensive field-lab pack for authorized HID, desktop, and workflow visibility training. The public value is repeatable local reporting, readable documentation, and a curriculum that teaches how defenders observe endpoints.

## Script Families

| Family | Purpose | Output | Host impact | Review level |
|---|---|---|---|---|
| Local Inventory | OS, hardware, installed application visibility | Desktop text or HTML report | Read-only report file | Standard review |
| Browser Posture | Browser presence, version, policy keys, update-service visibility | Desktop report | Read-only report file | Standard review |
| Communications Stack | Meeting, chat, and email client inventory | Desktop report | Read-only report file | Standard review |
| Project Stack | Notion, Obsidian, OneNote, Jira helpers, productivity tools | Desktop report | Read-only report file | Standard review |
| Security Baseline | Defender, firewall, encryption, backup-service visibility | Desktop report | Read-only report file | Human review |
| Response Starter | Recent system events, running services, listening sockets, process summary | Desktop report | Read-only report file | Human review |
| Linux Desktop Audit | Package/tool presence, services, firewall status, network interfaces | Home-folder report | Read-only report file | Human review |
| macOS Workstation Audit | System version, application presence, firewall state, application inventory | Desktop report | Read-only report file | Human review |

## Level Ladder

| Level | Theme | Expected skill |
|---|---|---|
| 001 | Host identity and security baseline | Learn visible local reporting |
| 002 | Browser and document-tool inventory | Understand software exposure |
| 003 | Event and application review | Build audit habits |
| 004 | Business-stack visibility | Map common desktop workflows |
| 005 | Communications and workflow inventory | Tie software to response scoping |
| 006 | Community Pack: desktop review suite | Produce polished multi-category reports |
| 007-020 | Defensive endpoint review | Services, logs, updates, firewall, encryption |
| 021-040 | Response automation | Visible triage, timeline starters, handoff notes |
| 041-060 | Detection engineering | Local rule checks, mock alerts, benign lab telemetry |
| 061-080 | Forensic collection discipline | Safe file metadata, hash manifests, chain-of-custody notes |
| 081-099 | Research harnesses | Sandboxed analysis setup and mitigation-first study notes |

## Publication Rules

1. Every script must create a visible local report.
2. Every shell launch must remain visible to the user.
3. Every output file must use a `cyberflipper_` prefix.
4. Every script must have a matching README entry.
5. Every level must include detection and mitigation guidance.
6. Human review is required before any script that reads logs, enumerates services, or checks security posture.
