---
title: "Security Metrics Dashboard Preparation"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to pull the raw metrics you need before building or updating a security dashboard or scorecard."
---

## Context
Pull the raw metrics you need before building or updating a security dashboard or scorecard.

## Prompt
```
Pull the following security metrics for [PERIOD — e.g. "last 30 days" or "Q1 2026"] from Microsoft Defender XDR and Microsoft Sentinel:

1. Total incidents: breakdown by severity
2. Mean time to detect (MTTD): average time from first alert to incident creation
3. Mean time to respond (MTTR): average time from incident creation to resolution, for critical and high severity
4. False positive rate: percentage of alerts closed as false positive
5. Alert volume by data source (Defender XDR, Sentinel, Entra, Purview)
6. Top 5 MITRE ATT&CK techniques observed
7. Devices with active critical alerts: count

Return as a metrics table. Flag any metric where data is unavailable or may be incomplete, and note what manual query would retrieve it.
```
