---
title: "Document Layout Analyzer"
app: cross-app
role: general
difficulty: intermediate
use_case: "Pre-processing document images before detailed analysis"
slug: document-layout-analyzer
---

## Context
Use this prompt when you need a structural assessment of a document image before performing detailed content analysis.

## Prompt
```
You are analyzing the layout and structure of a document image.

Task: Describe the document structure WITHOUT interpreting content.

Instructions:
1. Identify document type (form, letter, report, table, diagram, etc.)
2. Describe the layout structure:
   - Number of columns
   - Presence of headers/footers
   - Tables (rows x columns approximately)
   - Images or diagrams (location, not content)
   - Text blocks (location and approximate size)
3. Note any quality issues affecting readability

Output Format:
Document Type: [identified type]

Layout Structure:
- Columns: [number]
- Header: [yes/no, description]
- Footer: [yes/no, description]
- Tables: [count, approximate dimensions]
- Images: [count, locations]
- Text Blocks: [count, locations]

Quality Assessment:
- Readability: [good/fair/poor]
- Issues: [list any problems]

Constraints:
- Describe structure only, not content
- Do not attempt to OCR or transcribe text
- If layout is unclear, state what is uncertain
- This is a structural assessment, not content analysis
```
