# CyberFlipper Daily Authorized Security-Research Update — 2026-06-20

Scope: defensive and educational repository notes for authorized CyberFlipper/Flipper Zero lab work. This update intentionally avoids credential collection, persistence, stealth/evasion, destructive actions, unauthorized exploitation steps, and code intended to compromise third-party systems.

## Executive summary

Today’s upstream review is mostly firmware/tooling hygiene plus several items that require human review before import. DarkFlippers `dev` moved through API 87.10 and added or documented NFC, LF RFID, Sub-GHz, BLE/app, and parser changes. UberGuidoZ `main` merged a RogueMaster application bundle update on 2026-06-05; because that update is largely prebuilt `.fap` application content, it should be treated as binary supply-chain intake rather than a normal source diff.

Repository action prepared in the staging fork only, because direct write access to `Fu-LLC/CyberFlipper` is still blocked by GitHub app permissions.

## Upstream changes reviewed

### DarkFlippers/unleashed-firmware `dev`

Recent commits observed between 2026-06-14 and 2026-06-18:

- `1f6a061` — NFC display logic now shows captured MIFARE Ultralight / NTAG PWD and PACK values in a full information view when present.
- `968bf30` — NFC display logic also surfaces captured PWD/PACK data on the read-success screen.
- `45bca81` — Adds a Bambu Lab filament spool parser for supported NFC/RFID tag data.
- `e503173` / `e13c82` — Changelog updates for API 87.10, Sub-GHz endless-transmit crash fix via RPC/mobile app path, Telcoma/Cardin EDGE static protocol, Hitag Micro support, T5577 blanking/read-back verification, NFC Magic guard work, FindMy app update, and BLE sync/delay fixes.
- `c850aeb` / `fbfa062` — App build tag updates from 2026-06-15 to 2026-06-18.

Security interpretation:

- Treat any feature that displays, stores, or exports NFC password/authenticator material as sensitive. It can be useful for authorized card inventory and debugging, but it should not be enabled in shared screenshots, demo recordings, public issue templates, or repository fixtures.
- Treat T5577 wipe/reset features as lab-only. Publish only policy and verification notes unless a human reviewer confirms that operational examples are harmless and authorized.
- Treat Sub-GHz protocol additions as documentation-only unless frequency, region, authorization, device owner, and test enclosure are documented.
- The Sub-GHz endless-transmit crash fix is a defensive reliability improvement worth tracking because it reduces accidental RF activity and device instability.

### UberGuidoZ/Flipper `main`

Recent commits observed in June 2026:

- `8f0a1cb` — RogueMaster FAP updates API v87.2 README.
- `9e4fae2` — RogueMaster FAP updates API v87.2.
- `29117c7` — Merge pull request #683 from RogueMaster/main on 2026-06-05.

Security interpretation:

- The merge contains many prebuilt `.fap` applications. Binary-only app intake should be quarantined until source provenance, hash set, license compatibility, and functionality review are complete.
- Apps with names suggesting RF, Wi-Fi, BLE, NRF24, ESP, HID, or network activity require explicit owner-approved lab scope before inclusion or distribution.
- Do not import prebuilt apps directly into CyberFlipper release folders without human approval.

## Defensive source watch

Use CISA KEV as a prioritization signal, but verify each item directly against the official catalog before publishing hard claims: https://www.cisa.gov/known-exploited-vulnerabilities-catalog

Additional defensive references for this repository line:

- FIRST EPSS data and risk-prioritization context: https://www.first.org/epss/data_stats
- Flipper Zero documentation portal: https://docs.flipper.net/
- Flipper Zero firmware source: https://github.com/flipperdevices/flipperzero-firmware
- DarkFlippers Unleashed firmware commits: https://github.com/DarkFlippers/unleashed-firmware/commits/dev/
- UberGuidoZ Flipper commits: https://github.com/UberGuidoZ/Flipper/commits/main/
- BadUSB detection research: https://arxiv.org/abs/2302.04541
- USB firmware vetting research: https://arxiv.org/abs/1708.09114
- Malicious public PoC repository risk: https://arxiv.org/abs/2210.08374

## Detection and mitigation notes

BadUSB / HID demos:

- Log new USB HID insertions and correlate them with process creation, shell launches, script interpreters, and unusually fast keystroke bursts.
- Keep lab scripts limited to visible, local text entry. No network access, no file collection, no system-setting changes, and no privilege-sensitive operations.
- For endpoint controls, require USB device allowlisting where feasible and review Windows PnP, Sysmon, EDR, and shell telemetry around test times.

NFC / LF RFID:

- Do not store real badge dumps, facility codes, card passwords, authenticator values, UID mappings, or live access-control material in the repository.
- Use synthetic fixtures or blank lab tags only.
- Review whether any public screenshot, log, or markdown table could expose NFC password/authenticator fields.
- Require documented owner approval for card inventory, lost-badge workflow tests, revocation tests, or reader observations.

Sub-GHz / RF:

- Use receive-only notes by default.
- Require region/frequency compliance review and device owner authorization before any transmit-capable workflow is documented or demonstrated.
- Prefer shielded, low-power, local lab setups for any RF validation.

Firmware / app supply chain:

- Prefer source builds over prebuilt `.fap` binaries.
- Record upstream commit SHA, build date, toolchain, hash set, license, and review owner.
- Quarantine apps whose purpose or name suggests interference, credential handling, network attack simulation, or unauthorized control until a human reviewer approves a narrow lab use.

## Human approval required

- Importing any UberGuidoZ/RogueMaster prebuilt `.fap` apps.
- Publishing screenshots or sample output that includes NFC PWD/PACK or other authenticator material.
- Adding any T5577 write/wipe examples beyond high-level policy notes.
- Adding Sub-GHz transmit examples, even when framed as authorized testing.
- Adding any firmware/tooling item that interacts with Wi-Fi, BLE, NRF24, ESP modules, HID injection, or physical access systems beyond benign documentation.

## Safe repository additions prepared

- Daily upstream review notes.
- Human approval gate for sensitive upstream features.
- Binary app intake checklist.
- Lab-only harmless keystroke marker documentation.
