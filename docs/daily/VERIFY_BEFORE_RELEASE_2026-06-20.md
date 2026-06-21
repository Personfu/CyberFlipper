# Verify Before Release — 2026-06-20

Before merging this daily pack into a production branch or copying it to an SD-card release, verify:

- The target repository owner has approved publication.
- The daily source links still resolve.
- CISA KEV items and vendor advisories have been checked from primary sources.
- No real badge, card, RF, credential, token, host-secret, or production identifier material is present.
- No prebuilt upstream `.fap` applications have been imported.
- The BadUSB marker still performs visible local text entry only.
- The human approval gate has a named reviewer and date if sensitive features are cleared.

Default if any item is uncertain: HOLD.
