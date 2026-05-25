---
title: "Privileged Access Review Report"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use for quarterly privileged access reviews (PAR) required by ISO 27001, SOC 2, and similar frameworks."
---

## Context
Quarterly privileged access reviews (PAR) required by ISO 27001, SOC 2, and similar frameworks.

## Prompt
```
In Microsoft Entra ID, produce a privileged access review report for [QUARTER/YEAR].

Include:
1. All users with permanent Global Administrator, Security Administrator, or Privileged Role Administrator roles
2. For each: display name, UPN, account type (member/guest), MFA status, last sign-in date, and whether the assignment is PIM-eligible or permanent
3. Users with privileged roles who have not signed in within the last 90 days
4. Guest accounts with any privileged role assignment
5. Changes to privileged role assignments in the last 90 days: who was added, who was removed, and by whom

Format as a formal access review report. Flag accounts that should be reviewed for removal.
```
