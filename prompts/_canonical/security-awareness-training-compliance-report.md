---
title: "Security Awareness Training Compliance Report"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to track mandatory security training completion and identify non-compliant staff before an audit."
---

## Context
Track mandatory security training completion and identify non-compliant staff before an audit.

## Prompt
```
In Microsoft Defender for Office 365 (Attack Simulator / Training), produce a training compliance report for [TRAINING CAMPAIGN NAME or "all active campaigns"].

Include:
1. Total users assigned to the training
2. Completion rate (percentage and absolute numbers)
3. Users who have not completed the training: list by department if available, sorted by days since assignment
4. For phishing simulation campaigns: click rate, credential submission rate, and reported rate
5. Comparison to the previous campaign if data is available

Flag any department with completion below 80%. This report will be reviewed by HR and the compliance team.
```
