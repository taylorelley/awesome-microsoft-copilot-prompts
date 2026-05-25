---
title: "Punch List Consolidation"
app: cross-app
role: engineering-construction
difficulty: intermediate
use_case: "Capture informally reported punch items that may not have made it to the official list. Requires formal verification."
---

## Context
Use this prompt to capture informally reported punch items from emails and Teams that may not be in the official list. Requires formal verification.

## Prompt
```
Search my emails and Teams messages for snag items, punch list items, or deficiencies mentioned for [Area/System]. Compile into a list with:
- Description of item
- Who reported it
- Any status mentioned

This is for tracking purposes — requires verification against formal punch list.

EXPERIMENTAL: May miss items or duplicate entries. Always reconcile with the official punch list system.
```
