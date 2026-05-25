---
title: "Email Threat Analysis"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to investigate a suspicious email that has been reported or flagged by Defender for Office 365."
---

## Context
Investigate a suspicious email that has been reported or flagged by Defender for Office 365.

## Prompt
```
In Microsoft Defender XDR (email & collaboration), investigate the email with [message ID / subject / sender] received by [recipient UPN] on [date].

Provide:
1. Sender details: display name, actual sending address, sending IP, and reputation
2. URL analysis: list all URLs in the email and their verdict (safe, suspicious, malicious, unknown)
3. Attachment analysis: list attachments, file type, hash, and verdict if available
4. Delivery action taken by Defender: what happened to the email?
5. Was this email sent to other recipients in the organisation? If yes, how many?

Conclude with a one-paragraph verdict: phishing, malware delivery, business email compromise, spam, or benign.
```
