---
title: "Block Focus Time on Calendar This Week"
app: cross-app
role: general
difficulty: intermediate
use_case: "Find the gaps in your calendar and add focus blocks before your week fills up completely."
---

## Context
Find the gaps in your calendar and add focus blocks before your week fills up completely.

## Prompt
```
Look at my calendar for the next 5 working days. Find any day that has less than 90 minutes of uninterrupted time between 8 AM and 6 PM.

For each such day, propose one focus block of [60/90/120] minutes placed in the largest available gap, avoiding early morning before 8 AM and lunch hours.

Show me the proposed blocks — day, start time, end time — before creating anything.

After I confirm, create the calendar events titled "Focus Time — [project or topic if I specify one]" and set them as Busy. Do not create any event until I approve the full list.
```
