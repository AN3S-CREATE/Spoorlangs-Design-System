# .index/ — project context index

Purpose: a durable, human- and agent-readable map of this repository so every session starts with accurate context (rule CONTEXT-INDEX-001 in `~/.claude/CLAUDE.md`).

| File | What it holds |
| --- | --- |
| `file-inventory.md` | Every file in the repo: path, purpose, key symbols, status |
| `architecture.md` | What the design system is, how its files relate, how it is published and consumed |
| `key-decisions.md` | ADR-style log of the decisions behind the system |
| `dead-code.md` | Unused or legacy material and known tech debt |
| `context-refresh-log.md` | When and why the index was refreshed |

Maintenance rules: update `file-inventory.md` after any file change; record significant decisions in `key-decisions.md`; log refreshes. Entries come from reading the real files, never from memory. Commit this folder to version control when the repo is put under git.

Related working state: `../REPO_ANALYSIS_MEMORY.md` (in-progress investigation notes, per the Repository Analysis Memory Protocol).
