"use client";

import { ToolEntry } from "@/types/audit";

interface ToolCardProps {
  tool: ToolEntry;
  onChange: (
    id: string,
    field: keyof ToolEntry,
    value: string | number,
  ) => void;
  onRemove: (id: string) => void;
}

export function ToolCard({ tool, onChange, onRemove }: ToolCardProps) {
  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Tool Configuration</h2>

        <button
          onClick={() => onRemove(tool.id)}
          className="text-red-500 text-sm"
        >
          Remove
        </button>
      </div>

      <input
        className="w-full border rounded-lg p-2"
        placeholder="Tool Name"
        value={tool.tool}
        onChange={(e) => onChange(tool.id, "tool", e.target.value)}
      />

      <input
        className="w-full border rounded-lg p-2"
        placeholder="Plan"
        value={tool.plan}
        onChange={(e) => onChange(tool.id, "plan", e.target.value)}
      />

      <input
        type="number"
        className="w-full border rounded-lg p-2"
        placeholder="Monthly Spend"
        value={tool.monthlySpend}
        onChange={(e) =>
          onChange(tool.id, "monthlySpend", Number(e.target.value))
        }
      />

      <input
        type="number"
        className="w-full border rounded-lg p-2"
        placeholder="Seats"
        value={tool.seats}
        onChange={(e) => onChange(tool.id, "seats", Number(e.target.value))}
      />
    </div>
  );
}
