#!/usr/bin/env node
// Parses all markdown prompt files → generates data.js for the PWA

const fs = require('fs');
const path = require('path');

const PROMPTS_DIR = path.join(__dirname, 'prompts');
const OUTPUT = path.join(__dirname, 'data.js');

const FILES = [
  { file: 'quick-start/essentials.md',                        category: 'Quick Start',                     group: 'Essentials',      color: '#10B981' },
  { file: 'power-users/README.md',                            category: 'Power Users',                     group: 'Advanced',        color: '#8B5CF6' },
  { file: 'outlook/advanced-prompts.md',                      category: 'Outlook — Advanced',              group: 'Outlook',         color: '#3B82F6' },
  { file: 'outlook/advanced-automation.md',                   category: 'Outlook — Automation',            group: 'Outlook',         color: '#3B82F6' },
  { file: 'enterprise/standalone-prompts.md',                 category: 'Enterprise',                      group: 'Enterprise',      color: '#F59E0B' },
  { file: 'role-specific/admin-executive-assistants.md',      category: 'Admin & Executive Assistants',    group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/commercial-operations.md',           category: 'Commercial Operations',           group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/consulting-professional-services.md',category: 'Consulting & Professional Svcs',  group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/customer-success-support.md',        category: 'Customer Success & Support',      group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/engineering-construction.md',        category: 'Engineering & Construction',      group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/finance-hr.md',                      category: 'Finance & HR',                    group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/hse-legal-compliance.md',            category: 'HSE, Legal & Compliance',         group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/marketing-communications.md',        category: 'Marketing & Communications',      group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/project-leadership.md',              category: 'Project Leadership',              group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/research-development.md',            category: 'Research & Development',          group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/sales-business-development.md',      category: 'Sales & Business Dev.',           group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/supply-chain-logistics.md',          category: 'Supply Chain & Logistics',        group: 'Role-Specific',   color: '#EC4899' },
  { file: 'role-specific/managers-personal-assistant.md',     category: 'Managers — Personal Assistant',   group: 'Role-Specific',   color: '#EC4899' },
  { file: 'security-copilot/soc-operations.md',               category: 'SOC Operations',                  group: 'Security Copilot',color: '#EF4444' },
  { file: 'security-copilot/security-reporting.md',           category: 'Security Reporting',              group: 'Security Copilot',color: '#EF4444' },
  { file: 'cowork/action-workflows.md',                       category: 'Cowork — Actions',                group: 'Cowork',          color: '#06B6D4' },
  { file: 'cowork/research-workflows.md',                     category: 'Cowork — Research',               group: 'Cowork',          color: '#06B6D4' },
  { file: 'cowork/scheduled-briefings.md',                    category: 'Cowork — Scheduled',              group: 'Cowork',          color: '#06B6D4' },
  { file: 'scheduled-prompts/README.md',                      category: 'Scheduled Prompts',               group: 'Scheduled',       color: '#14B8A6' },
];

// Emoji ranges to strip from headings
const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Skip headings that aren't real subcategories
const SKIP_HEADINGS = new Set([
  'overview', 'requirements', 'why this is different', 'action-taking prompts',
  'scu note — read before using', 'scu note', 'important notice',
  'sales copilot guardrails', 'guardrails', 'what\'s included',
]);

function parsePrompts(content, fileMeta) {
  const prompts = [];
  const lines = content.split('\n');
  let currentSubcategory = '';
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Track ## subcategory headings
    if (/^## /.test(line)) {
      const heading = line.replace(/^## /, '').replace(EMOJI_RE, '').trim();
      if (!SKIP_HEADINGS.has(heading.toLowerCase())) {
        currentSubcategory = heading;
      }
      i++;
      continue;
    }

    // Match ### N. Title  or  ### Title
    const h3Match = line.match(/^### (\d+\.\s+)?(.+)$/);
    if (h3Match) {
      const rawTitle = h3Match[2].trim().replace(EMOJI_RE, '').trim();

      // Collect everything until the next ## or ### heading or end
      const sectionLines = [];
      i++;
      while (i < lines.length && !/^#{2,3} /.test(lines[i])) {
        sectionLines.push(lines[i]);
        i++;
      }

      const section = sectionLines.join('\n');

      // --- Extract Use Case ---
      let useCase = '';
      const ucMatch = section.match(/\*\*Use Cases?:\*\*\s*(.+)/);
      if (ucMatch) {
        useCase = ucMatch[1].trim();
      } else {
        // Use first non-empty plain-text line (not bold, not blockquote, not list, not code)
        for (const sl of sectionLines) {
          const t = sl.trim();
          if (t && !t.startsWith('**') && !t.startsWith('>') && !t.startsWith('#') &&
              !t.startsWith('---') && !t.startsWith('-') && !t.startsWith('*') &&
              !t.startsWith('`') && !t.startsWith('[')) {
            useCase = t;
            break;
          }
        }
      }

      // --- Extract Personas ---
      let personas = [];
      const personasMatch = section.match(/\*\*Target Personas?:\*\*\s*(.+)/);
      if (personasMatch) {
        personas = personasMatch[1].split(',').map(p => p.trim()).filter(Boolean);
      }

      // --- Extract Tags ---
      let tags = [];
      const tagsMatch = section.match(/\*\*Tags?:\*\*\s*(.+)/);
      if (tagsMatch) {
        const backtickTags = tagsMatch[1].match(/`([^`]+)`/g);
        if (backtickTags) {
          tags = backtickTags.map(t => t.replace(/`/g, '').trim());
        } else {
          tags = tagsMatch[1].split(',').map(t => t.trim()).filter(Boolean);
        }
      }

      // --- Extract Prompt text (from code block after **Prompt:**) ---
      let promptText = '';
      const promptBlockMatch = section.match(/\*\*Prompt:\*\*[\s\S]*?```(?:\w*)\n([\s\S]*?)```/);
      if (promptBlockMatch) {
        promptText = promptBlockMatch[1].trim();
      } else {
        // Fallback: any standalone code block in the section
        const anyBlock = section.match(/```(?:\w*)\n([\s\S]*?)```/);
        if (anyBlock) promptText = anyBlock[1].trim();
      }

      if (promptText && rawTitle && !rawTitle.toLowerCase().startsWith('guardrail')) {
        const id = slugify(`${fileMeta.category}-${rawTitle}`);
        prompts.push({
          id,
          title: rawTitle,
          useCase,
          personas,
          tags,
          prompt: promptText,
          category: fileMeta.category,
          group: fileMeta.group,
          color: fileMeta.color,
          subcategory: currentSubcategory,
        });
      }

      continue;
    }

    i++;
  }

  return prompts;
}

