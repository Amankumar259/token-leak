import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <section className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              AI Infrastructure Cost Optimization
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight tracking-tight md:text-7xl">
                Reduce Your
                <span className="gradient-text"> AI Spend</span>
                <br />
                Without Losing Productivity
              </h1>

              <p className="max-w-2xl text-xl leading-8 text-gray-600">
                SpendPilot audits your AI tooling stack and identifies
                unnecessary costs across ChatGPT, Cursor, Claude, Gemini,
                Copilot, and more.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/audit"
                className="primary-button inline-flex items-center justify-center rounded-2xl bg-black px-8 py-5 text-lg font-semibold text-white"
              >
                Start Free Audit
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white/60 px-8 py-5 text-lg font-semibold backdrop-blur"
              >
                Learn More
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-500">
              <div>✓ AI-generated summaries</div>
              <div>✓ Instant savings insights</div>
              <div>✓ Shareable reports</div>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Monthly Optimization Opportunity
                  </p>

                  <h2 className="mt-2 text-6xl font-bold">$420</h2>
                </div>

                <div className="rounded-2xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  +32% Savings
                </div>
              </div>

              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Cursor</h3>

                      <p className="text-gray-600">Business → Pro</p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold">$120</p>

                      <p className="text-sm text-gray-500">savings</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">ChatGPT</h3>

                      <p className="text-gray-600">Team → Plus</p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold">$90</p>

                      <p className="text-sm text-gray-500">savings</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Gemini</h3>

                      <p className="text-gray-600">Ultra → Pro</p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold">$210</p>

                      <p className="text-sm text-gray-500">savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-32 grid gap-8 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-8 space-y-4">
            <div className="text-4xl">⚡</div>

            <h3 className="text-2xl font-bold">Instant Audits</h3>

            <p className="leading-7 text-gray-600">
              Generate AI infrastructure audits in seconds with optimization
              recommendations tailored to your tooling stack.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-4">
            <div className="text-4xl">🤖</div>

            <h3 className="text-2xl font-bold">AI Summaries</h3>

            <p className="leading-7 text-gray-600">
              Receive AI-generated summaries explaining where your organization
              can reduce unnecessary spend.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-4">
            <div className="text-4xl">📊</div>

            <h3 className="text-2xl font-bold">Savings Insights</h3>

            <p className="leading-7 text-gray-600">
              Identify waste across ChatGPT, Claude, Gemini, Cursor, Copilot,
              and other AI platforms.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
