# Prompt Collections

> This repository uses a **dual-taxonomy structure**. All prompts live in `_canonical/` as the single source of truth, and are auto-organized into browsable indexes.

## Browse by App

See [prompts/by-app/README.md](by-app/README.md) for prompts organized by Microsoft 365 application.

## Browse by Role

See [prompts/by-role/README.md](by-role/README.md) for prompts organized by professional role.

## Canonical Source

All prompt files are in [`_canonical/`](_canonical/). Each file includes YAML frontmatter with metadata (app, role, difficulty, use_case) and the full prompt text.

To regenerate the indexes after editing canonical files, run:

```bash
node build.js
```

---

**Made with care by [NerdyChefs.ai](https://nerdychefs.ai)**
