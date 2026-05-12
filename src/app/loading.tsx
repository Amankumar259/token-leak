export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="glass-card rounded-3xl p-10 text-center space-y-4">
        <div className="h-12 w-12 mx-auto rounded-full border-4 border-gray-200 border-t-black animate-spin" />

        <h2 className="text-2xl font-bold">Loading</h2>

        <p className="text-gray-600">Preparing your experience...</p>
      </div>
    </main>
  );
}
