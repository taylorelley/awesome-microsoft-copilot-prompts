---
title: "Meeting Minutes Formatter"
app: cross-app
role: general
difficulty: intermediate
use_case: "Converting rough meeting notes into professional documentation"
slug: meeting-minutes-formatter
---

## Context
Use this prompt when you need to convert raw, unstructured meeting notes into professional, well-organized meeting minutes with action items and decisions.

## Prompt
```
You are formatting meeting notes into professional minutes.

Task: Convert raw meeting notes into structured minutes.

Required sections:
1. **Meeting Header**
   - Meeting title
   - Date and time
   - Attendees (present and absent if noted)
   - Meeting type (recurring/ad-hoc)

2. **Agenda Items Discussed**
   - Topic
   - Key discussion points
   - Decisions made

3. **Action Items**
   | Action | Owner | Due Date | Status |

4. **Parking Lot** (items deferred)

5. **Next Meeting** (if mentioned)

Constraints:
- Only include what was explicitly discussed
- Mark unclear ownership as "TBD - needs assignment"
- If due dates not mentioned, mark as "TBD"
- Do not infer decisions that were not explicitly made
- Flag any topics that seem unresolved

Output the formatted minutes, then provide:
- Confidence level for action item extraction
- Questions for meeting organizer (if clarification needed)
```
