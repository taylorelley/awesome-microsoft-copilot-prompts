---
title: "Schedule a Meeting Based on Calendar Availability"
app: cross-app
role: general
difficulty: intermediate
use_case: "Find a time that works for a group of people and send the calendar invite — without the back-and-forth."
---

## Context
Find a time that works for a group of people and send the calendar invite without the back-and-forth.

## Prompt
```
I need to schedule a [30/60]-minute meeting with [names or email addresses] about [topic]. The meeting should happen within the next [7/14] days, preferably [morning/afternoon], and not during lunch hours.

Step 1: Check my calendar and their calendars for available slots that work for everyone. Show me the top 3 options with day, time, and duration.

Step 2: After I select a slot, create a calendar invite with:
- Title: [meeting title]
- Attendees: [list]
- Teams meeting link included
- Agenda in the body: [I will describe the agenda or you propose one based on the topic]

Step 3: Show me the full invite details before sending. Do not send until I confirm.

Step 4: Send the invite.
```
