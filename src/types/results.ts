export interface ToolRecommendation {
  tool: string;
  currentPlan: string;
  recommendedPlan: string;
  currentSpend: number;
  optimizedSpend: number;
  monthlySavings: number;
  yearlySavings: number;
  reason: string;
}

export interface AuditResult {
  totalMonthlySavings: number;
  totalYearlySavings: number;
  recommendations: ToolRecommendation[];
}
