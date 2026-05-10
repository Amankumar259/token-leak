export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/db/server";

import { sendAuditEmail } from "@/lib/email/sendAuditEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await supabaseServer
      .from("leads")
      .insert({
        email: body.email,
        company_name: body.companyName,
        role: body.role,
        audit_id: body.auditId,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    await sendAuditEmail(body.email, body.savings);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to capture lead",
      },
      { status: 500 },
    );
  }
}
