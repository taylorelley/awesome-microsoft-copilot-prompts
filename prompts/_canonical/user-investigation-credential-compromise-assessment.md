---
title: "User Investigation — Credential Compromise Assessment"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use when a user account shows anomalous behaviour or is referenced in an alert."
---

## Context
Use this prompt when a user account shows anomalous behaviour or is referenced in an alert.

## Prompt
```
In Microsoft Entra ID, investigate user [UPN or display name].

For the last 72 hours:
1. List all sign-in events. For each: timestamp, location, IP address, device, application, risk level, and outcome (success/failure/interrupted)
2. Flag any sign-ins from new locations, new devices, or impossible travel scenarios
3. Were any MFA prompts denied or bypassed?
4. Were any privileged roles assigned or modified on this account in this period?

Return a table of sign-in events sorted by timestamp. Highlight high-risk events in bold.
```
