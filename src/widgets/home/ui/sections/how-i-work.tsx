import { Reveal } from "@shared/ui/anim";
import { SecHead } from "@widgets/home/ui/components";

export function HowIWork() {
  return (
    <div className="shell">
      <SecHead
        num="01"
        kicker="Approach"
        title="How I work"
        meta={[<span className="num">Product first</span>, "Built to ship"]}
      />

      <div className="approach-copy">
        <Reveal delay={100}>
          <p>Product-first by default: instrument the funnel, find what moves revenue, build exactly that.</p>
        </Reveal>
        <Reveal delay={180}>
          <p>I build AI-native - agentic workflows with deep codebase integration (Claude Code, Codex, MCP), agent-readable docs and specs, evals on every LLM feature. The leverage that lets one engineer move like a team.</p>
        </Reveal>
      </div>
    </div>
  );
}
