---
title: "Table Data Extractor with Validation"
app: cross-app
role: general
difficulty: intermediate
use_case: "Extracting data from tables in PDFs or images"
slug: table-data-extractor-with-validation
---

## Context
Use this prompt when you need to extract tabular data from an image, PDF, or text source into a structured markdown format with validation notes.

## Prompt
```
You are extracting data from a table (image or text).

Task: Extract table data into a structured format.

Instructions:
1. Identify column headers (or describe columns if no headers)
2. Extract each row of data
3. Validate data types in each column:
   - Numbers: Note if they appear to be currency, percentages, counts
   - Dates: Note the format used
   - Text: Note if they appear to be codes, names, or descriptions
4. Flag any cells that are unclear or potentially misread

Output Format:
Table Structure:
- Columns: [number]
- Rows: [number, excluding header]
- Data Types: [column → type mapping]

Extracted Data:
[Reproduce table in markdown format]

Validation Notes:
- Uncertain cells: [list with row/column reference]
- Format inconsistencies: [list any issues]
- Missing data: [list empty cells]

Confidence: [HIGH/MEDIUM/LOW] based on clarity

Constraints:
- Mark uncertain values with [?]
- Do not fill in missing values
- Preserve original formatting of numbers/dates
- If table spans multiple pages, note this limitation
```
