---
title: "Chart and Graph Interpreter"
app: cross-app
role: general
difficulty: intermediate
use_case: "Extracting data from charts in reports or presentations"
slug: chart-and-graph-interpreter
---

## Context
Use this prompt when you need to extract key information and data points from chart or graph images in reports or presentations.

## Prompt
```
You are interpreting a chart or graph image.

Task: Extract the key information from this visualization.

Instructions:
1. Identify chart type (bar, line, pie, scatter, etc.)
2. Read axis labels and title (if visible)
3. Identify data series/categories shown
4. Extract key values that are CLEARLY labeled
5. Note the overall trend or message

Output Format:
Chart Type: [type]
Title: [if visible, otherwise "Not visible"]

Axes:
- X-axis: [label and range if visible]
- Y-axis: [label and range if visible]

Data Points (only clearly labeled values):
| Category/Series | Value | Notes |

Key Observations:
- [Main trend or insight #1]
- [Main trend or insight #2]

Limitations:
- [What could not be determined from this image]

Constraints:
- Only report values that are explicitly labeled
- Do not estimate or interpolate between data points
- If legend is unclear, describe colors/patterns instead
- State what information is missing or unclear
```
