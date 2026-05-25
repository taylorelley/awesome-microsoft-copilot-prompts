---
title: "Daily Threat Digest"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to produce a consistent daily threat summary for the SOC team or security leadership."
---

## Context
Produce a consistent daily threat summary for the SOC team or security leadership.

## Prompt
```
Produce a daily security digest for [DATE].

Using Microsoft Defender XDR and Microsoft Sentinel:
1. New incidents opened in the last 24 hours: count by severity (critical, high, medium, low)
2. Top 3 incidents by severity: for each, one-sentence summary and current status
3. Alerts closed as false positive in the last 24 hours: count
4. Any active threat hunts or ongoing investigations: status update
5. Vulnerabilities newly discovered in the last 24 hours with a CVSS score above 7.0

Format as a briefing note. Keep total length under 300 words. This will be shared with the security leadership team.
```
