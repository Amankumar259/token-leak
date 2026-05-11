import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/20 bg-white/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          SpendPilot
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>

          <Link href="/audit" className="hover:opacity-70 transition">
            Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
