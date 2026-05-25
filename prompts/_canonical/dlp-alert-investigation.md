---
title: "DLP Alert Investigation"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to investigate a data loss prevention alert before deciding on escalation or user notification."
---

## Context
Investigate a data loss prevention alert before deciding on escalation or user notification.

## Prompt
```
In Microsoft Purview, investigate DLP alert [ALERT ID or description].

Provide:
1. What sensitive data type was detected (e.g. credit card numbers, PII, classified content)?
2. What action triggered the alert — email send, file share, Teams message, or other?
3. Who was the user involved and what was the destination (internal or external)?
4. Was the data actually exfiltrated, or was it caught before leaving the organisation?
5. What policy was triggered and what action did it take (block, notify, audit only)?

Conclude with a recommended next step: close as false positive, notify user, escalate to HR/Legal, or initiate formal investigation.
```
