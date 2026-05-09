"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { ToolCard } from "@/components/tool-card";

import { AuditFormData, ToolEntry } from "@/types/audit";

import { runAudit } from "@/lib/audit-engine/runAudit";

import { useAuditStore } from "@/store/audit-store";

const defaultTool: ToolEntry = {
  id: uuidv4(),
  tool: "",
  plan: "",
  monthlySpend: 0,
  seats: 1,
};

export default function AuditPage() {
  const router = useRouter();

  const setResult = useAuditStore((state) => state.setResult);

  const [formData, setFormData] = useState<AuditFormData>({
    teamSize: 1,
    useCase: "coding",
    tools: [defaultTool],
  });

  useEffect(() => {
    const saved = localStorage.getItem("audit-form");

    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("audit-form", JSON.stringify(formData));
  }, [formData]);

  const handleToolChange = (
    id: string,
    field: keyof ToolEntry,
    value: string | number,
  ) => {
    setFormData((prev) => ({
      ...prev,

      tools: prev.tools.map((tool) =>
        tool.id === id
          ? {
              ...tool,
              [field]: value,
            }
          : tool,
      ),
    }));
  };

  const addTool = () => {
    setFormData((prev) => ({
      ...prev,

      tools: [
        ...prev.tools,
        {
          id: uuidv4(),
          tool: "",
          plan: "",
          monthlySpend: 0,
          seats: 1,
        },
      ],
    }));
  };

  const removeTool = (id: string) => {
    setFormData((prev) => ({
      ...prev,

      tools: prev.tools.filter((tool) => tool.id !== id),
    }));
  };

  const generateAudit = async () => {
    try {
      const response = await fetch("/api/audits", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setResult(data.result);

      router.push(`/results/${data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">AI Spend Audit</h1>

          <p className="text-muted-foreground">
            Analyze and optimize your AI tool spending.
          </p>
        </div>

        <div className="border rounded-2xl p-6 space-y-6 bg-white">
          <div>
            <label className="block mb-2 font-medium">Team Size</label>

            <input
              type="number"
              className="w-full border rounded-lg p-2"
              value={formData.teamSize}
              onChange={(e) =>
                setFormData({
                  ...formData,

                  teamSize: Number(e.target.value),
                })
              }
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Primary Use Case</label>

            <select
              className="w-full border rounded-lg p-2"
              value={formData.useCase}
              onChange={(e) =>
                setFormData({
                  ...formData,

                  useCase: e.target.value as any,
                })
              }
            >
              <option value="coding">Coding</option>

              <option value="writing">Writing</option>

              <option value="research">Research</option>

              <option value="data">Data</option>

              <option value="mixed">Mixed</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {formData.tools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onChange={handleToolChange}
              onRemove={removeTool}
            />
          ))}
        </div>

        <button
          onClick={addTool}
          className="border px-6 py-3 rounded-xl bg-white"
        >
          Add Tool
        </button>

        <button
          onClick={generateAudit}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold"
        >
          Generate Audit
        </button>
      </div>
    </main>
  );
}
