---
title: "Insider Risk Signal Review"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use for periodic review of insider risk signals or when a user is flagged for HR/Legal review."
---

## Context
Periodic review of insider risk signals or review when a user is flagged for HR/Legal review.

## Prompt
```
In Microsoft Purview Insider Risk Management, review the current open alerts for user [UPN].

Provide:
1. Alert summary: what risk indicators triggered the alert?
2. Activity timeline: what actions did the user take that contributed to the risk score?
3. Risk score and severity level
4. Has this user had prior alerts in the last 90 days?
5. What policies is this user included in?

Do not recommend disciplinary action. Return a factual activity summary suitable for review by HR or Legal.
```
