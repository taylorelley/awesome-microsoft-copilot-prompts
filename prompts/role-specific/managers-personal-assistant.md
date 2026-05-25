# Copilot as Personal Assistant for Busy Managers

> 18 production-tested Microsoft 365 Copilot prompts for general managers and middle managers who want Copilot to act as a Personal Assistant: automating daily briefings, protecting focus time, managing people intelligently, and reducing cognitive load.

> [!WARNING]
> **REQUIRES:** Microsoft 365 Copilot with full M365 integration (Outlook, Teams, Calendar, SharePoint). These prompts access your organisational data and will NOT work with the free Microsoft Copilot web version, ChatGPT, or other AI assistants.

**Category:** Management & Leadership

**Prompts:** 18

---

## Manager Copilot Guardrails

> [!CAUTION]
> **Essential guardrails for managers using Copilot as a personal assistant. Read before using any prompt in this collection.**

### When NOT to Use Copilot for Management Roles

**GENERAL MANAGERS — NEVER use Copilot for:**
- Performance ratings, termination, or disciplinary decisions
- Compensation decisions or salary benchmarking
- Hiring or rejection decisions for candidates
- Grievance handling or formal HR processes
- Confidential employee medical or personal information
- Financial approvals or budget sign-offs (use finance systems)
- Legal or contractual commitments
- Crisis communications without HR/Legal review
- Sending communications without reading the full draft yourself

**PEOPLE MANAGEMENT — NEVER use Copilot for:**
- Inferring employee mental health from email or message patterns
- Creating performance records that go into HR systems
- Replacing direct, human conversations about sensitive topics
- Drawing conclusions about specific team members' conduct from communication tone alone

### Confidentiality Warnings
- Prompts referencing team member names or personal situations may be logged — use role descriptions where possible
- Do not paste confidential HR, legal, or financial content into prompts
- Verify all draft communications before sending — Copilot may lack context from direct conversations
- Meeting transcripts may contain sensitive off-the-record comments — treat outputs accordingly

### What Copilot IS Good For in This Role
- Synthesising large volumes of email, calendar, and Teams data you would otherwise skim
- Drafting starting points for communications that you will edit and own
- Surfacing patterns across communications that individual reading would miss
- Preparing you before meetings so you arrive with context, not questions
- Reducing the cognitive overhead of routine information gathering

### Golden Rules
- **"Copilot briefs — managers decide"**
- **"Copilot drafts — managers send"**
- **"Copilot synthesises — managers judge"**

### System Integration Note
Copilot does NOT integrate with:
- HRIS (Workday, SAP SuccessFactors, BambooHR)
- Performance management platforms (Lattice, Culture Amp, 15Five)
- OKR tools (Viva Goals real-time data, Asana Goals, Workboard)
- Payroll or compensation systems
- Expense and finance systems (Concur, SAP, Oracle)

---

## See Also — Existing Prompts for Managers

These prompts from other collections complete the manager PA toolkit. Use them alongside the prompts below:

| Prompt | Collection | Theme |
|--------|-----------|-------|
| Task Ownership Clarifier | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Delegation |
| Cognitive Load Reducer | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Workload |
| Workload Forecast Generator | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Capacity planning |
| Priority Matrix Architect | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Inbox prioritisation |
| Commitment Tracker | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Accountability |
| Escalation Radar Detector | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Risk early warning |
| Email Battle Plan Generator | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Strategic prioritisation |
| 360° Relationship Mapper | [Advanced Outlook Automation](../outlook/advanced-automation.md) | Stakeholder intelligence |
| Morning Email Briefing | [Scheduled Prompts](../scheduled-prompts/README.md) | Daily automation |
| Daily Calendar Prep | [Scheduled Prompts](../scheduled-prompts/README.md) | Daily automation |
| End-of-Day Commitment Tracker | [Scheduled Prompts](../scheduled-prompts/README.md) | Daily automation |
| Monday Blocker Check | [Scheduled Prompts](../scheduled-prompts/README.md) | Weekly automation |
| Friday Team Summary | [Scheduled Prompts](../scheduled-prompts/README.md) | Weekly automation |
| Monday Week-Start Briefing | [Cowork Agentic Workflows](../cowork/README.md) | Agentic automation |
| Friday End-of-Week Digest | [Cowork Agentic Workflows](../cowork/README.md) | Agentic automation |
| Board Meeting Preparation | [Admin & Executive Assistants](admin-executive-assistants.md) | Executive support |
| Weekly Status Synthesis | [Project Leadership](project-leadership.md) | Reporting |
| Stakeholder Communication | [Project Leadership](project-leadership.md) | Stakeholder management |

