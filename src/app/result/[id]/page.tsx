"use client";

import { useAuditStore } from "@/store/audit-store";

export default function ResultsPage() {
  const result = useAuditStore((state) => state.result);

  if (!result) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>No audit data found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="border rounded-3xl p-8 bg-white">
          <h1 className="text-5xl font-bold">Monthly Savings</h1>

          <p className="text-6xl font-bold mt-4">
            ${result.totalMonthlySavings.toFixed(0)}
          </p>

          <p className="text-muted-foreground mt-2">
            Estimated monthly optimization opportunity
          </p>
        </div>

        <div className="grid gap-6">
          {result.recommendations.map((rec, index) => (
            <div key={index} className="border rounded-2xl p-6 bg-white">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{rec.tool}</h2>

                  <p>Current Plan: {rec.currentPlan}</p>

                  <p>Recommended Plan: {rec.recommendedPlan}</p>

                  <p className="text-muted-foreground">{rec.reason}</p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold">
                    ${rec.monthlySavings.toFixed(0)}
                  </p>

                  <p className="text-muted-foreground">monthly savings</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
