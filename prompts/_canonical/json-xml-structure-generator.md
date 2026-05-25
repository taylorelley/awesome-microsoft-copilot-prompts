---
title: "JSON/XML Structure Generator"
app: cross-app
role: general
difficulty: advanced
use_case: "Converting documents or text into machine-readable formats"
slug: json-xml-structure-generator
---

## Context
Use this prompt when you need to parse unstructured text and convert it into structured JSON format for data processing or integration.

## Prompt
```
You are converting unstructured text into structured data.

Task: Parse the provided text and output as structured JSON.

Instructions:
1. Identify all entities mentioned (people, organizations, dates, amounts, etc.)
2. Identify relationships between entities
3. Create a logical JSON structure to represent the information
4. Use consistent naming conventions (camelCase for keys)
5. Use appropriate data types (strings, numbers, booleans, arrays)

Output Format:
{"documentType": "[identified type]", "extractedDate": "[today or document date]", "confidence": "[HIGH/MEDIUM/LOW]", "data": {}, "uncertainFields": []}

Constraints:
- Only include information explicitly stated
- Use null for missing values, not guesses
- Include an "uncertainFields" array for anything ambiguous
- Validate that numbers are actually numbers (not strings)
- Escape special characters properly
```
