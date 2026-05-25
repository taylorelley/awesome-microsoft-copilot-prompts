---
title: "Multi-Alert Correlation — Single Incident Thread"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use when multiple alerts across different products appear related and you need to determine if they form a single attack chain."
---

## Context
When multiple alerts across different products appear related, use this prompt to determine if they form a single attack chain.

## Prompt
```
I have the following alert IDs that may be related: [LIST ALERT IDs].

In Microsoft Defender XDR, examine these alerts and determine:
1. Do these alerts share common entities (users, devices, IPs, file hashes)? List the shared entities.
2. Is there a logical sequence — do any alerts appear to be precursors or consequences of others?
3. Should these be merged into a single incident? State yes or no with one-paragraph reasoning.

Return a table of alerts with columns: Alert ID, Timestamp, Entity, Tactic (MITRE), and your correlation assessment.
```
