import { ToolEntry } from "@/types/audit";

import { ToolRecommendation } from "@/types/results";

export function analyzeTool(tool: ToolEntry): ToolRecommendation {
  let optimizedSpend = tool.monthlySpend;

  let recommendedPlan = tool.plan;

  let reason = "Your current setup already appears optimized.";

  const toolName = tool.tool.toLowerCase();

  /*
   Cursor Optimization
  */
  if (
    toolName.includes("cursor") &&
    tool.plan === "Business" &&
    tool.seats <= 5
  ) {
    optimizedSpend = tool.seats * 20;

    recommendedPlan = "Pro";

    reason =
      "Cursor Business may be excessive for smaller engineering teams that don't require centralized admin features.";
  }

  /*
   ChatGPT Optimization
  */
  if (toolName.includes("chatgpt") && tool.plan === "Team" && tool.seats <= 3) {
    optimizedSpend = tool.seats * 20;

    recommendedPlan = "Plus";

    reason =
      "ChatGPT Team is often unnecessary for very small teams with light collaboration needs.";
  }

  /*
   Claude Optimization
  */
  if (toolName.includes("claude") && tool.monthlySpend > 100) {
    optimizedSpend = tool.monthlySpend * 0.7;

    recommendedPlan = "Claude Pro";

    reason =
      "Your Claude usage may be consolidated into lower-cost plans without major capability loss.";
  }

  /*
   GitHub Copilot Optimization
  */
  if (
    toolName.includes("copilot") &&
    tool.plan === "Business" &&
    tool.seats === 1
  ) {
    optimizedSpend = 10;

    recommendedPlan = "Individual";

    reason = "GitHub Copilot Business may be unnecessary for solo developers.";
  }

  /*
   Gemini Optimization
  */
  if (toolName.includes("gemini") && tool.plan === "Ultra" && tool.seats <= 2) {
    optimizedSpend = tool.seats * 20;

    recommendedPlan = "Pro";

    reason =
      "Gemini Ultra may be overpowered for smaller teams with standard AI workflows.";
  }

  /*
   OpenAI API Optimization
  */
  if (toolName.includes("openai") && tool.monthlySpend > 300) {
    optimizedSpend = tool.monthlySpend * 0.8;

    recommendedPlan = "API Usage Optimization";

    reason =
      "OpenAI API costs may be reduced through batching, caching, or model routing optimizations.";
  }

  /*
   Anthropic API Optimization
  */
  if (toolName.includes("anthropic") && tool.monthlySpend > 250) {
    optimizedSpend = tool.monthlySpend * 0.75;

    recommendedPlan = "Optimized API Usage";

    reason =
      "Anthropic API spending may benefit from lower-cost model routing and prompt optimization.";
  }

  /*
   Windsurf Optimization
  */
  if (
    toolName.includes("windsurf") &&
    tool.seats <= 2 &&
    tool.monthlySpend > 40
  ) {
    optimizedSpend = 20;

    recommendedPlan = "Lower Tier Plan";

    reason =
      "Smaller Windsurf teams may not require premium collaboration functionality.";
  }

  const monthlySavings = Math.max(0, tool.monthlySpend - optimizedSpend);

  return {
    tool: tool.tool,

    currentPlan: tool.plan,

    recommendedPlan,

    currentSpend: tool.monthlySpend,

    optimizedSpend,

    monthlySavings,

    yearlySavings: monthlySavings * 12,

    reason,
  };
}
