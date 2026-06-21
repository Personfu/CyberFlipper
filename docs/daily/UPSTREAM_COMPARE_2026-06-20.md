# Upstream Compare — 2026-06-20

## DarkFlippers/unleashed-firmware `dev`

Window reviewed: 2026-06-14 through 2026-06-18.

Primary themes:

- API 87.10 updates.
- NFC UI changes that can surface captured MIFARE Ultralight / NTAG PWD and PACK values.
- Bambu Lab filament spool parser.
- NFC Magic guard work.
- LF RFID Hitag Micro support and T5577 blanking/read-back changelog notes.
- Sub-GHz endless-transmit crash fix via RPC/mobile app path.
- Sub-GHz Telcoma/Cardin EDGE static protocol note.
- FindMy app and BLE sync/delay fixes.
- App build tag updates through 18jun2026.

CyberFlipper action:

- Track API compatibility.
- Add explicit redaction language for NFC authenticator display.
- Hold LF RFID write/wipe and Sub-GHz transmit documentation until human approval.
- Treat parser additions as low-risk only when used on owned/synthetic lab tags.

## UberGuidoZ/Flipper `main`

Window reviewed: June 2026 commits.

Primary themes:

- RogueMaster FAP updates API v87.2 README.
- RogueMaster FAP updates API v87.2.
- Merge from RogueMaster/main containing many prebuilt `.fap` applications.

CyberFlipper action:

- Do not import binary apps directly.
- Use binary intake checklist.
- Hold RF, Wi-Fi, BLE, NRF24, ESP, HID, and network-capable apps until approved.
- Prefer source builds and release hashes.

## Net assessment

DarkFlippers changes are mainly source-visible firmware deltas and changelog notes with several sensitive display/control features. UberGuidoZ changes are more supply-chain oriented because the reviewed update includes many binary artifacts. CyberFlipper should publish documentation and review gates only, not operational import of sensitive capabilities.
