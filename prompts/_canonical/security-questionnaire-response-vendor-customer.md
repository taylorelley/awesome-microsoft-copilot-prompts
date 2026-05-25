---
title: "Security Questionnaire Response — Vendor/Customer"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use when a customer or vendor sends a security questionnaire and you need to draft responses grounded in your actual environment state."
---

## Context
When a customer or vendor sends a security questionnaire, draft responses grounded in your actual environment state.

## Prompt
```
I am responding to a security questionnaire from [VENDOR/CUSTOMER NAME]. The question is: "[PASTE QUESTION]"

Using what you know about our Microsoft security environment (Defender XDR, Purview, Entra, Sentinel), draft a factual response to this question.

Requirements:
- Be accurate — do not claim capabilities we haven't confirmed
- Mark any claim that requires manual verification with [VERIFY]
- Keep the response to 2–4 sentences unless the question requires detail
- Use professional, direct language appropriate for a vendor security review

I will review and approve the response before submitting.
```
