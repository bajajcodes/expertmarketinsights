"use server";

import { LeadGenerateType } from "@/types/schema";
import {
  LIST_CATEGORIES,
  LIST_CATEGORIES_SLUGS,
  LIST_CATEGORY_REPORTS_META_DATA,
} from "@/utils/queries";
import { newsLetterSchema, sendLeadSchema } from "@/utils/schema";
import { getPlaiceholder } from "plaiceholder";
import { Category, ImageKeys, ReportMetaData } from "./types";

const generateHtml = (formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());
  const { name, email, mobile, message } = rawFormData;

  return `<p>
      <strong>Name</strong>:&nbsp;<span>${name}</span> <br />
      <strong>Email</strong>:&nbsp;<span>${email}</span> <br />
      <strong>Mobile</strong>:&nbsp;<span>${mobile}</span> <br />
      <strong>Message</strong>:&nbsp;<span>${message}</span> <br />
    </p>`;
};

async function sendLeadForFreeCustomizedReport(
  prevState: LeadGenerateType,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = sendLeadSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const html = generateHtml(formData);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "shmbajaj32@gmail.com",
        subject: "Query For Free Customized Report",
        html,
      }),
    });
    const data = await response.json();
    return { ...data, success: true };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message ?? "Something Went Wrong",
      errors: {},
    };
  }
}

async function subscribeToNewsLetter(
  prevState: LeadGenerateType,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = newsLetterSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "shmbajaj32@gmail.com",
        subject: "News Letter Subscription",
        html: `<p><strong>Email:&nbsp;</strong><span>${rawFormData?.email}</span></p>`,
      }),
    });
    const data = await response.json();
    return { ...data, success: true };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message ?? "Something Went Wrong",
      errors: {},
    };
  }
}

async function getBlurImgData(source: string) {
  const data = await fetch(source);
  const arrayBuffer = await data.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const {
    metadata: { width, height },
    ...placeholder
  } = await getPlaiceholder(buffer, {
    size: 10,
  });
  return {
    ...placeholder,
    img: { src: source, width, height },
  };
}

const getImagesWithPlaceholders = async (
  sources: Array<{
    source: string;
    key: ImageKeys;
  }>
) => {
  const imagesWithPlaceholders = await Promise.all(
    sources.map(async ({ key, source }) => {
      const { base64, img } = await getBlurImgData(source);
      return {
        key,
        base64,
        img,
      };
    })
  );
  const initialAcc: Partial<Record<ImageKeys, { base64: string; img: any }>> =
    {};
  return imagesWithPlaceholders.reduce(
    (acc, { key, base64, img }) => ({
      ...acc,
      [key]: { base64, img },
    }),
    initialAcc
  );
};

const getCategories = async (category?: string): Promise<Array<Category>> => {
  const fetchParams: RequestInit = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: LIST_CATEGORIES,
      variables: {
        category,
      },
    }),
  };
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  //TODO: check if below syntax can be changed?
  return data.data.categories.data;
};

const getReportsMetaData = async (
  category?: string
): Promise<Array<ReportMetaData>> => {
  //TODO: create a reusable function
  const fetchParams: RequestInit = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: LIST_CATEGORY_REPORTS_META_DATA,
      variables: {
        category,
      },
    }),
  };
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  //TODO: change this to direct data if possible
  const reports = data.data.reports.data;
  return reports;
};

const getCategoriesSlugs = async (): Promise<Array<string>> => {
  const fetchParams: RequestInit = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: LIST_CATEGORIES_SLUGS,
    }),
  };
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  return data.data.categories.data.map(
    (item: Record<string, any>) => item.attributes.slug
  );
};

export {
  getBlurImgData,
  getCategories,
  getCategoriesSlugs,
  getImagesWithPlaceholders,
  getReportsMetaData,
  sendLeadForFreeCustomizedReport,
  subscribeToNewsLetter,
};
