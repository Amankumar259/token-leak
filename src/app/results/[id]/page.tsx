interface ResultsPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getAudit(id: string) {
  const response = await fetch(`http://localhost:3000/api/audits/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { id } = await params;

  const audit = await getAudit(id);

  if (!audit) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Audit not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="border rounded-3xl p-8 bg-white">
          <h1 className="text-5xl font-bold">Monthly Savings</h1>

          <p className="text-6xl font-bold mt-4">
            ${audit.result.totalMonthlySavings.toFixed(0)}
          </p>

          <p className="text-muted-foreground mt-2">
            Estimated monthly optimization opportunity
          </p>
        </div>

        <div className="border rounded-2xl p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-4">AI Summary</h2>

          <p className="text-muted-foreground leading-7">{audit.ai_summary}</p>
        </div>

        <div className="grid gap-6">
          {audit.result.recommendations.map((rec: any, index: number) => (
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
