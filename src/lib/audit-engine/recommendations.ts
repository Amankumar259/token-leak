import { ToolEntry } from "@/types/audit";
import { ToolRecommendation } from "@/types/results";

export function analyzeTool(tool: ToolEntry): ToolRecommendation {
  let optimizedSpend = tool.monthlySpend;
  let recommendedPlan = tool.plan;
  let reason = "Your current setup already appears optimized.";

  const toolName = tool.tool.toLowerCase();

  if (
    toolName.includes("cursor") &&
    tool.plan === "Business" &&
    tool.seats <= 5
  ) {
    optimizedSpend = tool.seats * 20;
    recommendedPlan = "Pro";

    reason = "Cursor Business may be excessive for smaller engineering teams.";
  }

  if (toolName.includes("chatgpt") && tool.plan === "Team" && tool.seats <= 3) {
    optimizedSpend = tool.seats * 20;
    recommendedPlan = "Plus";

    reason = "ChatGPT Team is often unnecessary for very small teams.";
  }

  if (toolName.includes("claude") && tool.monthlySpend > 100) {
    optimizedSpend = tool.monthlySpend * 0.7;

    recommendedPlan = "Claude Pro";

    reason = "Your Claude usage may be consolidated into lower-cost plans.";
  }

  const monthlySavings = tool.monthlySpend - optimizedSpend;

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
