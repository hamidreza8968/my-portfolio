<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data.

Before generating code:

* Read the relevant documentation in `node_modules/next/dist/docs/`
* Follow current APIs and conventions
* Respect deprecation notices

<!-- END:nextjs-agent-rules -->

# AI Assistant Rules Registry

## Global Rules (load first)

@.ai-rules/GLOBAL_AI_RULES.md

---

## Core Project Rules (load for every task)

@docs/AI_RULES/CODING_STANDARDS.md
@docs/AI_RULES/TYPESCRIPT.md
@docs/AI_RULES/FRONTEND_STANDARDS.md
@docs/AI_RULES/ARCHITECTURE.md
@docs/AI_RULES/TESTING_PHILOSOPHY.md
@docs/AI_RULES/ACCESSIBILITY.md
@docs/AI_RULES/DEBUGGING.md
@docs/AI_RULES/AI_PROMPTS.md

---

## Specialized Rules (load only when relevant)

@docs/AI_RULES/CODE_REVIEW.md
@docs/AI_RULES/SECURITY_REVIEW.md
@docs/AI_RULES/PERFORMANCE.md
@docs/AI_RULES/DESIGN_SYSTEM.md
@docs/AI_RULES/DOCUMENTATION_AGENT.md

---

## Agent Registry

@docs/AI_RULES/AGENTS_REGISTRY.md

---

# Assistant Instructions

Follow these rules in order:

1. Load GLOBAL_AI_RULES.md first
2. Load all Core Project Rules
3. Load Specialized Rules only when relevant to the task
4. Project rules override global rules
5. More specific rules override general rules

## UI Tasks

Always apply:

* FRONTEND_STANDARDS.md
* ACCESSIBILITY.md
* TESTING_PHILOSOPHY.md
* DESIGN_SYSTEM.md (if UI components are affected)

## TypeScript Tasks

Always apply:

* TYPESCRIPT.md
* CODING_STANDARDS.md

## Security-Sensitive Tasks

Also load:

* SECURITY_REVIEW.md

Examples:

* Authentication
* Authorization
* User data
* Cookies
* Tokens
* API endpoints
* Forms
* File uploads

## Performance Tasks

Also load:

* PERFORMANCE.md

Examples:

* Rendering optimization
* Bundle size reduction
* React performance
* Next.js performance
* Core Web Vitals

## Code Reviews

Also load:

* CODE_REVIEW.md

## Documentation Tasks

Also load:

* DOCUMENTATION_AGENT.md

## Required Behavior

* Prefer minimal, maintainable changes
* Follow project architecture
* Include tests when behavior changes
* Consider accessibility for all UI changes
* Consider security for user-facing features
* Mark uncertain items as:

REVIEW REQUIRED
