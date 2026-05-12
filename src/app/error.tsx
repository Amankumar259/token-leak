"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;

  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-card rounded-3xl p-10 text-center max-w-xl space-y-6">
        <h1 className="text-4xl font-bold">Something Went Wrong</h1>

        <p className="text-gray-600 leading-7">
          An unexpected error occurred while processing your request.
        </p>

        <button
          onClick={reset}
          className="primary-button rounded-2xl bg-black px-6 py-4 text-white font-semibold"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
