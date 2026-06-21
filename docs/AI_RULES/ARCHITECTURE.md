# Architecture Guidelines

1) High-level boundaries
- Define clear module/service boundaries. Prefer explicit interfaces for cross-boundary communication.

2) Data ownership
- Each data model should have a single owning module or service clearly documented.

3) Scalability
- Prefer stateless components for request handling; use managed storage for stateful needs.

4) Security
- Apply principle of least privilege. Prefer short-lived credentials and environment-based secrets.

5) AI-specific guidance
- When AI proposes architectural changes, require a short risk assessment (migration strategy, backward compatibility, cost implications).

