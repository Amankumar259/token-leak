interface ResultsPageProps {
  params: {
    id: string;
  };
}

export default function ResultsPage({ params }: ResultsPageProps) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Audit Results</h1>

        <p className="text-muted-foreground">Report ID: {params.id}</p>
      </div>
    </main>
  );
}
