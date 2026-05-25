---
title: "Audit Log Export Summary — User Activity"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use when responding to an internal or external audit request for user activity records."
---

## Context
Respond to an internal or external audit request for user activity records.

## Prompt
```
In Microsoft Purview Audit, search for all activity by user [UPN] between [START DATE] and [END DATE].

Include:
1. A summary of the types of activity recorded (e.g. file access, email send, Teams messages, admin actions)
2. Total count of events per activity type
3. Any high-risk activities: bulk file download, sharing to external recipients, deletion events, or permission changes
4. A chronological table of the 20 most significant events (timestamp, activity, target resource, outcome)

This is for an audit response. Do not include any inference or opinion — factual activity log only.
```
