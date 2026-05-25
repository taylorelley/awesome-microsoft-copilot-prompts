---
title: "Hunting — Suspicious PowerShell Execution"
app: security-copilot
role: security
difficulty: advanced
use_case: "Use to hunt for LOLBin/PowerShell abuse patterns across your environment."
---

## Context
Hunt for LOLBin/PowerShell abuse patterns across your environment using KQL.

## Prompt
```
In Microsoft Defender XDR advanced hunting, write and run a KQL query to find PowerShell executions in the last 7 days where:
- The process was launched by a non-standard parent (not explorer.exe, svchost.exe, or scheduled tasks)
- The command line contains encoded commands (-EncodedCommand or -enc) or downloads (Invoke-WebRequest, IEX, DownloadString)

Return results as a table with columns: device name, initiating process, PowerShell command line (truncated to 200 chars), timestamp, and logged-in user. Sort by timestamp descending. Limit to 50 results.
```
