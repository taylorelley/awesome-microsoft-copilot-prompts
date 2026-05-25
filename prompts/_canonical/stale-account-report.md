---
title: "Stale Account Report"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use for periodic hygiene reviews or ahead of audits — stale accounts are a common audit finding."
---

## Context
Periodic hygiene reviews or ahead of audits — stale accounts are a common audit finding.

## Prompt
```
In Microsoft Entra ID, identify stale accounts — users who have been inactive for 90 days or more.

For each stale account:
1. Display name and UPN
2. Account type (member or guest)
3. Last sign-in date
4. Assigned licences (M365, Azure, or other)
5. Group memberships that grant access to sensitive resources (if identifiable)

Return a table sorted by last sign-in date ascending (most stale first). Separate member accounts from guest accounts. Include a total count for each category.

Do not disable or delete any accounts — report only.
```
