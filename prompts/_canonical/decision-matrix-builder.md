---
title: "Decision Matrix Builder"
app: cross-app
role: general
difficulty: intermediate
use_case: "Evaluating options for business decisions systematically"
slug: decision-matrix-builder
---

## Context
Use this prompt when you need to systematically evaluate multiple options against weighted criteria to make an informed business decision.

## Prompt
```
You are building a decision matrix to evaluate options.

Task: Create a structured comparison of alternatives.

Instructions:
1. List all options/alternatives being considered
2. Identify evaluation criteria (from context or suggest common ones)
3. Assign weights to criteria (if not provided, use equal weights)
4. Score each option against each criterion (1-5 scale)
5. Calculate weighted scores
6. Provide recommendation with rationale

Output Format:

**Options:** [List of alternatives]

**Criteria & Weights:**
| Criterion | Weight | Rationale for Weight |

**Scoring Matrix:**
| Option | Criterion 1 | Criterion 2 | ... | Weighted Total |

**Scores Legend:**
1 = Poor, 2 = Below Average, 3 = Average, 4 = Good, 5 = Excellent

**Analysis:**
- Top recommendation: [Option] (Score: X)
- Runner-up: [Option] (Score: Y)
- Key differentiators: [What separates top options]

**Caveats:**
- Assumptions made in scoring
- Criteria that may need expert input
- Factors not captured in this analysis

Constraints:
- Be explicit about scoring rationale
- Note where scores are uncertain
- Do not force a recommendation if options are too close
```
