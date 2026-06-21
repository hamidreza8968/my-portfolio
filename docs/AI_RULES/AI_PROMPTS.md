# AI Prompting & Integration Guide

Use this short guide to load global and project rules into an AI session (Copilot, ChatGPT, etc.) so you don't need to repeat them each prompt.

1) Loading order
- First: global rules (if you have a central repo/submodule at `.ai-rules/GLOBAL_AI_RULES.md`).
- Second: project rules in `docs/AI_RULES/` (the files listed in this directory).

2) Short starter prompt (paste at start of chat)
Please load and follow these files in order:
1. `.ai-rules/GLOBAL_AI_RULES.md` (or raw URL)
2. `docs/AI_RULES/*` (project files)
If any rule conflicts, prefer the project file. Acknowledge when loaded and then proceed.

3) Example system message for Chat sessions
System: You are an assistant for this repository. Load global and project AI rules (paths above). Confirm you have loaded them. Then provide guidance constrained by those rules. Mark anything needing human review with "REVIEW REQUIRED".

4) Automation tips
- Add AGENTS.md with `@` references to the files (already present in this repo). Use a CI check to ensure AGENTS.md references exist.

