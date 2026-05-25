---
title: "Technical Specification Extractor"
app: cross-app
role: general
difficulty: advanced
use_case: "Extracting requirements from RFPs, specs, or technical docs"
slug: technical-specification-extractor
---

## Context
Use this prompt when you need to extract structured specifications, requirements, and constraints from RFPs, technical documents, or engineering specs.

## Prompt
```
You are extracting structured data from a technical document.

Task: Extract all specifications, requirements, and constraints.

Instructions:
1. Identify the document type and domain
2. Extract specifications in these categories:
   - Functional requirements (what it must DO)
   - Technical specifications (measurements, materials, standards)
   - Constraints (limitations, exclusions, boundaries)
   - Dependencies (what it relies on)
   - Acceptance criteria (how to verify)

Output Format:
For each extracted item, provide:
| ID | Category | Specification Text | Source (page/section) | Confidence |

Confidence levels:
- HIGH: Explicitly stated with clear values
- MEDIUM: Stated but requires interpretation
- LOW: Implied or partially visible

Constraints:
- Only extract what is explicitly written
- Do not infer specifications from context
- Mark any ambiguous items for human review
- Preserve original terminology and units
```
