import { describe, it, expect } from "vitest";

import { analyzeTool } from "./recommendations";

describe("recommendation engine", () => {
  it("optimizes small cursor business teams", () => {
    const result = analyzeTool({
      id: "1",

      tool: "Cursor",

      plan: "Business",

      monthlySpend: 100,

      seats: 2,
    });

    expect(result.recommendedPlan).toBe("Pro");

    expect(result.monthlySavings).toBeGreaterThan(0);
  });

  it("does not create negative savings", () => {
    const result = analyzeTool({
      id: "2",

      tool: "ChatGPT",

      plan: "Plus",

      monthlySpend: 20,

      seats: 1,
    });

    expect(result.monthlySavings).toBeGreaterThanOrEqual(0);
  });
});
