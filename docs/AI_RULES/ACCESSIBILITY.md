# Accessibility Rules

Baseline: follow WCAG 2.1 AA where feasible.

1) Semantic markup
- Use semantic HTML (button, nav, main, header, footer) and avoid relying on ARIA when native elements suffice.

2) Keyboard
- All interactive components must be operable using keyboard only. Ensure focus styles are visible.

3) Labels & forms
- Every form control needs an accessible label (label element or aria-label). Provide clear error messages.

4) Contrast & visuals
- Text contrast target: 4.5:1 for normal text, 3:1 for large text. Use accessible color tokens.

5) Media
- Provide alt text for images and captions/transcripts for audio/video when applicable.

6) AI-specific guidance
- When AI proposes UI changes, include accessibility checks (semantic roles, focus order, aria attributes). Flag potential issues as "ACCESSIBILITY NOTE".

