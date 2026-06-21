# Documentation Agent Guidelines

Use these rules when writing, updating, or suggesting documentation.

1) Structure
- Start with a one-line summary of what the doc covers.
- Use clear headings (H2, H3) to break content into scannable sections.
- End with "See also" or "Next steps" when applicable.

2) Audience
- Assume reader is new to the component/module but familiar with the tech stack (Next.js, React, TypeScript).
- Use short sentences and active voice.

3) Examples
- Include at least one working code example for every non-trivial concept.
- Examples should be minimal and runnable (copy-paste friendly).

4) Style
- Use backticks for code, filenames, and symbols.
- Use `bash` fenced blocks for terminal commands.
- Use `tsx` / `ts` fenced blocks for code examples.

5) Links
- Link to internal docs (relative paths: `./ARCHITECTURE.md`).
- Link to external references (full URLs): `https://...`.

6) Maintenance
- Mark sections that may date or need periodic review with a `<!-- TODO: review by [date] -->` comment.
- Include last-updated date for significant docs.

7) API documentation
- For functions/components, document params, return values, and side effects clearly.
- Use JSDoc or TypeScript inline comments; auto-generate docs when possible.