---

## PA / Time Automation

### 1. Daily Command Centre

**Use Case:** Start each working day with a single synthesised briefing across email, calendar, and outstanding commitments — replacing a 20-minute inbox scan with a 3-minute structured read.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `calendar`, `productivity`, `daily`, `manager`, `scheduled`

**Prompt:**

```
You are acting as my personal assistant. Prepare my daily command centre briefing by searching across my Outlook inbox, Teams messages, and calendar.

Produce four sections:

1. INBOX PRIORITIES — Emails received in the last 18 hours that need my attention today. For each: sender, subject, one sentence on what they need from me, and whether I should reply, delegate, or note it as FYI. Flag anything marked urgent or with a deadline today.

2. TODAY'S CALENDAR — My meetings for today. For each: time, duration, attendees, one sentence on what the meeting is likely about based on the invite and related emails. Flag any back-to-back blocks with no break, and any meeting where I have open action items from a prior session with the same people.

3. OUTSTANDING COMMITMENTS — Things I said I would do (in email or Teams) that are not yet complete. List each: what I committed to, who I committed to, and whether a deadline was mentioned.

4. ONE THING TO DO FIRST — Based on everything above, identify the single highest-priority action I should take before my first meeting.

Keep the full briefing under 300 words. Do not send anything.
```

---

### 2. Meeting Audit and Calendar Declutter

**Use Case:** Identify which recurring and one-off meetings to skip, delegate, shorten, or cancel — recovering focus time without dropping important commitments.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `calendar`, `outlook`, `productivity`, `delegation`, `focus-time`, `manager`

**Prompt:**

```
Review my calendar for the next 14 days. For each meeting I have accepted:

1. State the meeting name, duration, recurrence (one-off vs. recurring), and whether I am an organiser or attendee.

2. Assess each meeting against these four questions:
   - Does this require my decision or presence, or could a direct report attend instead?
   - Is the duration appropriate given the agenda? (Flag meetings over 60 minutes with no agenda in the invite.)
   - Is this a recurring meeting that has not produced visible outcomes in recent correspondence?
   - Am I the only person connecting two groups — and if so, could that be replaced with a shared document or async update?

3. For each meeting, provide one of four recommendations: KEEP, DELEGATE (suggest who), SHORTEN (suggest new duration and format), or DECLINE (suggest communication to the organiser).

4. Produce a summary table: Meeting Name | Duration | My Role | Recommendation | Reason.

5. Estimate total time recovered per week if I act on all Delegate, Shorten, and Decline recommendations.

Flag anything where declining may need a direct conversation rather than a calendar response.
```

---

### 3. Focus Time Protector

**Use Case:** Analyse the current week's calendar for deep-work gaps and generate specific focus-block recommendations before the week fills completely with meetings.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `calendar`, `productivity`, `focus-time`, `time-management`, `manager`

**Prompt:**

```
Analyse my Outlook calendar for the next 5 working days.

Step 1: Identify every day that has fewer than 90 minutes of continuous uninterrupted time between 8 AM and 6 PM. List each day with its current meeting load (total meeting hours and available gaps).

Step 2: For each day identified in Step 1, propose one focus block of 90 minutes placed in the largest available gap, avoiding standard lunch hours (12–1 PM).

Step 3: For the two or three days with the most meeting density, flag whether I am in back-to-back sessions for more than 3 hours continuously — these are high cognitive-load risk days.

Step 4: Provide a summary: which days have adequate focus time already, which need blocks added, and what my estimated deep-work capacity is for the week as a percentage of total working hours.

Do not create any calendar events — present findings only for my review.
```

---

### 4. Email Triage and Delegation Filter

**Use Case:** Rapidly classify today's inbox into respond-myself, delegate, monitor, or archive — cutting inbox processing time and reducing decision fatigue.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `email-management`, `delegation`, `productivity`, `manager`

**Prompt:**

