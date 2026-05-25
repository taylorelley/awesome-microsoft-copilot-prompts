---
title: "Document from Meeting Notes"
app: cross-app
role: general
difficulty: intermediate
use_case: "Turn raw meeting notes or a transcript into a finished Word document — briefing, MOM, or decision record."
---

## Context
Turn raw meeting notes or a transcript into a finished Word document — briefing, MOM, or decision record.

## Prompt
```
I am attaching my notes from [meeting name] on [date]. [Attach file]

Using these notes, create a Word document formatted as a Minutes of Meeting / Decision Record with:
- Meeting: name, date, attendees
- Context: one-paragraph summary of why this meeting was held
- Key decisions: each on its own line with the decision and who made it
- Action items: what needs to be done, who owns it, deadline if stated
- Open questions: items discussed but not resolved
- Next steps: agreed next meeting or follow-up date

Use formal but clear language. Do not invent content not in the notes — if something is unclear, flag it with [CLARIFY] rather than guessing. Save as a Word document and show me the draft before saving.
```