// --- Main ---
const allPrompts = [];

for (const fileMeta of FILES) {
  const filePath = path.join(PROMPTS_DIR, fileMeta.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`  [SKIP] Not found: ${fileMeta.file}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const prompts = parsePrompts(content, fileMeta);
  console.log(`  ${fileMeta.category}: ${prompts.length} prompts`);
  allPrompts.push(...prompts);
}

// Deduplicate by id (keep first occurrence)
const seen = new Set();
const deduped = allPrompts.filter(p => {
  if (seen.has(p.id)) return false;
  seen.add(p.id);
  return true;
});

// Build group metadata for sidebar
const groupsMap = {};
for (const p of deduped) {
  if (!groupsMap[p.group]) groupsMap[p.group] = {};
  if (!groupsMap[p.group][p.category]) {
    groupsMap[p.group][p.category] = { count: 0, color: p.color };
  }
  groupsMap[p.group][p.category].count++;
}

// Preserve group insertion order
const groups = Object.fromEntries(
  Object.entries(groupsMap).map(([g, cats]) => [g, cats])
);

console.log(`\nTotal: ${deduped.length} prompts (${allPrompts.length - deduped.length} duplicates removed)`);

const output = `// Auto-generated by build.js — do not edit manually
// Run: node build.js
const PROMPTS_DATA = ${JSON.stringify(deduped, null, 0)};
const GROUPS_META = ${JSON.stringify(groups, null, 0)};
`;

fs.writeFileSync(OUTPUT, output, 'utf-8');
console.log(`Written → data.js`);
