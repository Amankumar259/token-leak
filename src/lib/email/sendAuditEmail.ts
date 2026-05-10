import { resend } from "./resend";

export async function sendAuditEmail(email: string, savings: number) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",

      to: email,

      subject: "Your AI Spend Audit is Ready",

      html: `
        <div style="font-family:sans-serif;line-height:1.6">
          <h1>AI Spend Audit Complete</h1>

          <p>
            We identified approximately
            <strong>$${savings}</strong>
            in monthly optimization opportunities.
          </p>

          <p>
            Your audit report has been generated successfully.
          </p>

          <p>
            Thanks for trying TokenLeak.
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error(error);
  }
}
