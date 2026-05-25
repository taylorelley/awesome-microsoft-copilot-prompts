---
title: "Decision Triage"
app: cross-app
role: manager
difficulty: intermediate
use_case: "Surface all pending decisions sitting in email and Teams and classify each one by who should own it — reducing decision bottlenecks and freeing the manager to focus on what only they can decide."
---

## Context
Use this prompt to surface all pending decisions in your email and Teams and classify each by who should own it — reducing decision bottlenecks.

## Prompt
```
Search my emails and Teams messages from the last 14 days for any situation where a decision is pending or has been requested from me — explicit or implied.

For each decision I identify, classify it into one of three categories:

DECIDE NOW — requires my authority, budget, or specific knowledge. No one else can or should make this call.

DELEGATE — this falls within a direct report's authority or capability. Suggest who should own it and why.

ESCALATE — this is above my authority level, involves risk I cannot absorb, or has cross-functional impact requiring senior leadership input. Suggest who to escalate to and what information to bring.

For each decision, provide:
- Decision description (one sentence)
- Category (Decide Now / Delegate / Escalate)
- Rationale (one sentence)
- Suggested next action and timing

Sort by urgency — flag anything that will block others if I do not act within 24 hours.
```
