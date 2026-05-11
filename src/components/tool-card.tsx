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
    <div className="glass-card rounded-3xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Tool Configuration</h2>

        <button
          onClick={() => onRemove(tool.id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          Remove
        </button>
      </div>

      <input
        className="w-full rounded-xl border border-gray-200 bg-white/70 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Tool Name"
        value={tool.tool}
        onChange={(e) => onChange(tool.id, "tool", e.target.value)}
      />

      <input
        className="w-full rounded-xl border border-gray-200 bg-white/70 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Plan"
        value={tool.plan}
        onChange={(e) => onChange(tool.id, "plan", e.target.value)}
      />

      <input
        type="number"
        className="w-full rounded-xl border border-gray-200 bg-white/70 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Monthly Spend"
        value={tool.monthlySpend}
        onChange={(e) =>
          onChange(tool.id, "monthlySpend", Number(e.target.value))
        }
      />

      <input
        type="number"
        className="w-full rounded-xl border border-gray-200 bg-white/70 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Seats"
        value={tool.seats}
        onChange={(e) => onChange(tool.id, "seats", Number(e.target.value))}
      />
    </div>
  );
}
