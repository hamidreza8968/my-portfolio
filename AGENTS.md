<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- AI assistant integration notes -->
<!-- Add a reference to global or project-specific AI rules so assistants load them automatically. -->
<!-- Example local project rule files are located in docs/AI_RULES/ -->
@docs/AI_RULES/CODING_STANDARDS.md
@docs/AI_RULES/TESTING_PHILOSOPHY.md
@docs/AI_RULES/ACCESSIBILITY.md
@docs/AI_RULES/DEBUGGING.md
@docs/AI_RULES/ARCHITECTURE.md

<!-- To include centralized/global rules, add a submodule at .ai-rules/ or replace the path below with a raw URL -->
@.ai-rules/GLOBAL_AI_RULES.md

<!-- Load order: global (if present) then project docs. If conflicts, project docs override. -->

