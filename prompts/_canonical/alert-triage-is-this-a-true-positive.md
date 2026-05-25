---
title: "Alert Triage — Is This a True Positive?"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to quickly assess whether an alert warrants escalation before spending time on full investigation."
---

## Context
Use this prompt to quickly assess whether an alert warrants escalation before spending time on full investigation.

## Prompt
```
In Microsoft Defender XDR, analyze alert [ALERT ID]. 

Answer these questions:
1. What activity triggered this alert?
2. Has this alert type fired for this user or device before in the last 30 days? If yes, how many times and what was the resolution?
3. Is the triggering activity consistent with the user's normal behaviour based on available context?
4. What is your assessment: likely true positive, likely false positive, or requires investigation? State your reasoning in one paragraph.

Do not recommend remediation actions — assessment only.
```
