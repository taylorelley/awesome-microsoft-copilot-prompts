---
title: "KQL Query Generation — Save for Reuse"
app: security-copilot
role: security
difficulty: advanced
use_case: "Use to generate a KQL query you can save, test, and reuse — avoiding repeated Copilot prompting for the same hunt."
---

## Context
Generate a KQL query you can save, test, and reuse — avoiding repeated Copilot prompting for the same hunt.

## Prompt
```
Write a KQL query for Microsoft Sentinel (or Defender XDR advanced hunting — specify which) that detects the following behaviour: [DESCRIBE THE BEHAVIOUR IN PLAIN LANGUAGE].

Requirements:
- The query should cover a configurable time window (use a variable at the top for easy adjustment)
- Include comments explaining each major section
- Return results as a table with columns: timestamp, entity (user or device), action, source, and severity if applicable
- Include a count of events per entity so I can identify which entities are generating the most hits

After the query, add a one-paragraph explanation of the detection logic and any known false positive scenarios I should filter out.
```
