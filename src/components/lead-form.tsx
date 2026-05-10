"use client";

import { useState } from "react";

interface LeadFormProps {
  auditId: string;
  savings: number;
}

export function LeadForm({ auditId, savings }: LeadFormProps) {
  const [email, setEmail] = useState("");

  const [companyName, setCompanyName] = useState("");

  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [website, setWebsite] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (website) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          companyName,
          role,
          auditId,
          savings,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="border rounded-2xl p-6 bg-white">
        <h2 className="text-2xl font-semibold">Audit Saved</h2>

        <p className="text-muted-foreground mt-2">
          A confirmation email has been sent.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-2xl p-6 bg-white space-y-4"
    >
      <div>
        <h2 className="text-2xl font-semibold">Save Your Report</h2>

        <p className="text-muted-foreground mt-2">
          Get your audit delivered by email.
        </p>
      </div>

      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        type="email"
        required
        placeholder="Email"
        className="w-full border rounded-lg p-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Company Name"
        className="w-full border rounded-lg p-3"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        className="w-full border rounded-lg p-3"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        {loading ? "Saving..." : "Save Report"}
      </button>
    </form>
  );
}
