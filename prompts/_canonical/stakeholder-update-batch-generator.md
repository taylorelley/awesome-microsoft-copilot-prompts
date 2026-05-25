---
title: "Stakeholder Update Batch Generator"
app: cross-app
role: manager
difficulty: advanced
use_case: "Draft tailored status updates for multiple audiences in a single session — adapting the same facts to different levels of detail and tone without starting from scratch each time."
---

## Context
Use this prompt to draft tailored status updates for multiple audiences in a single session, adapting the same facts to different levels of detail and tone.

## Prompt
```
I need to send status updates to multiple stakeholders about [project or initiative name].

Search my emails and Teams from the last 14 days for updates, decisions, and blockers related to [project or initiative name].

Draft a separate update for each of the following audiences. Use the same underlying facts, but adapt the framing, detail level, and tone for each:

1. MY MANAGER / SENIOR LEADERSHIP — 5 bullet points, executive tone. Focus on: strategic progress, risks, and any decision or input needed from them. Include a subject line.

2. PEER MANAGERS / CROSS-FUNCTIONAL PARTNERS — 5–7 bullet points, peer tone. Focus on: dependencies, shared actions, and anything that affects their teams. Include a subject line.

3. MY TEAM — 5 bullet points, direct and encouraging tone. Focus on: what they achieved, what is next for them specifically, and any context they need to do their jobs. Can be a Teams post or email.

Mark any section with [VERIFY] where you had limited information from communications alone. Do not send anything — present all three drafts for my review.
```
