---
title: "Recurring Meeting Preparation — Automated"
app: cross-app
role: general
difficulty: intermediate
use_case: "For a meeting that recurs every week or two, automatically pull the relevant context before each occurrence."
---

## Context
For a meeting that recurs every week or two, automatically pull the relevant context before each occurrence.

## Prompt
```
Before every [meeting name, e.g. "GenAI Biweekly Review"] — which recurs on [day and time] — do the following automatically 30 minutes before it starts:

Search my emails and Teams for anything related to [topic/project] from the last 14 days. Produce:
- New developments since the last meeting
- Open items from previous meeting notes that are still unresolved
- Anything I should raise proactively today
- One question worth asking the group

Keep this under 100 words. Deliver as a message to me only. Do not send or post to any other recipient.
```
