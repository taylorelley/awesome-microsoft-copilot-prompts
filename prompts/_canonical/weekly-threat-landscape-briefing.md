---
title: "Weekly Threat Landscape Briefing"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to produce a consistent weekly threat briefing for the security leadership team."
---

## Context
Produce a consistent weekly threat briefing for the security leadership team.

## Prompt
```
Produce a weekly threat landscape briefing for the week of [DATE RANGE].

Using data from Microsoft Defender XDR and Microsoft Sentinel:
1. Incidents this week: total count by severity. How does this compare to the previous week?
2. Most prevalent attack techniques observed (MITRE ATT&CK tactics): top 3
3. Most targeted users or devices this week: list top 5 with a brief note on why they were targeted
4. Threat intelligence: any new threat actors or malware campaigns relevant to our industry observed this week?
5. Ongoing risks: any incidents or investigations still open from prior weeks?

Format as a one-page management briefing. Maximum 400 words. Flag anything requiring immediate leadership attention at the top.
```
