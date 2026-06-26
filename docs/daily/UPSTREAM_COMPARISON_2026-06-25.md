# Upstream Comparison — 2026-06-25

## Sources reviewed

- https://github.com/UberGuidoZ/Flipper/commits/main/
- https://github.com/DarkFlippers/unleashed-firmware/commits/dev/
- https://docs.flipper.net/
- https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json

## UberGuidoZ/Flipper main

Visible recent commit history:

| Date | Commit summary | Short SHA | CyberFlipper handling |
| --- | --- | --- | --- |
| 2026-06-06 | Merge pull request #683 from RogueMaster/main | 29117c7 | Track as upstream compatibility signal only. |
| 2026-06-04 | RM FAP UPDATES API v87.2 | 9e4fae2 | Requires manual FAP/API compatibility review before any import. |
| 2026-06-04 | RM FAP UPDATES API v87.2 README | 8f0a1cb | Documentation reference only; do not copy without review. |
| 2026-05-26 | Merge pull request #682 from RogueMaster/main | 6aeaa54 | Track submodule/module provenance. |
| 2026-05-26 | Module Update / RM FAP UPDATES | 7cc946a / 99eaad2 | No direct import. |

Review posture:

- Treat external app bundles and FAP updates as untrusted until license, source, hash, and behavior review is complete.
- Keep CyberFlipper update content limited to compatibility notes and defensive review criteria.
- Do not include files that automate host modification, credential handling, persistence, evasion, destructive actions, unauthorized RF/NFC/RFID actions, or third-party compromise.

## DarkFlippers/unleashed-firmware dev

Visible recent commit history:

| Date | Commit summary | Short SHA | CyberFlipper handling |
| --- | --- | --- | --- |
| 2026-05-23 | upd changelog | c5bcab3 | Documentation tracking only. |
| 2026-05-09 | upd changelog | 44ff715 | Documentation tracking only. |
| 2026-05-09 | hotfix faac slh | 41628a4 | Protocol-sensitive; requires human approval before publication. |
| 2026-05-04 | force build params | 09fc864 | Build reproducibility review only. |
| 2026-05-03 | add canvas_buffer to api | daec03b | API compatibility review only. |
| 2026-04-30 | remove duplicate code from raw protocol | bcbb1b5 | Protocol-sensitive; requires human approval. |

Review posture:

- Firmware forks may include features that are not appropriate for CyberFlipper public SD-card distribution.
- Protocol names may be mentioned only as risk-review categories unless a reviewer approves publication.
- Any reference to access-control, vehicle, gate, remote, or lock-related material must remain non-operational.

## Cross-source conclusion

No upstream change reviewed today should be imported automatically. The safe CyberFlipper action is documentation-only: maintain provenance notes, compatibility questions, release gates, and defensive checklists.
