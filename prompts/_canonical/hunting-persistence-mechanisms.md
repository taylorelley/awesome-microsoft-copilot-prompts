---
title: "Hunting — Persistence Mechanisms"
app: security-copilot
role: security
difficulty: advanced
use_case: "Use when investigating a suspected compromise and you want to check for persistence before containment."
---

## Context
When investigating a suspected compromise, check for persistence mechanisms before containment.

## Prompt
```
In Microsoft Defender XDR advanced hunting, search for persistence mechanisms created in the last [TIMEFRAME] on device [DEVICE NAME or all devices].

Check for:
1. New scheduled tasks created by non-system accounts
2. Registry run key modifications (HKLM\Software\Microsoft\Windows\CurrentVersion\Run and HKCU equivalent)
3. New services created
4. Startup folder modifications

For each finding: device, user who made the change, timestamp, and the specific value or command added. Flag anything added by non-administrative accounts or pointing to temp/appdata directories.
```
