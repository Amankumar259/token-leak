import { AuditFormData } from "@/types/audit";
import { AuditResult } from "@/types/results";

import { analyzeTool } from "./recommendations";

export function runAudit(data: AuditFormData): AuditResult {
  const recommendations = data.tools.map(analyzeTool);

  const totalMonthlySavings = recommendations.reduce(
    (sum, rec) => sum + rec.monthlySavings,
    0,
  );

  return {
    totalMonthlySavings,
    totalYearlySavings: totalMonthlySavings * 12,
    recommendations,
  };
}
