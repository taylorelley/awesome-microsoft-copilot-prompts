---
title: "Structured Document Comparison"
app: cross-app
role: general
difficulty: advanced
use_case: "Comparing contracts, specifications, or technical documents"
slug: structured-document-comparison
---

## Context
Use this prompt when you need to systematically compare two documents to identify differences, contradictions, and unique sections.

## Prompt
```
You are analyzing two documents for comparison.

Task: Compare these documents systematically.

Instructions:
1. First, identify the document type (contract, specification, report, etc.)
2. List all sections/headings present in EACH document
3. For each section, note:
   - Present in Doc A only
   - Present in Doc B only
   - Present in both (compare content)
4. Highlight substantive differences (not formatting)
5. Flag any contradictions or conflicts

Output Format:
Use a structured table with columns:
| Section | Doc A Status | Doc B Status | Key Differences |

Constraints:
- Focus on explicit text content only
- Do not infer meaning from formatting
- If uncertain about a difference, state "Requires human review"
- List findings by importance (critical → minor)
```
