---
title: "Hunting — Lateral Movement via SMB/PsExec"
app: security-copilot
role: security
difficulty: advanced
use_case: "Use to identify potential lateral movement patterns in your environment."
---

## Context
Identify potential lateral movement patterns in your environment using KQL.

## Prompt
```
In Microsoft Defender XDR advanced hunting, write and run a KQL query to identify potential lateral movement in the last 48 hours.

Look for:
- Remote service creation events (ServiceControlManager)
- PsExec or equivalent tool usage (process name or command line contains psexec, paexec, or remcom)
- Network connections on port 445 (SMB) originating from workstations (not servers)

Return a table: source device, destination device, tool or method used, timestamp, and initiating user. Flag any source device that attempted lateral movement to more than 2 destinations.
```
