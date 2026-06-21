# Code Review Guidelines (Agent)

Use these rules when acting as a code reviewer or suggesting code improvements.

1) Review approach
- Check: correctness, performance, maintainability, security, test coverage, accessibility.
- Be constructive; suggest improvements, not just problems.

2) Correctness checks
- Logic flows match intent; edge cases are handled.
- Null/undefined/error states are managed.
- Async/await or promises are correctly chained.

3) Performance considerations
- Detect N+1 queries, unnecessary renders, memory leaks.
- Suggest optimizations only if impact is measurable or code is on a critical path.

4) Security & privacy
- Secrets are not hardcoded; environment variables or secrets management is used.
- Dependent on project: OWASP Top 10, SQL injection, XSS, CSRF, auth flows.

5) Maintainability
- Code is readable and follows project naming/style conventions (reference CODING_STANDARDS.md).
- Complex logic is commented; functions have clear intent.

6) Test coverage
- Critical paths and edge cases have tests (reference TESTING_PHILOSOPHY.md).
- Tests are meaningful, not just snapshot tests.

7) Accessibility (if applicable)
- UI changes follow ACCESSIBILITY.md; interactive elements are keyboard-operable.

8) Comment format for reviews
- Use "Suggestion:", "Question:", "Note:", "SECURITY CONCERN:", "REVIEW REQUIRED" labels.
- Be specific; provide a small code example when suggesting a fix.

