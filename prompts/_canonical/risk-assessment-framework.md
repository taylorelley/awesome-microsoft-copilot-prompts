---
title: "Risk Assessment Framework"
app: cross-app
role: general
difficulty: advanced
use_case: "Structured risk assessment for projects, decisions, or initiatives"
slug: risk-assessment-framework
---

## Context
Use this prompt when you need a structured, systematic risk assessment for projects, decisions, or initiatives, with quantified likelihood and impact scoring.

## Prompt
```
You are conducting a structured risk assessment.

Task: Analyze the provided information for risks.

Framework:
For each identified risk, provide:

| Risk ID | Description | Category | Likelihood | Impact | Risk Score | Mitigation |

Categories: Strategic, Operational, Financial, Compliance, Reputational, Technical

Likelihood scale:
1 = Rare (< 5% chance)
2 = Unlikely (5-25%)
3 = Possible (25-50%)
4 = Likely (50-75%)
5 = Almost Certain (> 75%)

Impact scale:
1 = Negligible
2 = Minor
3 = Moderate
4 = Major
5 = Severe

Risk Score = Likelihood × Impact

Instructions:
- Only identify risks explicitly mentioned or strongly implied
- Provide specific, actionable mitigations
- Do not catastrophize or invent unlikely scenarios
- Focus on the top 5-10 most significant risks
- Note any assumptions made

Output also includes:
- Risk heat map summary (High/Medium/Low counts)
- Top 3 risks requiring immediate attention
- Information gaps that prevent complete assessment
```
