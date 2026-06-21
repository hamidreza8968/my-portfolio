<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- AI assistant integration notes -->
<!-- Add a reference to global or project-specific AI rules so assistants load them automatically. -->

<!-- Global rules (loaded first) -->
@.ai-rules/GLOBAL_AI_RULES.md

<!-- Core project rules (every session) -->
@docs/AI_RULES/CODING_STANDARDS.md
@docs/AI_RULES/TESTING_PHILOSOPHY.md
@docs/AI_RULES/ACCESSIBILITY.md
@docs/AI_RULES/DEBUGGING.md
@docs/AI_RULES/ARCHITECTURE.md

<!-- Specialized agents (load as needed for specific tasks) -->
@docs/AI_RULES/CODE_REVIEW.md
@docs/AI_RULES/DOCUMENTATION_AGENT.md

<!-- Registry and agent template -->
@docs/AI_RULES/AGENTS_REGISTRY.md

<!-- Load order: global (if present) then core project docs. Specialized agents are optional based on task. If conflicts, project docs override global. -->

