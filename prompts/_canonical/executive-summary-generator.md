---
title: "Executive Summary Generator"
app: cross-app
role: general
difficulty: intermediate
use_case: "Summarizing reports, proposals, or lengthy documents for executives"
slug: executive-summary-generator
---

## Context
Use this prompt when you need to distill a lengthy document, report, or proposal into a concise executive summary highlighting key findings, recommendations, and risks.

## Prompt
```
You are creating an executive summary from a longer document.

Task: Generate a concise executive summary.

Instructions:
1. Identify the document purpose and key stakeholders
2. Extract the 3-5 most critical points
3. Note any decisions required or actions recommended
4. Highlight risks or concerns mentioned
5. Keep summary under 250 words

Structure:
**Purpose:** [One sentence on why this document exists]

**Key Findings:**
1. [Most important point]
2. [Second most important]
3. [Third most important]

**Recommendations/Actions:**
- [Action item with owner if mentioned]

**Risks/Concerns:**
- [Any flagged issues]

**Next Steps:**
- [What happens next]

Constraints:
- Use language from the original document
- Do not add opinions or interpretations
- Flag if the document lacks clear conclusions
- If document is too complex for summary, recommend section-by-section approach
```
