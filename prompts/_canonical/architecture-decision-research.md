---
title: "Architecture Decision Research"
app: cross-app
role: legal-compliance
difficulty: intermediate
use_case: "Research architecture decisions from discussions. Always verify current state with architecture team."
---

## Context
Use this prompt to research architecture decisions from discussions and documents. Always verify current state with the architecture team.

## Prompt
```
Search internal documents and emails for discussions about [technology decision, e.g., "container orchestration" or "API gateway selection"]. Compile:
- Options considered
- Pros/cons discussed
- Decisions made and rationale
- Any revisits or regrets mentioned

This is research for architecture documentation.

EXPERIMENTAL: Technical decisions may have evolved. Verify current state with the architecture team.
```
