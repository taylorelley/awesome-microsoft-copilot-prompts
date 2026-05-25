# Awesome Microsoft Copilot Prompts 🍳

[![Prompts](https://img.shields.io/badge/prompts-454-blue)](https://nerdychefs.ai)
[![Apps](https://img.shields.io/badge/apps-7-green)](https://nerdychefs.ai)
[![Roles](https://img.shields.io/badge/roles-16-green)](https://nerdychefs.ai)
[![License](https://img.shields.io/badge/license-CC%20BY--SA%204.0-blue)](LICENSE)
[![Enterprise](https://img.shields.io/badge/enterprise-tested-purple)](https://kesslernity.com)

A curated collection of **454 production-tested Microsoft Copilot prompts** for enterprise professionals. From inbox intelligence to role-specific workflows, these prompts help you get the most out of Microsoft 365 Copilot.

The repo is organized with a **dual-taxonomy structure**: browse by **Microsoft 365 app** or by **professional role**. A single source of truth in [`prompts/_canonical/`](prompts/_canonical/) feeds auto-generated indexes in [`prompts/by-app/`](prompts/by-app/) and [`prompts/by-role/`](prompts/by-role/).

## 📬 AI at Work Newsletter

Tested prompts for Microsoft 365 Copilot. One role at a time. Plus verified GenAI news and one insight you won't find in a changelog. Biweekly, 4-minute read.

**What you get every two weeks:**
- **What Happened** — 3-4 verified GenAI news items that affect how you work (source-linked, fact-checked)
- **Prompts That Work** — 3-5 role-specific M365 Copilot prompts tested on real teams (plus what didn't work)
- **The Takeaway** — One insight on human+AI collaboration that changes how you think about your workflow

👉 **[Subscribe free](https://newsletter.kesslernity.com)** — no spam, no fluff, unsubscribe anytime.

## 🥘 The Prompt Pantry — Weekly from NerdyChefs.ai

The site gives you the prompts. The newsletter gives you the judgment, when to use them, how to sequence them, and why one approach works where another fails. Weekly. Free. Always.

👉 **[Subscribe free](https://pantry.nerdychefs.ai)**

## 🎓 Free AI Course

Want to go beyond prompts? **AI Quick Start Essentials** is a free 35-minute course covering responsible AI use and practical human+AI collaboration workflows.

👉 **[Start the free course](https://trainings.kesslernity.com)** — no signup wall, no credit card.

---

## 📊 Quick Stats

- **454 Total Prompts** — single source of truth in `prompts/_canonical/`
- **7 Microsoft 365 Apps** — browse by application
- **16 Professional Roles** — browse by job function
- **Tested in Production** by thousands of enterprise users
- **Dual-Taxonomy Structure** — find prompts by app *or* by role
- **Auto-Generated Indexes** — run `node build.js` to rebuild after edits

---

## 🗂️ Browse by App

Each prompt is tagged with its primary Microsoft 365 app. Click through to see prompts for that app.

| App | Prompts | Description |
| --- | ------- | ----------- |
| [Outlook](prompts/by-app/outlook/README.md) | 106 | Email intelligence, inbox management, triage, and automation |
| [Cross-App](prompts/by-app/cross-app/README.md) | 286 | Prompts that span multiple Microsoft 365 apps |
| [Word](prompts/by-app/word/README.md) | 13 | Document drafting, editing, and analysis |
| [Microsoft Teams](prompts/by-app/teams/README.md) | 5 | Meeting intelligence, collaboration, and channel management |
| [PowerPoint](prompts/by-app/powerpoint/README.md) | 5 | Presentation design, outline creation, and slide refinement |
| [Excel](prompts/by-app/excel/README.md) | 4 | Data analysis, visualization, and spreadsheet intelligence |
| [Security Copilot](prompts/by-app/security-copilot/README.md) | 35 | Threat hunting, incident response, and security operations |

**[Browse all prompts by app →](prompts/by-app/README.md)**

## 🧑‍💼 Browse by Role

Every prompt is also tagged with a target professional role. Click through to find prompts tailored to your function.

| Role | Prompts | Description |
| ---- | ------- | ----------- |
| [General](prompts/by-role/general/README.md) | 158 | Universal prompts for any Copilot user |
| [Manager](prompts/by-role/manager/README.md) | 53 | People management, 1:1 prep, team coordination |
| [Security](prompts/by-role/security/README.md) | 35 | SOC operations, threat hunting, compliance reporting |
| [Legal & Compliance](prompts/by-role/legal-compliance/README.md) | 18 | Contract review, compliance research, policy drafting |
| [Commercial Ops](prompts/by-role/commercial-ops/README.md) | 18 | Bid management, contract tracking, document control |
| [Finance & HR](prompts/by-role/finance-hr/README.md) | 17 | Budgeting, audit support, onboarding, HR policy |
| [Admin](prompts/by-role/admin/README.md) | 17 | Calendar management, travel coordination, meeting support |
| [Project Leadership](prompts/by-role/project-leadership/README.md) | 17 | Budget tracking, stakeholder comms, change management |
| [Sales](prompts/by-role/sales/README.md) | 16 | Pipeline management, outreach, competitive intelligence |
| [Marketing](prompts/by-role/marketing/README.md) | 16 | Campaign management, content creation, social media |
| [Research & Dev](prompts/by-role/research-dev/README.md) | 16 | Literature review, experiment tracking, prior art research |
| [Consulting](prompts/by-role/consulting/README.md) | 16 | Client management, deliverable drafting, workshop prep |
| [Customer Success](prompts/by-role/customer-success/README.md) | 16 | Account health, QBR prep, renewal management |
| [Supply Chain](prompts/by-role/supply-chain/README.md) | 15 | Inventory optimization, shipment tracking, supplier management |
| [Engineering & Construction](prompts/by-role/engineering-construction/README.md) | 14 | Field documentation, quality management, site coordination |
| [Executive](prompts/by-role/executive/README.md) | 12 | Briefing generation, strategic communication, board prep |

**[Browse all prompts by role →](prompts/by-role/README.md)**

---

## 💡 How to Use

### 1. Find Your Use Case

- **[Browse by App](prompts/by-app/README.md)** — pick the Microsoft 365 app you're working in (Outlook, Excel, Teams, etc.)
- **[Browse by Role](prompts/by-role/README.md)** — find prompts tailored to your job function (Manager, Sales, Marketing, etc.)

### 2. Click Through to the Canonical Prompt

Each entry in the generated indexes links directly to the canonical file in `prompts/_canonical/`. That single file is the authoritative source for the prompt body, use case, difficulty level, and app/role metadata.

### 3. Copy & Customize

Every prompt works out of the box, but you'll get the best results by replacing placeholders:

- `[TOPIC]` → your specific subject
- `[TIMEFRAME]` → your desired period (e.g., "last 7 days", "this quarter")
- `[METRIC]` → your KPI or measurement
- `[ACCOUNT NAME]` → specific client or project
- `[AUDIENCE]` → who the output is for (VP, technical team, board)

### 4. Run in Copilot

Paste the prompt into the appropriate Microsoft 365 app:

- **Outlook:** Use in Outlook Copilot chat or sidebar
- **Excel:** Use in Excel Copilot sidebar for data analysis
- **Word:** Use in Word Copilot drafting or editing
- **PowerPoint:** Use in PowerPoint Copilot designer
- **Teams:** Use in Teams Copilot chat for meeting intelligence

### 5. Iterate

If the first result isn't perfect, refine with follow-ups:
- *"Make it more concise"*
- *"Focus on Q4 data only"*
- *"Add a risk assessment section"*
- *"Format as a table"*

---

## 🏢 Enterprise Deployment

Using Copilot across your organization? These prompts work even better when deployed enterprise-wide.

**Need help with:**
- Microsoft 365 Copilot rollout strategy
- Custom Copilot Studio agents
- Enterprise prompt governance
- Team training and adoption
- Role-based prompt libraries

👉 **[Check out Kesslernity](https://kesslernity.com)** — Enterprise AI deployment platform

## 🌐 Full Searchable Library

This repo contains **454 prompts** optimized for Microsoft Copilot. For the complete searchable library with:

- Advanced filtering by role, use case, and app
- Copy-to-clipboard functionality
- Regular updates with new prompts
- Additional ChatGPT, Claude, and Gemini prompts
- **No signup required**

👉 **Visit [NerdyChefs.ai](https://nerdychefs.ai)** — 1,565+ free AI prompts & tools

## 🤝 Contributing

Have a killer Copilot prompt that's made your work life easier? We'd love to add it!

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Prompt format requirements (YAML frontmatter in `prompts/_canonical/`)
- Testing standards (must be production-tested)
- Documentation expectations
- Review process

**Quality bar:** We only accept prompts that:

1. Solve real business problems
2. Have been tested in production environments
3. Include clear use cases and target personas
4. Work specifically with Microsoft Copilot (not generic AI prompts)

> **Note for contributors:** After adding or updating a canonical file in `prompts/_canonical/`, run `node build.js` to regenerate the app and role indexes.

---

## 🔐 Governance & Guardrails

Every role-specific collection includes **critical guardrails** explaining:

- ✅ What Copilot IS good for in that role
- ❌ When NEVER to use Copilot (safety, compliance, legal)
- ⚠️ System limitations and integration notes
- 📝 Golden rules for responsible usage

**Example guardrails included:**
- **HSE/Safety:** ⛔ NEVER for permit-to-work or safety authorization
- **Legal:** NEVER for legal advice or contract interpretation
- **Finance:** NEVER for financial calculations or budget approvals
- **Sales:** NEVER for pricing decisions or contract terms
- **Engineering:** NEVER for engineering calculations or design approval

[See example guardrails →](prompts/by-role/legal-compliance/README.md)

---

## 📱 Stay Updated

- ⭐ **Star this repo** to get updates when new prompts are added
- 🔔 **Watch releases** for curated prompt pack releases
- 🐦 **Follow on X/Twitter:** [@nerdychefsai](https://x.com/nerdychefsai) for Copilot tips and enterprise AI insights
- 💼 **Follow on LinkedIn:** [Mathieu Kessler](https://linkedin.com/in/mathieukessler) for enterprise AI deployment strategies

## 📄 License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

**This means:**

- ✅ You can use these prompts freely (personal or commercial)
- ✅ You can modify and build upon them
- ✅ You can share them with others
- 📌 You must give appropriate credit
- 📌 Any derivatives must use the same license (stay open-source)

**In practice:**

- Use these prompts in your company ✅
- Build internal tools with them ✅
- Share improvements with the community ✅
- Create a closed-source product repackaging them ❌

## 🙏 Acknowledgments

Built by [Mathieu Kessler](https://linkedin.com/in/mathieukessler) and the team at NerdyChefs.ai.

**Special thanks to:**
- The thousands of enterprise users who tested these prompts in production
- Microsoft 365 admins who provided governance feedback
- Role-specific subject matter experts who validated use cases

**Made with care for people who want to work smarter, not harder.**

---

## 🔗 Quick Links

- **[Full Prompt Library](https://nerdychefs.ai)** — 1,565+ free AI prompts & tools (no signup)
- **[Browse by App](prompts/by-app/README.md)** — 454 prompts organized by Microsoft 365 app
- **[Browse by Role](prompts/by-role/README.md)** — 454 prompts organized by professional role
- **[Kesslernity](https://kesslernity.com)** — Enterprise AI deployment platform
- **[LinkedIn](https://linkedin.com/in/mathieukessler)** — Connect with Mathieu
- **[X/Twitter](https://x.com/nerdychefsai)** — Daily AI productivity tips
- **[Contributing Guide](CONTRIBUTING.md)** — Submit your own prompts
- **[License](LICENSE)** — CC BY-SA 4.0

---

**⚡ Pro Tip:** Bookmark this repo and check back monthly for new prompt additions. We're continuously adding prompts based on enterprise feedback and real-world use cases.
