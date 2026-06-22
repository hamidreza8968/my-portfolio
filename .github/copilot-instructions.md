# GitHub Copilot Instructions

This file provides GitHub Copilot with project-specific guidance. For the comprehensive AI rules registry, see [`AGENTS.md`](/AGENTS.md).

## Load Order & Priority

1. **Global Rules** (`.ai-rules/GLOBAL_AI_RULES.md`) — foundational AI guidance
2. **Core Project Rules** (`docs/AI_RULES/*`) — apply to every task:
   - `CODING_STANDARDS.md`
   - `TYPESCRIPT.md`
   - `FRONTEND_STANDARDS.md`
   - `ARCHITECTURE.md`
   - `TESTING_PHILOSOPHY.md`
   - `ACCESSIBILITY.md`
   - `DEBUGGING.md`
3. **Specialized Rules** — load only when task applies:
   - UI/Component changes → add `DESIGN_SYSTEM.md`
   - Security-sensitive → add `SECURITY_REVIEW.md`
   - Performance → add `PERFORMANCE.md`
   - Code review → add `CODE_REVIEW.md`
   - Documentation → add `DOCUMENTATION_AGENT.md`

**Conflict resolution**: Project rules override global rules; more specific rules override general rules.

## Core Requirements (Every Task)

- ✅ Follow TypeScript strict mode; match project conventions
- ✅ Write accessible, semantic HTML (WCAG AA baseline)
- ✅ Add tests for behavior changes (unit + integration as needed)
- ✅ Use project design tokens and component library
- ✅ Minimize changes; prefer maintainable solutions
- ✅ Respect Next.js App Router conventions and deprecation notices
- ⚠️ Mark uncertain or risky items: `REVIEW REQUIRED`

## Task-Specific Guidance

### When Adding/Modifying UI Components
Apply: `FRONTEND_STANDARDS.md`, `ACCESSIBILITY.md`, `DESIGN_SYSTEM.md`, `TESTING_PHILOSOPHY.md`

- Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Include ARIA labels/roles only when necessary
- Verify keyboard navigation and focus order
- Check color contrast (WCAG AA: 4.5:1 text, 3:1 graphics)
- Test with Playwright: render + keyboard + axe-core snapshots
- Add aria-alt / alt text for images

### When Writing TypeScript Code
Apply: `TYPESCRIPT.md`, `CODING_STANDARDS.md`, `ARCHITECTURE.md`

- Enable strict mode; avoid `any` without justification
- Use explicit return types for public functions
- Name files/exports clearly (PascalCase for components/classes, camelCase for functions)
- Keep functions single-responsibility
- Document complex logic with comments

### When Handling Security-Sensitive Features
Apply: `SECURITY_REVIEW.md`

Examples: authentication, authorization, user data, tokens, cookies, forms, file uploads, API endpoints.

- Do not expose secrets in code or logs
- Validate + sanitize user input
- Use parameterized queries or ORMs to prevent injection
- Add authentication/authorization checks
- Verify CORS and CSP constraints

### When Optimizing Performance
Apply: `PERFORMANCE.md`

Examples: rendering, bundle size, React/Next.js optimization, Core Web Vitals.

- Lazy-load heavy components; use `React.memo` / `useMemo` carefully
- Avoid N+1 queries; batch data fetches
- Profile before optimizing
- Check Next.js bundle analysis

### When Reviewing Code
Apply: `CODE_REVIEW.md`

- Check for correctness, edge cases, error handling
- Verify test coverage and meaningful assertions (not just snapshots)
- Ensure security and accessibility considerations
- Confirm performance implications
- Flag maintainability issues

### When Writing Documentation
Apply: `DOCUMENTATION_AGENT.md`

- Use clear headings and examples
- Include setup/testing steps
- Link related docs and components
- Keep docs near the code (README, JSDoc, Storybook)
- Update docs when behavior changes

## Required Markers

- `REVIEW REQUIRED` — item needs human judgment before merge
- `TODO` — incomplete or deferred work
- `DEPRECATED` — code approaching removal
- `NOTE` — important context for maintainers

## Useful References

- **Detailed rules**: [`AGENTS.md`](/AGENTS.md)
- **Next.js changes**: Read `node_modules/next/dist/docs/` before code generation
- **Design system**: `docs/AI_RULES/DESIGN_SYSTEM.md`
- **Testing strategy**: `docs/AI_RULES/TESTING_PHILOSOPHY.md`
- **Agent registry & templates**: `docs/AI_RULES/AGENTS_REGISTRY.md`

## Quick Commands

```bash
# Lint
npm run lint

# Build
npm run build

# Test
npx vitest --run

# Storybook
npm run storybook
```

## Summary

Prefer **minimal, maintainable changes**. Always apply core rules. Load specialized rules when relevant. Mark uncertain work as `REVIEW REQUIRED`. For full context, see [`AGENTS.md`](/AGENTS.md) and the `docs/AI_RULES/*.md` registry.

