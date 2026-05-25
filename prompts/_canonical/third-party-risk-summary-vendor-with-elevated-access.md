---
title: "Third-Party Risk Summary — Vendor with Elevated Access"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use when onboarding a new vendor with access to your Microsoft environment or reviewing an existing one."
---

## Context
When onboarding a new vendor with access to your Microsoft environment or reviewing an existing one.

## Prompt
```
I am reviewing the security risk associated with vendor [VENDOR NAME], who has been granted [TYPE OF ACCESS — e.g. "guest access to SharePoint", "Entra B2B access", "Global Admin role"].

In Microsoft Entra ID, provide:
1. All guest accounts associated with this vendor's domain ([VENDOR DOMAIN])
2. Roles or group memberships assigned to these accounts
3. Last sign-in date for each guest account
4. Any conditional access policies applied to these accounts
5. Any security alerts or risk events associated with these accounts in the last 90 days

Return as a third-party access report. Flag any account with privileged access or no recent sign-in activity.
```
