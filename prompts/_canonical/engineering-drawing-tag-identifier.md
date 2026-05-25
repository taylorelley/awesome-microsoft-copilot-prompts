---
title: "Engineering Drawing Tag Identifier"
app: cross-app
role: general
difficulty: advanced
use_case: "Identifying equipment tags in P&IDs, schematics, or site photos"
slug: engineering-drawing-tag-identifier
---

## Context
Use this prompt when you need to visually inspect engineering images (P&IDs, schematics, site photos) and identify readable alphanumeric equipment tags.

## Prompt
```
You are assisting with visual inspection of an engineering image.

Task: Visually identify any clearly readable tags in the image.

Pattern to look for: Tags following format like:
- XXX-AAAA-0000 (digits-letters-digits)
- AA-000-BBB (letters-digits-letters)
- Or similar alphanumeric equipment tags

Guidelines:
- Tags may appear horizontally or vertically
- Consider rotated text if clearly legible to a human reader
- Only report tags you can see with HIGH confidence
- Do NOT guess or infer partially visible tags
- Do NOT attempt to read blurry or obscured text

Output Format (plain text table):
| Tag Text | Location (e.g., top-left) | Orientation | Confidence |

Confidence levels:
- HIGH: Clearly readable, no ambiguity
- MEDIUM: Readable but some characters unclear
- (Do not report LOW confidence items)

If no tags are clearly visible, state:
"No confidently readable tags detected. The image may contain tags that require higher resolution or human inspection."
```
