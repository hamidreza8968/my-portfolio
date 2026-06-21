# Custom Agents Registry & Template

This file explains how to add and use specialized AI agents for this project.

## What is an agent?

An agent is a specialized AI assistant preconfigured with a set of rules for a specific task or role. Examples:
- **Code Review Agent**: reviews PRs and suggests improvements.
- **Documentation Agent**: writes/updates docs consistently.
- **Performance Agent**: focuses on optimization and benchmarking.
- **Security Agent**: audits code for vulnerabilities.

## How to add a new agent

1) Create a new `.md` file in `docs/AI_RULES/` named after the agent role, e.g., `SECURITY_AGENT.md`.
2) Include sections: purpose, scope, key checks/guidelines, comment format, and any tool/metric recommendations.
3) Add a reference in `AGENTS.md` under a "Custom Agents" section (see below).
4) When invoking the agent, paste the prompt starter or pass the file as a system message.

## Template for a new agent file

```markdown
# [Agent Name] Guidelines

Purpose: [one-line goal]
Scope: [when to use this agent]

1) Core task
- [guideline 1]
- [guideline 2]

2) Checks & validation
- [check 1]
- [check 2]

3) Output format
- Use labels: "Finding:", "Suggestion:", "CRITICAL:" etc.
- [other formatting rules]

4) Edge cases
- [scenario 1 and how to handle]
- [scenario 2 and how to handle]
```

## Available agents in this project

See `AGENTS.md` for the full registry. Load agents via:

```bash
# Example: invoke Code Review Agent
# Paste this at the start of a review session:
Please load and follow: docs/AI_RULES/CODE_REVIEW.md
Then perform a thorough code review constrained by those rules.
```

## Subagent delegation (if using a platform with custom agent support)

If your AI platform supports custom subagents (e.g., via `run_subagent`):

```
# Example (pseudocode):
run_subagent(agentName="CodeReviewAgent", task="Review PR #42 changes for bugs and style issues")
```

The platform automatically loads `docs/AI_RULES/CODE_REVIEW.md` and applies it.

## CI/automation agents

You can also create GitHub Actions workflows that emulate agent behavior:
- `.github/workflows/security-audit.yml` — runs security checks nightly.
- `.github/workflows/performance-benchmark.yml` — tracks metrics over time.

See `.github/workflows/ci.yml` for an example.

