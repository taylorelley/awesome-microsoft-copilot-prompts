---
title: "Incident Post-Mortem Draft"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use after incident closure to produce a structured post-mortem without starting from a blank page."
---

## Context
After incident closure, produce a structured post-mortem without starting from a blank page.

## Prompt
```
In Microsoft Defender XDR, retrieve the full details of incident [INCIDENT ID], which is now closed.

Draft a post-mortem report with the following sections:
1. Executive Summary (3 sentences: what happened, impact, how it was resolved)
2. Timeline of Events (chronological, key milestones only)
3. Root Cause
4. Impact Assessment (systems affected, data involved, business disruption)
5. Response Actions Taken
6. Lessons Learned (minimum 3)
7. Recommended Improvements

Mark any section where you have insufficient data with [REQUIRES MANUAL INPUT]. I will complete those sections before sending.
```
