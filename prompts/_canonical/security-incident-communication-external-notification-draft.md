---
title: "Security Incident Communication — External Notification Draft"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use when a breach or significant incident may require external notification (customers, regulators, or partners)."
---

## Context
When a breach or significant incident may require external notification (customers, regulators, or partners).

## Prompt
```
I need to draft an external notification regarding the following security incident: [BRIEF DESCRIPTION].

Audience: [SPECIFY — e.g. "affected customers", "data protection authority", "partner organisations"]
Regulatory framework applicable: [SPECIFY — e.g. "GDPR", "HIPAA", "NIS2", or "none confirmed yet"]

Draft a notification that includes:
1. What happened (factual, no speculation)
2. What data or systems were affected
3. What we have done in response
4. What the recipient should do, if anything
5. Who to contact for questions

Use plain language. Do not make admissions of liability. Mark any section requiring legal review with [LEGAL REVIEW REQUIRED]. I will not send this without legal approval.
```