```
Search my Outlook inbox for emails received in the last 48 hours that I have not yet replied to or acted on.

For each email, classify it into one of four categories:

MUST RESPOND — requires my personal knowledge, authority, or relationship to answer. No one else can handle this.

DELEGATE — someone on my team or a peer can handle this. Suggest who and why. Draft a one-sentence handoff note I can use when forwarding.

STANDARD REPLY — a short factual acknowledgement is all that is needed. Draft a suggested reply under 50 words.

NO ACTION NEEDED — FYI, CC, or informational. No reply required.

Present as a triage list sorted by category, with most urgent items first within each category. Estimate time saved versus responding to everything myself.

Do not send anything — present the triage for my review and action.
```

---

## People Management

### 5. One-to-One Meeting Prep Assistant

**Use Case:** Auto-generate a structured 1:1 agenda for any direct report, synthesising carry-forward items, open commitments, and recent signals — so no important topic is forgotten.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `meeting-prep`, `people-management`, `manager`

**Prompt:**

```
I have a one-to-one meeting with [Name] coming up. Search my emails, Teams messages, and calendar for all interactions involving [Name] from the last 30 days.

Prepare a 1:1 prep brief with four sections:

1. CARRY-FORWARDS — Items from previous discussions or emails where I said I would do something for them, or they said they would do something and have not yet confirmed completion. List each item with the date it was mentioned.

2. TOPICS THEY HAVE RAISED RECENTLY — Issues, concerns, questions, or requests they have communicated in the last 30 days that have not been fully resolved. List each with context.

3. TOPICS I SHOULD RAISE — Based on what I can see in communications: any work they are involved in that appears stuck, any feedback I should give based on recent outcomes, any development or support conversation worth having.

4. SUGGESTED AGENDA — A 4–5 point agenda I can paste into the meeting invite, ordered by priority (blockers first, then open items, then development).

Keep each section to bullet points only. Do not draw conclusions about their performance or conduct from email tone alone — only surface observable facts.
```

---

### 6. Team Sentiment and Pulse Check

**Use Case:** Surface early signals of team disengagement, morale shifts, or workload imbalance from communication patterns — without replacing formal engagement surveys.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `people-management`, `engagement`, `manager`, `experimental`

**Prompt:**

```
Search my Teams channel messages and emails involving my direct team members from the last 21 days.

Identify patterns that may indicate changes in team health or engagement. Look for:

1. PARTICIPATION CHANGES — Team members who have become significantly quieter or more withdrawn in group channels compared to their usual activity. Flag as a signal to check, not a conclusion.

2. WORKLOAD SIGNALS — People who appear to be carrying disproportionate communication load (fielding many requests, sending messages outside normal hours, involved in an unusual number of parallel threads).

3. POSITIVE SIGNALS — Instances of team members helping each other, sharing knowledge, celebrating outcomes, or showing enthusiasm about their work.

4. OPEN FRUSTRATIONS — Any explicit expressions of frustration, blocked progress, or unresolved complaints raised with me or in channels I can see.

Present findings as signals only — not as evaluations of individuals. Suggest which signals are worth a direct conversation.

IMPORTANT: This is for manager awareness only. Do not share this analysis with the team. Communication patterns are an imperfect proxy for engagement — use alongside direct conversation, not as a replacement.
```

---

### 7. Performance Review Evidence Synthesiser

**Use Case:** Aggregate work evidence from communications to support a fair, fact-based performance review conversation — reducing recency bias and memory gaps.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `sharepoint`, `people-management`, `synthesis`, `manager`

**Prompt:**

```
I am preparing for the performance review period. I need to gather evidence about [Name]'s contributions over the past [6/12] months.

Search my emails, Teams messages, and any shared documents or SharePoint files involving [Name] from the last [timeframe].

Compile the following:

1. OUTPUTS AND DELIVERABLES — Projects, documents, or tasks attributed to them that I can find evidence of. List each with a rough date.

2. STAKEHOLDER FEEDBACK SIGNALS — Any positive or constructive comments about their work from others in emails or Teams threads I am part of.

3. COMMITMENTS AND FOLLOW-THROUGH — Examples where they made a commitment and followed through, and any instances where a commitment appears to have been missed or delayed.

4. COLLABORATION AND IMPACT — Examples of them helping others, unblocking situations, or having visible positive impact on team outcomes.

5. GAPS IN EVIDENCE — Areas or time periods where I have limited visibility from communications alone.

Present as structured evidence notes — not as a rating or evaluation. I will use this to inform my own judgement, not replace it.

IMPORTANT: Do not use this output to make or communicate performance decisions directly. This is background research only.
```

