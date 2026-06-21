# Testing Philosophy

1) Pyramid
- Unit tests (fast, isolated) are the foundation. Integration tests validate interactions. End-to-end tests cover critical flows.

2) Goals
- Tests verify behavior, prevent regressions, and document assumptions.

3) Best practices
- Keep unit tests deterministic and fast. Avoid network, DB or flaky timers in unit tests; mock external interactions.
- Use fixtures and factories for reproducible test data.

4) CI
- All PRs must pass unit and integration suites before merge. E2E may run nightly or on release branches.

5) AI-specific guidance
- When AI suggests tests, ensure they are meaningful, not just snapshotting output. Add edge cases and failure-mode tests.

