# CyberFlipper Level 005 - Communications and Workflow Inventory

## Purpose

Level 005 expands the BadUSB training ladder into common daily desktop workflow software. The payloads are intentionally local, visible, read-only, and defensive. They produce reports that help a learner understand which communication, meeting, project-management, and knowledge-base tools are present on an authorized lab host.

## Files

- `cf_l005_windows_communications_inventory.txt` - inventories common Windows communication and meeting applications.
- `cf_l005_windows_project_knowledge_inventory.txt` - inventories common Windows project-management and knowledge-base applications.
- `cf_l005_linux_workflow_inventory.txt` - inventories common Linux communication and workflow applications.

## Safety boundary

These scripts do not read browser profiles, credential stores, cookies, tokens, message contents, documents, cloud-sync folders, password-manager vaults, VPN configuration secrets, or protected application data. They do not install software, create persistence, alter policy, bypass controls, exploit vulnerabilities, delete files, or contact remote systems.

## Defensive breakdown

The expected defensive value is asset visibility. Application presence matters for patch management, incident response scoping, software licensing, and endpoint hardening. Communications tools, meeting clients, project systems, and note-taking tools frequently become high-value investigation targets after phishing, token abuse, or social engineering incidents. This level teaches inventory without data extraction.

## Detection and mitigation guidance

Monitor for new HID keyboard devices launching shells or command interpreters. Alert on rapid typed command bursts, PowerShell or terminal launch from an interactive desktop, and newly created `cyberflipper_l005_*` report files. Mitigate with USB device control, endpoint visibility, PowerShell logging, least privilege, and written authorization before HID testing.

## Human approval required

Human review is required before publishing or deployment because these payloads launch shells and inventory installed software, even though they are read-only and local-output only.
