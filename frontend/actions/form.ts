"use server";

import { FormFieldName } from "@/components/order-summary-form";
import { siteConfig } from "@/config/site";
import { orderSummaryFormSchema } from "@/utils/schema";

async function sendEmail(params: Record<"subject" | "html", string>) {
  return await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_KEY}`,
    },
    body: JSON.stringify({
      ...params,
      from: "onboarding@resend.dev",
      to: siteConfig.email,
    }),
  });
}

const buyNow = async (
  prevState: {
    user: string | null;
    error: string | null;
  },
  formData: FormData
) => {
  try {
    const user = formData.get("user") as string;
    return { user, error: null };
  } catch (err: any) {
    return { user: null, error: err?.message || "Something Went Wrong!!" };
  }
};

const checkoutReport = async (
  prevState: {
    errors?: Partial<Record<FormFieldName, unknown>>;
    data?: Record<FormFieldName, string>;
  },
  formData: FormData
) => {
  try {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = orderSummaryFormSchema.safeParse(rawFormData);
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }
    const html = Object.entries(rawFormData)
      .map(([k, v]) => `<strong>${k}:&nbsp;</strong><span>${v}</span>`)
      .join("<br />");
    const response = await sendEmail({
      subject: "Order Request Summary",
      html,
    });
    const data = await response.json();
    return { data, success: true };
  } catch (e: any) {
    return {
      errors: {},
      success: false,
    };
  }
};

export { buyNow, checkoutReport };
