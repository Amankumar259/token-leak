import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">
          SpendPilot
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/audit">Audit</Link>
        </div>
      </div>
    </nav>
  );
}
