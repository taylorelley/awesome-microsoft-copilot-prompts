---
title: "Conditional Access Gap Analysis"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to identify users who may be operating outside conditional access policy coverage."
---

## Context
Identify users who may be operating outside conditional access policy coverage.

## Prompt
```
In Microsoft Entra ID, analyse the conditional access policies currently in place.

Identify:
1. Policies that are in report-only mode (not enforced)
2. Users or groups explicitly excluded from policies that require MFA or compliant device
3. Applications not covered by any conditional access policy
4. Sign-in events in the last 7 days that were interrupted or failed due to conditional access — list the top 10 by frequency

Return findings as a structured gap report with a priority column (high / medium / low) based on the exposure level of each gap.
```
