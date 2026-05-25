---
title: "Sales Copilot Guardrails"
app: cross-app
role: sales
difficulty: intermediate
use_case: "Essential guardrails for sales professionals using Copilot. Understand CRM vs. Copilot boundaries."
---

## Context
Use this prompt as a reference to understand what sales activities should never be done with Copilot, including pricing, contracts, CRM data, and customer PII.

## Prompt
```
## When NOT to Use Copilot for Sales

**ACCOUNT EXECUTIVES — NEVER use Copilot for:**
- Pricing decisions or approvals
- Contract terms negotiation
- Discount authorization
- Legal commitments to customers
- Revenue recognition
- Deal registration in CRM
- Forecast commits (use CRM)
- Commission calculations

**BDRs — NEVER use Copilot for:**
- Adding leads to CRM (do it properly)
- Qualification scoring (use your process)
- Territory assignments
- Lead routing decisions
- Compliance-sensitive outreach
- Do-not-contact list checking

**SALES MANAGERS — NEVER use Copilot for:**
- Performance reviews or ratings
- Compensation decisions
- Hiring/firing decisions
- Quota assignments
- Territory changes
- Pipeline commits to leadership
- Revenue forecasts (use CRM)

**Data Privacy Warnings:**
- Never include customer financial details in prompts
- Be careful with competitive intelligence sources
- Remember that prompts may be logged
- Don't share customer PII in prompts

**Golden Rules:**
- AEs: "Copilot researches — AEs close"
- BDRs: "Copilot discovers — BDRs connect"
- Managers: "Copilot summarizes — managers coach"

**System Integration Note:**
Copilot does NOT integrate with:
- Salesforce / HubSpot / CRM
- Sales engagement platforms
- CPQ systems
- Contract management systems

**CRM is the source of truth for:**
- Pipeline and forecasts
- Customer records
- Activity logging
- Performance metrics
```
