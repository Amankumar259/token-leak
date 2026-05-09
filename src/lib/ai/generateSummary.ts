import { geminiModel } from "./gemini";

import { AuditResult } from "@/types/results";

export async function generateSummary(result: AuditResult) {
  try {
    const prompt = `
You are an AI infrastructure cost optimization assistant.

Generate a concise 100-word summary for this audit result.

Monthly savings:
$${result.totalMonthlySavings}

Yearly savings:
$${result.totalYearlySavings}

Recommendations:
${result.recommendations.map((r) => `- ${r.tool}: ${r.reason}`).join("\n")}

Tone:
Professional, concise, founder-friendly.
`;

    const response = await geminiModel.generateContent(prompt);

    return response.response.text();
  } catch (error) {
    console.error(error);

    return `
Your AI tooling stack shows approximately $${result.totalMonthlySavings} in monthly optimization opportunities through better plan selection and tool consolidation.
`;
  }
}
