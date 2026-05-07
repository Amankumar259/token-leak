export type AIUseCase = "coding" | "writing" | "research" | "data" | "mixed";

export interface ToolEntry {
  id: string;
  tool: string;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditFormData {
  teamSize: number;
  useCase: AIUseCase;
  tools: ToolEntry[];
}