---

### 8. Feedback Drafting Assistant

**Use Case:** Draft specific, evidence-based, developmental or recognitive feedback for a team member using a structured SBI framework — so the conversation is grounded and constructive.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `people-management`, `communication`, `draft`, `manager`

**Prompt:**

```
I need to deliver [developmental/positive] feedback to [Name] about [describe the situation — e.g. "their presentation to the client last week" or "how they handled the project delay"].

Search my recent emails and Teams messages for any context about this situation from the last 30 days — what happened, who was involved, what the outcome was.

Using what you find, draft feedback structured around the SBI framework:
- SITUATION: What was the specific context or event?
- BEHAVIOUR: What did they specifically do or not do? (observable actions only — not character judgements)
- IMPACT: What was the effect on the team, project, or stakeholder? (factual where possible)

Then add:
- FORWARD: One suggestion for what to do differently (developmental) or what to keep doing (positive).

Keep the draft under 150 words. Use plain, direct language — no jargon or softening phrases that obscure the message.

Mark any section where you had limited evidence with [VERIFY] — I will fill in details from my own memory before using this draft.
```

---

## Decisions and Escalation

### 9. Decision Triage

**Use Case:** Surface all pending decisions sitting in email and Teams and classify each one by who should own it — reducing decision bottlenecks and freeing the manager to focus on what only they can decide.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `decision-support`, `delegation`, `productivity`, `manager`

**Prompt:**

```
Search my emails and Teams messages from the last 14 days for any situation where a decision is pending or has been requested from me — explicit or implied.

For each decision I identify, classify it into one of three categories:

DECIDE NOW — requires my authority, budget, or specific knowledge. No one else can or should make this call.

DELEGATE — this falls within a direct report's authority or capability. Suggest who should own it and why.

ESCALATE — this is above my authority level, involves risk I cannot absorb, or has cross-functional impact requiring senior leadership input. Suggest who to escalate to and what information to bring.

For each decision, provide:
- Decision description (one sentence)
- Category (Decide Now / Delegate / Escalate)
- Rationale (one sentence)
- Suggested next action and timing

Sort by urgency — flag anything that will block others if I do not act within 24 hours.
```

---

### 10. Escalation Decision Support

**Use Case:** Before escalating an issue to senior leadership, gather full context, assess options, and structure the escalation communication — so you arrive prepared and with a clear ask.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `decision-support`, `risk-management`, `communication`, `manager`

**Prompt:**

```
I am considering escalating [brief description of the issue] to [senior stakeholder / my manager / HR / Legal].

Search my emails and Teams messages related to this issue from the last [30/60] days.

Prepare an escalation decision brief with:

1. ISSUE SUMMARY — What the problem is, when it started, and what its current state is. Based on what you find in communications — not assumptions.

2. WHAT HAS BEEN TRIED — Actions already taken, by whom, and what the outcome was.

3. WHY ESCALATION MAY BE NEEDED — What is blocked, what risk exists if I do not escalate, and what outcome I am seeking.

4. OPTIONS — Three options for how to proceed: escalate now, attempt one more resolution step first, or monitor without escalating. For each option, note the risk of that choice.

5. RECOMMENDED ESCALATION DRAFT — If I decide to escalate, short talking points or an email I can use with [senior stakeholder]. Under 200 words. Mark areas I need to personalise with [INSERT].

Do not send anything — present findings for my review.
```

---

### 11. Manager's Weekly Decision Log

**Use Case:** Create a running record of decisions made during the week to reduce repeated re-litigating and build institutional memory — for personal use, not HR records.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `decision-support`, `productivity`, `weekly`, `manager`, `scheduled`

**Prompt:**

```
Review my emails and Teams messages from the past 5 business days. Identify decisions I made (or agreed to) during this period.

For each decision found, provide:
1. What was decided? (one sentence)
2. What options were considered? (brief)
3. What was the rationale?
4. Who was involved or affected?
5. What follow-up actions result from it, and who owns them?

Format as a decision log table.

Then flag any decisions that may need to be revisited based on new information that has arrived since the decision was made.

This log is for my personal record only — not for HR systems or formal reporting.
```

---

## Strategic Alignment

