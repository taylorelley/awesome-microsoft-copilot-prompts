---
title: "Device Investigation — Rapid Scope"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to quickly establish what a device has been doing around the time of an alert before deciding whether to isolate."
---

## Context
Quickly establish what a device has been doing around the time of an alert before deciding whether to isolate.

## Prompt
```
In Microsoft Defender XDR, investigate device [DEVICE NAME or ID].

For the period [START TIME] to [END TIME]:
1. List all processes executed — flag any that are unusual, unsigned, or living-off-the-land binaries (LOLBins)
2. List all network connections — flag any to external IPs or uncommon destinations
3. List all file events — flag any new executables dropped or scripts run
4. Was any lateral movement attempted from this device?

Return findings as a structured table per category. Flag items that require immediate action.
```
