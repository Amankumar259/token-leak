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
      <div className="glass-card rounded-3xl p-8">
        <h2 className="text-3xl font-bold">Audit Saved</h2>

        <p className="mt-4 text-gray-600 leading-7">
          Your audit report has been successfully saved and a confirmation email
          has been sent to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-3xl p-8 space-y-5"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Save Your Report</h2>

        <p className="text-gray-600 leading-7">
          Get your audit delivered by email and keep access to your optimization
          report anytime.
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
        placeholder="Email Address"
        className="w-full rounded-xl border border-gray-200 bg-white/70 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Company Name"
        className="w-full rounded-xl border border-gray-200 bg-white/70 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Your Role"
        className="w-full rounded-xl border border-gray-200 bg-white/70 p-4 outline-none focus:ring-2 focus:ring-indigo-500"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button
        disabled={loading}
        className="primary-button w-full rounded-2xl bg-black py-4 font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Saving Report..." : "Save Report"}
      </button>
    </form>
  );
}