### 12. OKR and Goal Alignment Check

**Use Case:** Map where your actual time and team communications are going against stated quarterly goals — surfacing misalignment between stated priorities and real effort allocation.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `calendar`, `strategic-alignment`, `productivity`, `manager`

**Prompt:**

```
I want to check whether my team's current work is aligned with our stated goals for this quarter.

Our team's current OKRs or key priorities are:
[Paste your team's 3–5 OKRs or goals here]

Search my emails, Teams messages, and calendar from the last 30 days for evidence of what my team is actually working on.

For each goal I listed:
1. What evidence of activity toward this goal can you find? (List specific projects, topics, or threads.)
2. Is the level of activity appropriate for the priority level, or does it appear under-resourced?

Then identify:
3. UNALIGNED EFFORT — Work appearing in communications that does not map to any stated goal. List each with a note on whether it is operationally necessary or a potential distraction.

4. COVERAGE GAPS — Goals with little or no visible activity in the last 30 days. Flag these as potential blind spots.

Present as a simple alignment table: Goal | Evidence Found | Activity Level | Status (On Track / At Risk / No Visibility).
```

---

### 13. Skip-Level Meeting Prep

**Use Case:** Prepare for a meeting with your manager or your manager's manager — surfacing what they are focused on, what to proactively address, and what wins to highlight.

**Target Personas:** Manager, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `meeting-prep`, `strategic-alignment`, `manager`

**Prompt:**

```
I have a meeting with [Name / Role — e.g. "our VP of Operations"] coming up. Search recent emails and Teams messages that involve them, their team, or topics they have been focused on.

Prepare a pre-meeting brief with five sections:

1. THEIR CURRENT PRIORITIES — Based on recent comms, what are the 2–3 topics they appear most focused on right now?

2. VISIBILITY INTO MY TEAM'S WORK — What projects or issues involving my team appear in their field of view? What have they commented on or asked about recently?

3. RISKS TO PROACTIVELY ADDRESS — Are there any issues, delays, or concerns I should raise myself rather than wait to be asked about?

4. WINS TO HIGHLIGHT — What has my team accomplished recently that is worth surfacing? (With specific examples, not generalities.)

5. ONE QUESTION TO ASK — One question I can ask to better understand their expectations of me and my team.

Keep the brief under one page. Format for a 5-minute read before the meeting.
```

---

### 14. Cross-Functional Alignment Brief

**Use Case:** Detect misalignment or coordination gaps between your team and peer teams before they become blockers — so you can align proactively rather than reactively.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `strategic-alignment`, `stakeholder`, `meeting-prep`, `manager`

**Prompt:**

```
Review my emails and Teams messages from the last 21 days involving stakeholders from other teams (not my direct reports).

Identify the following:

1. COORDINATION GAPS — Work that appears to be falling between teams with no clear owner.

2. CONFLICTING PRIORITIES — Situations where my team and another team appear to be pulling in different directions on the same topic.

3. DEPENDENCIES AT RISK — Things my team is waiting on from others that have not moved in the last 14 days.

4. RELATIONSHIP TEMPERATURE — Any peer relationships that appear strained, underserved, or where communication has dropped off compared to earlier activity.

5. OPPORTUNITIES TO ALIGN PROACTIVELY — Topics where reaching out now would prevent a problem from surfacing in a meeting or via escalation later.

Produce a cross-functional alignment brief with a table: Team / Stakeholder | Issue | Status | Recommended Action. Then list the top 3 actions I should take this week to improve alignment.
```

---

## Communication and Change

### 15. Stakeholder Update Batch Generator

**Use Case:** Draft tailored status updates for multiple audiences in a single session — adapting the same facts to different levels of detail and tone without starting from scratch each time.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `communication`, `stakeholder`, `draft`, `manager`

**Prompt:**

```
I need to send status updates to multiple stakeholders about [project or initiative name].

Search my emails and Teams from the last 14 days for updates, decisions, and blockers related to [project or initiative name].

Draft a separate update for each of the following audiences. Use the same underlying facts, but adapt the framing, detail level, and tone for each:

1. MY MANAGER / SENIOR LEADERSHIP — 5 bullet points, executive tone. Focus on: strategic progress, risks, and any decision or input needed from them. Include a subject line.

2. PEER MANAGERS / CROSS-FUNCTIONAL PARTNERS — 5–7 bullet points, peer tone. Focus on: dependencies, shared actions, and anything that affects their teams. Include a subject line.

3. MY TEAM — 5 bullet points, direct and encouraging tone. Focus on: what they achieved, what is next for them specifically, and any context they need to do their jobs. Can be a Teams post or email.

Mark any section with [VERIFY] where you had limited information from communications alone. Do not send anything — present all three drafts for my review.
```

