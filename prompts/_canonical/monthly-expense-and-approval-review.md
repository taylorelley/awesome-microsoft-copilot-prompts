---
title: "Monthly Expense and Approval Review"
app: cross-app
role: general
difficulty: intermediate
use_case: "Ensure nothing requiring finance sign-off slips through at month-end"
---

## Context
Ensure nothing requiring finance sign-off slips through at month-end.

## Prompt
```
Search my emails from the last 30 days for any pending financial approvals, invoices awaiting sign-off, or expense reports submitted but not yet approved. List each one:
- What requires approval
- Submitted by whom
- Date submitted
- Amount (if mentioned)
- Current status

Sort by oldest first. Flag anything overdue based on a standard 14-day approval window.
```
