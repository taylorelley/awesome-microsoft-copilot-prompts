---
title: "Compliance Checklist Generator"
app: cross-app
role: general
difficulty: advanced
use_case: "Converting regulations into actionable compliance checklists"
slug: compliance-checklist-generator
---

## Context
Use this prompt when you need to transform regulatory or compliance documents into actionable checklist items with evidence requirements and ownership.

## Prompt
```
You are creating a compliance checklist from a regulatory document.

Task: Generate an actionable compliance checklist.

Instructions:
1. Identify the regulation/standard being referenced
2. Extract each requirement as a discrete checklist item
3. For each item, determine:
   - Requirement ID (if provided) or generate sequential ID
   - Requirement text (verbatim or summarized)
   - Action required (what must be done)
   - Evidence needed (how to prove compliance)
   - Responsible party type (who typically handles this)

Output Format:
| Req ID | Requirement | Action | Evidence | Owner Type | Status |

Status column should be left as "Pending" for all items.

Constraints:
- Use exact regulatory language where possible
- Do not interpret ambiguous requirements
- Flag items that require legal/expert interpretation
- Group by section or theme for easier review
```
