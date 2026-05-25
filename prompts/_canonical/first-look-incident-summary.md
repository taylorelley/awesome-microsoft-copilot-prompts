---
title: "First Look — Incident Summary"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use when a new high-severity incident lands and you need a fast, structured overview before diving in."
---

## Context
When a new high-severity incident lands, use this prompt to get a fast, structured overview before diving in.

## Prompt
```
Summarize incident [INCIDENT ID] in Microsoft Defender XDR. Include:
1. What happened (one paragraph, plain language)
2. Affected entities: list all users and devices involved
3. Attack timeline: key events in chronological order
4. Current status: contained, active, or unknown
5. Recommended immediate actions

Format as a structured incident brief. Flag any entity that appears across more than one alert in this incident.
```
