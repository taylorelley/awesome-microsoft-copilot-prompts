---
title: "Reschedule Conflicts on My Calendar"
app: cross-app
role: general
difficulty: intermediate
use_case: "When your week has scheduling conflicts, let Cowork identify them and propose resolutions — then act after your approval."
---

## Context
When your week has scheduling conflicts, let Cowork identify them and propose resolutions.

## Prompt
```
Scan my calendar for the next 7 days. Find every scheduling conflict — two or more events overlapping at the same time.

For each conflict:
- List the two events, their times, and attendees
- Identify which event I organised vs which I was invited to
- Propose a resolution: which one to reschedule and suggest 2 alternative slots based on my calendar availability

Show me all conflicts and your proposed resolutions before taking any action.

After I confirm each resolution, reschedule the relevant event and send updated calendar notifications to the affected attendees. Handle one conflict at a time — do not reschedule anything until I approve that specific change.
```
