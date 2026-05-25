---
title: "Patch Compliance Report by Business Unit"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to track patch compliance across organisational units and identify which teams are creating risk."
---

## Context
Track patch compliance across organisational units and identify which teams are creating risk.

## Prompt
```
In Microsoft Defender XDR (Threat & Vulnerability Management), generate a patch compliance report.

For devices grouped by [DEPARTMENT / LOCATION / DEVICE GROUP — specify which dimension is configured in your environment]:
1. Count of devices per group
2. Percentage of devices fully patched (no critical or high vulnerabilities)
3. Percentage with at least one unpatched critical vulnerability
4. The single highest-severity unpatched CVE in each group

Return as a table sorted by patch compliance percentage ascending (worst first). Flag any group below 70% patch compliance.
```
