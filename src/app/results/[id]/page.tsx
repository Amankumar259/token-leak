import { supabaseServer } from "@/lib/db/server";

import { LeadForm } from "@/components/lead-form";

export const dynamic = "force-dynamic";

interface ResultsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { id } = await params;

  const { data: audit } = await supabaseServer
    .from("audits")
    .select("*")
    .eq("id", id)
    .single();

  if (!audit) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Audit not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="glass-card rounded-[2rem] p-10">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Optimization Opportunity Detected
            </div>

            <h1 className="text-6xl font-bold gradient-text">
              Monthly Savings
            </h1>

            <p className="text-7xl font-bold">
              ${audit.result.totalMonthlySavings.toFixed(0)}
            </p>

            <p className="text-gray-600 text-lg">
              Estimated monthly optimization opportunity
            </p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">AI Summary</h2>

          <p className="text-gray-700 leading-8 text-lg">{audit.ai_summary}</p>
        </div>

        <LeadForm
          auditId={audit.id}
          savings={audit.result.totalMonthlySavings}
        />

        {audit.result.recommendations.length === 0 ? (
          <div className="glass-card rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold">Great Setup</h2>

            <p className="mt-4 text-gray-600">
              Your current AI tooling stack already appears highly optimized.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {audit.result.recommendations.map((rec: any, index: number) => (
              <div key={index} className="glass-card rounded-3xl p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h2 className="text-3xl font-bold">{rec.tool}</h2>

                      <div className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                        Optimization Recommendation
                      </div>
                    </div>

                    <div className="space-y-2 text-lg">
                      <p>
                        <span className="font-semibold">Current Plan:</span>{" "}
                        {rec.currentPlan}
                      </p>

                      <p>
                        <span className="font-semibold">Recommended Plan:</span>{" "}
                        {rec.recommendedPlan}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-7 max-w-2xl">
                      {rec.reason}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-5xl font-bold">
                      ${rec.monthlySavings.toFixed(0)}
                    </p>

                    <p className="mt-2 text-gray-600">monthly savings</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
