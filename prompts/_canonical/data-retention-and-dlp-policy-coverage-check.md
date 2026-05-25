---
title: "Data Retention and DLP Policy Coverage Check"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to verify that DLP and retention policies cover your critical data types before an audit."
---

## Context
Verify that DLP and retention policies cover your critical data types before an audit.

## Prompt
```
In Microsoft Purview, review the current state of DLP and retention policies.

Provide:
1. List all active DLP policies: name, sensitive information types covered, workloads (Exchange, SharePoint, Teams, Endpoint), and enforcement mode (enforce, audit, or report-only)
2. List all active retention policies: name, retention period, and workloads covered
3. Identify any workloads with no active DLP policy
4. Identify any sensitive information types (e.g. credit card, national ID, health data) not covered by any active policy
5. Flag any policies in report-only mode that should be enforced

Return as a coverage matrix table. Mark gaps in red (missing coverage) and report-only policies in amber.
```
