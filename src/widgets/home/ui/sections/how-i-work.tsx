import { SecHead } from "@widgets/home/ui/components";

export function HowIWork() {
  return (
    <div className="shell">
      <SecHead title="How I work" />

      <div className="approach-copy">
        <p>Product-first: instrument the funnel, find what moves revenue, build that.</p>
        <p>AI-native workflow: agentic tools wired into the codebase (Claude Code, Codex, MCP), agent-readable docs and specs, evals on every LLM feature.</p>
      </div>
    </div>
  );
}
