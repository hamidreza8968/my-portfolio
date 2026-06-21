# Coding Standards

Purpose: language- and repo-specific coding conventions used by humans and AI assistants working on this project.

1) Formatter & linters
- Use the project's formatter and linters (Prettier, ESLint, rustfmt, gofmt, etc.). Run them before committing.

2) Style
- Prefer clear, descriptive names. Avoid abbreviations unless well-known.
- Use camelCase for variables, PascalCase for types/classes (adjust per language).

3) Dependencies
- Do not introduce new runtime dependencies without an explicit review. Prefer built-in APIs or small, well-maintained libraries.

4) Comments & docs
- Public functions/types must have a one-line description. Add short examples for non-trivial APIs.
- Inline comments should explain "why" not "what".

5) Error handling
- Be explicit with errors. Do not swallow exceptions silently.

6) Tests
- Each public API should have at least one unit test.
- Critical user flows require E2E coverage.
- Test behavior, not implementation details.

7) AI-specific guidance
- When an AI assistant suggests code, prefer minimal diffs and include a short rationale. Mark anything requiring human review with "REVIEW REQUIRED".