---

### 16. Change Communication Drafter

**Use Case:** Draft a clear, empathetic internal communication for an organisational or process change — balancing transparency with clarity and proactively addressing team concerns.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `communication`, `people-management`, `change-management`, `draft`, `manager`

**Prompt:**

```
I need to communicate a change to my team. The change is: [describe the change — e.g. "our team is reorganising into two squads", "we are moving to bi-weekly reporting", "a team member is leaving"].

Before drafting, search my recent emails and Teams for any official communications about this change already sent — so the draft does not contradict what has been communicated officially.

Draft a team communication that:

1. States the change clearly and factually — no euphemisms or vague language.
2. Explains the reason for the change at the level I am authorised to share. Use a placeholder [REASON — to confirm] if the rationale is not yet approved for communication.
3. Addresses the most likely questions this change will generate — list 3–5 anticipated questions with honest answers.
4. States clearly what changes for the team and what stays the same.
5. Tells the team what happens next and when.
6. Invites questions through a specific channel (1:1, team meeting, open Q&A).

Keep the announcement under 250 words. Write in plain language — not corporate announcement style. I will review and edit before sending.
```

---

### 17. New Team Member Onboarding Orchestrator

**Use Case:** Generate a manager-side onboarding plan and communications for a new direct report joining the team — so the first 30 days are intentional, not improvised.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `people-management`, `onboarding`, `draft`, `manager`

**Prompt:**

```
A new team member [Name, Role] is starting on [Date]. Help me prepare for their first 30 days.

Generate the following:

1. WELCOME EMAIL — A message to send before day 1. What to expect on their first day, who to meet, what to read, and how I am available to them. Tone: warm, practical, not overwhelming.

2. WEEK 1 AGENDA — Key meetings to schedule, people to introduce them to, and context I should share in our first 1:1. Keep it structured but not overprescribed.

3. 30-DAY MILESTONE CHECKLIST — What should they know, who should they know, and what should they be able to do independently by day 30? Format as a simple checklist with week markers.

4. FIRST THREE 1:1 AGENDAS — Suggested agenda for each of my first three 1:1s with them: (a) listening mode — their background, questions, first impressions; (b) role clarity — what success looks like in 30/60/90 days; (c) early feedback — what is going well, what to adjust.

5. TEAM INTRODUCTION MESSAGE — A short post for our team channel welcoming them, sharing their role and background (with a placeholder for details I will fill in), and inviting the team to connect.

Focus on helping them feel confident and clear — not overwhelmed by process.
```

---

### 18. End-of-Week Manager Reset

**Use Case:** A structured weekly closure routine — capturing wins, open loops, and priorities to carry forward — so the manager doesn't mentally carry work into the weekend.

**Target Personas:** Manager, Team Lead, Middle Manager, Director

**Tags:** `microsoft-copilot`, `microsoft-365`, `outlook`, `teams`, `calendar`, `productivity`, `weekly`, `manager`, `scheduled`

**Prompt:**

```
Review my emails, calendar, and Teams messages from the past 5 business days. Produce my end-of-week reset in six sections:

1. WINS — 3–5 things that went well, were completed, or moved forward. Include specifics I can share with my team.

2. COMMITMENTS FULFILLED — Things I said I would do that I completed this week. (For my own record.)

3. OPEN LOOPS — Commitments I made that are still outstanding. For each: what it is, who is waiting, and a risk rating (High / Medium / Low) based on the time elapsed and context.

4. SURPRISES — Things that came up this week that I did not plan for. What do they signal about the week ahead or about gaps in my visibility?

5. NEXT WEEK'S TOP 3 — The three things that will matter most in the next 5 working days, in priority order.

6. ONE HANDOFF — One thing I will delegate or hand off before Monday, freeing my attention for higher-priority work.

Format as a 6-section personal debrief. This is for my eyes only — not for formal reporting.
```

---

**Made with care by [NerdyChefs.ai](https://nerdychefs.ai)**
