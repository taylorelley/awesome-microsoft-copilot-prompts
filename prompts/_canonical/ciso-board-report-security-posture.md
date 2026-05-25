---
title: "CISO Board Report — Security Posture"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use quarterly for board-level security reporting."
---

## Context
Quarterly board-level security reporting.

## Prompt
```
Produce a quarterly board security report for [QUARTER/YEAR].

Draw from Microsoft Defender XDR, Microsoft Sentinel, and Microsoft Purview Compliance Manager where available.

Structure:
1. Security Posture Score (if available): current score, trend vs. last quarter, and what drove the change
2. Incidents: total for the quarter, breakdown by severity, MTTR for critical incidents
3. Vulnerabilities: open critical/high count, remediation rate vs. target, top 3 unresolved risks
4. Compliance: current score, regulatory frameworks in scope, overdue improvement actions
5. Identity: privileged account count, MFA coverage percentage, stale account count
6. Top 3 security risks requiring board awareness
7. Investments or decisions needed from the board

Format as a board-ready presentation outline. Use plain language throughout. Flag where data must be manually added.
```
