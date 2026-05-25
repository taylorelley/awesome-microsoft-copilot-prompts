# Contributing to Awesome Microsoft Copilot Prompts

Thank you for your interest in contributing to our collection of Microsoft Copilot prompts! This guide will help you submit high-quality prompts that benefit the entire community.

## 📋 Table of Contents

- [Quality Standards](#-quality-standards)
- [Repository Structure](#-repository-structure)
- [How to Add a New Prompt](#-how-to-add-a-new-prompt)
- [How to Update an Existing Prompt](#-how-to-update-an-existing-prompt)
- [Frontmatter Reference](#-frontmatter-reference)
- [Testing Standards](#-testing-standards)
- [Review Process](#-review-process)
- [Code of Conduct](#-code-of-conduct)
- [Questions?](#-questions)

## 🎯 Quality Standards

We only accept prompts that meet the following criteria:

### Must Have

1. **Production-Tested** — The prompt must have been used in real work scenarios, not just theoretically designed
2. **Copilot-Specific** — Must work specifically with Microsoft Copilot (not generic AI prompts)
3. **Business Value** — Solves a real business problem or significantly improves productivity
4. **Clear Use Case** — Includes specific scenarios where the prompt is useful
5. **Target Audience** — Defines who would benefit from this prompt

### Nice to Have

- Multiple variations for different contexts
- Tips for customization
- Known limitations documented
- Examples of expected output

### Not Accepted

- Generic prompts that work the same on any AI (ChatGPT, Claude, etc.)
- Prompts for personal / non-work use
- Prompts that could violate enterprise policies
- Prompts that attempt to bypass safety features
- Prompts with placeholder-only content (no actual substance)

## 🏗️ Repository Structure

```
prompts/
├── _canonical/              # 📝 Single source of truth — edit here only
│   ├── daily-calendar-prep.md
│   ├── meeting-agenda.md
│   └── ...
├── by-app/                  # ⚠️ Auto-generated — do not edit
│   ├── README.md
│   ├── outlook/README.md
│   ├── teams/README.md
│   └── ...
└── by-role/                 # ⚠️ Auto-generated — do not edit
    ├── README.md
    ├── executive/README.md
    ├── manager/README.md
    └── ...
build.js                     # Generates by-app/ and by-role/ indexes
data.js                      # Auto-generated — do not edit
```

- **All prompts live in `prompts/_canonical/`** as individual `.md` files with YAML frontmatter.
- `build.js` reads the canonical files and generates the `by-app/` and `by-role/` index READMEs, plus `data.js` for the web UI.
- **Never edit files inside `by-app/` or `by-role/` manually** — they are overwritten every time `build.js` runs.

## ➕ How to Add a New Prompt

### 1. Create the file

Create a new Markdown file in `prompts/_canonical/` using kebab-case for the filename:

```
prompts/_canonical/your-prompt-title.md
```

### 2. Add YAML frontmatter

Every file **must** begin with YAML frontmatter containing these four required fields:

```yaml
---
title: "Your Prompt Title"
app: outlook
role: manager
difficulty: beginner
use_case: "One-sentence description of what this prompt does"
---
```

**Example:**

```yaml
---
title: "Daily Calendar Prep"
app: cross-app
role: general
difficulty: intermediate
use_case: "Know what today requires before the first meeting starts"
---
```

### 3. Write the body

After the frontmatter, use this two-section structure:

```markdown
## Context
Brief description of the scenario and when to use this prompt.

## Prompt
\```
The exact prompt text that users will copy into Microsoft Copilot.
\```
```

**Complete example:**

```markdown
---
title: "Daily Calendar Prep"
app: cross-app
role: general
difficulty: intermediate
use_case: "Know what today requires before the first meeting starts"
---

## Context
Know what today requires before the first meeting starts.

## Prompt
\```
List my meetings for today. For each meeting show:
- Time and duration
- Attendees (names only, not email addresses)
- One sentence on what the meeting is likely about based on the invite subject and any related emails from the last 3 days
- Any open action items from previous meetings with the same people

Flag any back-to-back blocks with no break.
\```
```

### 4. Run the build

From the repository root, run:

```bash
node build.js
```

This regenerates:
- `data.js` (prompt data for the web UI)
- `prompts/by-app/` index READMEs grouped by application
- `prompts/by-role/` index READMEs grouped by role

### 5. Commit and submit

Include **both** your new canonical file **and** the regenerated build output:

```bash
git add prompts/_canonical/your-prompt-title.md
git add data.js prompts/by-app/ prompts/by-role/
git commit -m "Add: Your Prompt Title"
git push
```

Then open a Pull Request with:
- **Title:** `"Add: Your Prompt Title to [app]"`  
- **Description:** What the prompt does and confirmation that you tested it in production

## ✏️ How to Update an Existing Prompt

1. **Edit the canonical file** — make your changes in `prompts/_canonical/{slug}.md`
2. **Run the build** — from the repository root: `node build.js`
3. **Commit both** — include the canonical file and all regenerated outputs:
   ```bash
   git add prompts/_canonical/{slug}.md data.js prompts/by-app/ prompts/by-role/
   git commit -m "Update: {Prompt Title}"
   ```

> ⚠️ **Never edit the generated files (`data.js`, `prompts/by-app/`, `prompts/by-role/`) directly.**  
> Any manual changes will be overwritten the next time `build.js` runs.

## 📐 Frontmatter Reference

### `app` — Microsoft 365 Application

| Value | Description |
|-------|-------------|
| `outlook` | Microsoft Outlook — email & calendar |
| `excel` | Microsoft Excel — spreadsheets & data analysis |
| `teams` | Microsoft Teams — chat, meetings & collaboration |
| `word` | Microsoft Word — documents & reports |
| `powerpoint` | Microsoft PowerPoint — presentations & decks |
| `security-copilot` | Microsoft Security Copilot — security operations |
| `cross-app` | Works across multiple Copilot-enabled apps |

### `role` — Target Professional Role

| Value | Display Name |
|-------|-------------|
| `executive` | Executive |
| `manager` | Manager |
| `sales` | Sales |
| `marketing` | Marketing |
| `operations` | Operations |
| `finance-hr` | Finance & HR |
| `legal-compliance` | Legal & Compliance |
| `security` | Security |
| `assistant` | Assistant |
| `research-dev` | Research & Dev |
| `consulting` | Consulting |
| `project-leadership` | Project Leadership |
| `customer-success` | Customer Success |
| `commercial-ops` | Commercial Ops |
| `supply-chain` | Supply Chain |
| `engineering-construction` | Engineering & Construction |
| `admin` | Admin |
| `general` | General (applicable to any role) |

### `difficulty` — Skill Level

| Value | Description |
|-------|-------------|
| `beginner` | Simple copy-paste prompts, no customization needed |
| `intermediate` | Requires some user input / customization in `[brackets]` |
| `advanced` | Multi-step prompts, complex logic, or Copilot Studio required |

## 🧪 Testing Standards

Before submitting, verify that your prompt:

1. **Works in Microsoft Copilot** — test it in the actual Microsoft 365 Copilot interface (or Security Copilot where applicable)
2. **Produces meaningful output** — the response should be useful without excessive post-editing
3. **Handles edge cases** — consider what happens when data is missing or the user has fewer meetings / emails than expected
4. **Is clearly scoped** — the prompt should not try to do too many things at once; split complex workflows into multiple prompts if needed

If the prompt requires Copilot Studio, custom agents, or specific licensing, note that in the `## Context` section.

## 🔍 Review Process

All submissions go through the following review:

1. **Format Check** — Does the YAML frontmatter contain all required fields? Is the body structure correct?
2. **Quality Review** — Does the prompt meet our quality standards (production-tested, business value, Copilot-specific)?
3. **Technical Review** — Does the prompt work correctly with Microsoft Copilot?
4. **Category Fit** — Are `app` and `role` values appropriate for this prompt?
5. **Duplicate Check** — Does a similar prompt already exist?

### Timeline

- Initial response: Within 7 days
- Full review: Within 14 days
- Revisions may be requested

### Review Feedback

We may ask you to:

- Clarify the use case
- Add more specific context or instructions
- Adjust the prompt for better Copilot compatibility
- Change the `app` or `role` classification
- Combine with an existing similar prompt

## 📜 Code of Conduct

### Be Respectful

- Provide constructive feedback on others' submissions
- Welcome newcomers and help them improve their contributions
- Respect different work cultures and industries

### Be Professional

- All prompts should be appropriate for enterprise use
- No prompts that could be used for harmful purposes
- No discriminatory or offensive content

### Be Honest

- Only submit prompts you've actually tested
- Acknowledge if a prompt has limitations
- Don't claim others' work as your own

### Be Collaborative

- Build on existing prompts rather than duplicating
- Share improvements to existing prompts
- Help document edge cases and limitations

## 🆘 Questions?

### Before Submitting

- **Is my prompt Copilot-specific?** If it works the same on ChatGPT without modification, it's probably too generic.
- **Have I tested it?** We require real-world testing, not theoretical prompts.
- **Does it add value?** Compare to existing prompts in the same `app` and `role` combination.

### Getting Help

- Open an **Issue** with the label `question`
- Tag maintainers in your PR if stuck
- Check existing issues for similar questions

### Contact

- **GitHub Issues:** For prompt-related questions
- **Twitter/X:** [@nerdychefsai](https://x.com/nerdychefsai)
- **LinkedIn:** [Mathieu Kessler](https://linkedin.com/in/mathieukessler)

---

## 🎉 Recognition

Contributors who submit accepted prompts will be:

- Listed in the Contributors section of the README
- Credited in the prompt itself (if desired)
- Featured in our monthly contributor highlights

Thank you for helping make Microsoft Copilot more useful for everyone!

---

**Made with ❤️ by [NerdyChefs.ai](https://nerdychefs.ai)**
