---
title: "Focus Time Protector"
app: cross-app
role: manager
difficulty: advanced
use_case: "Analyse the current week's calendar for deep-work gaps and generate specific focus-block recommendations before the week fills completely with meetings."
---

## Context
Use this prompt to analyse your calendar for deep-work gaps and get focus-block recommendations before your week fills with meetings.

## Prompt
```
Analyse my Outlook calendar for the next 5 working days.

Step 1: Identify every day that has fewer than 90 minutes of continuous uninterrupted time between 8 AM and 6 PM. List each day with its current meeting load (total meeting hours and available gaps).

Step 2: For each day identified in Step 1, propose one focus block of 90 minutes placed in the largest available gap, avoiding standard lunch hours (12–1 PM).

Step 3: For the two or three days with the most meeting density, flag whether I am in back-to-back sessions for more than 3 hours continuously — these are high cognitive-load risk days.

Step 4: Provide a summary: which days have adequate focus time already, which need blocks added, and what my estimated deep-work capacity is for the week as a percentage of total working hours.

Do not create any calendar events — present findings only for my review.
```
