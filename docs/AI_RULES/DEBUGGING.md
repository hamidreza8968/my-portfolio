# Debugging Rules

1) Logging
- Use structured, consistent logs. Include request_id or trace_id where applicable. Never log secrets.

2) Reproduction
- Always include minimal reproduction steps and sample inputs in bug reports.

3) Investigation order
- Check recent changes, run targeted tests, inspect logs/metrics, then reproduce locally with a minimal case.

4) AI-specific guidance
- When an AI assistant diagnoses an issue, require it to list assumptions and provide a minimal reproduction test or steps. Mark uncertain fixes with "REVIEW REQUIRED".

