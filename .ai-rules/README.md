# .ai-rules — Central AI assistant rules (local copy)

This directory contains a local copy of global AI assistant rules. You can:

- Keep this local copy in each repo (easy, but requires manual updates).
- Or replace this directory with a git submodule that points to a central `ai-assistant-rules` repository:

  ```bash
  # from project root — replace URL with your central rules repo
  git submodule add https://github.com/YOURUSER/ai-assistant-rules.git .ai-rules
  git submodule update --init --recursive
  ```

AGENTS.md references `.ai-rules/GLOBAL_AI_RULES.md` so assistants and automation can load these rules automatically. If you prefer a remote source, update `AGENTS.md` to point at a raw URL instead.

