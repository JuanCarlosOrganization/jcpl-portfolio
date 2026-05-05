import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isQualifiedLead } from "@/lib/content";

// Verified sender address. Requires clientgrowth.ca domain verified in Resend dashboard
const FROM_ADDRESS = "Client Growth <noreply@clientgrowth.ca>";
const OWNER_EMAIL = "juan@clientgrowth.ca";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData: Record<string, string> = await req.json();

    const {
      name = "",
      email = "",
      businessType = "",
      monthlyRevenue = "",
      leadSource = "",
      adBudget = "",
      businessName = "",
      businessWebsite = "",
      goal = "",
      timeline = "",
    } = formData;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const qualified = isQualifiedLead(formData);

    // ── 1. Internal notification to Juan ──────────────────────────────────
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: OWNER_EMAIL,
      subject: qualified
        ? `New qualified lead: ${name}. ${businessType}`
        : `New application (nurture): ${name}. ${businessType}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8" /></head>
        <body style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="margin:0 0 4px;color:${qualified ? "#16a34a" : "#2563eb"};">
            ${qualified ? "Qualified lead" : "New application (nurture)"}
          </h2>
          <p style="margin:0 0 24px;color:#6b7280;font-size:14px;">
            Submitted via clientgrowth.ca/apply
          </p>

          <table style="width:100%;border-collapse:collapse;">
            ${[
              ["Name", name],
              ["Email", `<a href="mailto:${email}" style="color:#2563eb;">${email}</a>`],
              ["Business type", businessType],
              ["Monthly revenue", monthlyRevenue],
              ["Lead source", leadSource],
              ["Ad budget", adBudget],
              ["Business name", businessName],
              ["Business website", businessWebsite || ","],
              ["90-day goal", goal],
              ["Timeline", timeline],
            ]
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#6b7280;background:#f9fafb;border:1px solid #e5e7eb;white-space:nowrap;width:40%;">${label}</td>
                <td style="padding:10px 12px;font-size:13px;color:#111827;border:1px solid #e5e7eb;">${value}</td>
              </tr>`
              )
              .join("")}
            <tr>
              <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#6b7280;background:#f9fafb;border:1px solid #e5e7eb;">Qualification</td>
              <td style="padding:10px 12px;font-size:13px;font-weight:700;color:${qualified ? "#16a34a" : "#dc2626"};border:1px solid #e5e7eb;">
                ${qualified ? "QUALIFIED" : "NURTURE"}
              </td>
            </tr>
          </table>

          <p style="margin:24px 0 0;padding:16px;background:${qualified ? "#f0fdf4" : "#fef2f2"};border-left:4px solid ${qualified ? "#16a34a" : "#dc2626"};font-size:14px;color:#1a1a1a;">
            ${
              qualified
                ? "Send them a Google Meet link within 24 hours."
                : "Does not meet qualification criteria. No immediate action required."
            }
          </p>
        </body>
        </html>
      `,
    });

    // ── 2. Confirmation email to the lead ─────────────────────────────────
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "Application received. Client Growth",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8" /></head>
        <body style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="margin:0 0 16px;">Application received.</h2>
          <p style="margin:0 0 16px;line-height:1.6;">Hi ${name},</p>
          <p style="margin:0 0 16px;line-height:1.6;">
            I personally review every application and will get back to you within 24 hours.
          </p>
          ${
            qualified
              ? `<p style="margin:0 0 16px;line-height:1.6;">
              Based on what you shared, the fit looks strong. If I agree after reviewing,
              I will send you a Google Meet link to set up a free 30-minute strategy call.
            </p>`
              : `<p style="margin:0 0 16px;line-height:1.6;">
              I will review your answers and be in touch shortly.
            </p>`
          }
          <p style="margin:0 0 4px;line-height:1.6;">Juan Carlos</p>
          <p style="margin:0;color:#6b7280;font-size:14px;">
            Client Growth |
            <a href="https://clientgrowth.ca" style="color:#2563eb;">clientgrowth.ca</a>
          </p>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[apply/route] Resend error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
