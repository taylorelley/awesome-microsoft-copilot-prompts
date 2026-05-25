---
title: "Send Meeting Follow-Up Email"
app: cross-app
role: general
difficulty: advanced
use_case: "After any meeting, automatically draft and send the recap email to all attendees — without doing it manually."
---

## Context
After any meeting, automatically draft and send the recap email to all attendees.

## Prompt
```
I just finished a meeting with [attendees or team name]. Find the Teams transcript or my notes from the last 2 hours.

Step 1: Extract all action items (what, who owns it, deadline if mentioned), decisions made, and open questions. Show me this list and wait for my confirmation that it is accurate.

Step 2: Draft a follow-up email to all attendees with this structure:
- Subject: Follow-up: [meeting name] — [date]
- Action items with owners and deadlines
- Decisions made
- Open questions and who is responsible for answering them
- Next meeting date if discussed

Step 3: Show me the full draft and the complete recipient list. Wait for my explicit approval before sending.

Step 4: Send the email only after I approve.
```
