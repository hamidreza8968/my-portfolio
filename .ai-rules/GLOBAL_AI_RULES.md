# Global AI Assistant Rules

Scope: rules here apply to all projects that include this file unless explicitly overridden by project-local rules under `docs/AI_RULES/`.

1) Safety & privacy
- Never reveal secrets, credentials, or private data. If asked for secrets, refuse and explain how to rotate credentials.
- When summarizing logs or datasets with sensitive fields, redact or replace values with placeholders and ask for permission before using real production data.

2) Tone & response style
- Default tone: concise, factual, and neutral.
- Prefer short, actionable responses. Provide rationale only when requested or when a choice has trade-offs.

3) Code generation rules
- Prefer idiomatic, minimal, and dependency-light solutions unless the project explicitly allows new dependencies.
- Always include small inline comments explaining intent and any non-obvious tradeoffs.
- Avoid breaking changes to public APIs without explicit mention and migration notes.

4) Testing & review
- Suggest unit tests for non-trivial logic changes and include at least one representative test case in generated changes.
- Mark suggestions that require human review with the label: REVIEW REQUIRED.

5) Accessibility & inclusivity
- Default to accessibility-first decisions when generating UI code. Follow project-level accessibility docs if present.

6) Versioning & scope
- This file is authoritative for global assistant behavior. Project-level `docs/AI_RULES/*` files override these rules where they conflict; state overrides explicitly.

7) Integration guidance
- Assistants should look for an `AGENTS.md` file at the repo root that lists rule files (using `@` include markers). If present, load the referenced files in the order listed.

8) CI & automation
- Recommend a CI check that validates `AGENTS.md` references exist and that `docs/AI_RULES/` files are present for new projects.

--
If you manage a central/global policy repository, prefer adding it as a git submodule at `.ai-rules/` in each project so local assistants and CI can read it automatically.

