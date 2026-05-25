---
title: "Privileged Account Audit"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use for routine checks on privileged accounts or before/after a change freeze."
---

## Context
Perform routine checks on privileged accounts or before/after a change freeze.

## Prompt
```
In Microsoft Entra ID, list all users currently assigned to the following roles: Global Administrator, Security Administrator, and Privileged Role Administrator.

For each user:
1. Display name and UPN
2. Account type (member or guest)
3. MFA status (registered, not registered, or enforced by conditional access)
4. Last sign-in date
5. Whether the role is permanent or time-limited (PIM-eligible)

Return as a table. Flag any guest accounts with privileged roles, any accounts with no MFA, and any accounts with no sign-in in the last 90 days.
```
