"use server";

import { LeadGenerateType } from "@/types/schema";
import {
  LIST_CATEGORIES,
  LIST_CATEGORIES_SLUGS,
  LIST_CATEGORY_REPORTS,
  LIST_CATEGORY_REPORTS_META_DATA,
  LIST_REPORTS,
  LIST_REPORTS_BY_CATEGORY,
  LIST_REPORT_BY_ID,
} from "@/utils/queries";
import { newsLetterSchema, sendLeadSchema } from "@/utils/schema";
import { getPlaiceholder } from "plaiceholder";
import { Category, ImageKeys, Report, ReportMetaData } from "./types";

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

const getStrapiFetchParams = (
  QUERY: unknown,
  variables: Record<string, unknown> = {}
): RequestInit => ({
  method: "post",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
  body: JSON.stringify({
    query: QUERY,
    variables,
  }),
});

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

const getReports = async (): Promise<Array<ReportMetaData>> => {
  const fetchParams = getStrapiFetchParams(LIST_REPORTS);
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  return data.data.reports.data;
};

const getCategories = async (category?: string): Promise<Array<Category>> => {
  const fetchParams = getStrapiFetchParams(LIST_CATEGORIES, { category });
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  if (!data.data) throw Error(`${data.error.name}: ${data.error.message}`);
  //TODO: check if below syntax can be changed?
  return data.data.categories.data;
};

const getCategoryById = async (id: string): Promise<Category> => {
  const fetchParams = getStrapiFetchParams(LIST_CATEGORIES, { id });
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  //TODO: check if below syntax can be changed?
  return data.data.categories.data[0];
};

const getReportById = async (id: string): Promise<Report> => {
  const fetchParams = getStrapiFetchParams(LIST_REPORT_BY_ID, { id });
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  //TODO: check if below syntax can be changed?
  return data.data.report.data;
};

const getReportsByCategory = async (id: string): Promise<Array<Report>> => {
  const fetchParams = getStrapiFetchParams(LIST_REPORTS_BY_CATEGORY, { id });
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  //TODO: check if below syntax can be changed?
  return data.data.reports.data;
};

const getReportsMetaData = async (
  category?: string
): Promise<Array<ReportMetaData>> => {
  const fetchParams = getStrapiFetchParams(LIST_CATEGORY_REPORTS_META_DATA, {
    category,
  });
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  //TODO: change this to direct data if possible
  const reports = data.data.reports.data;
  return reports;
};

const getCategoryReports = async (
  id: string
): Promise<Array<ReportMetaData>> => {
  const fetchParams = getStrapiFetchParams(LIST_CATEGORY_REPORTS, {
    id,
  });
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  return data.data.categories.data[0].attributes.reports.data;
};

const getCategoriesSlugs = async (): Promise<
  Array<{ title: string; id: string }>
> => {
  const fetchParams = getStrapiFetchParams(LIST_CATEGORIES_SLUGS);
  const response = await fetch(
    `${process.env.STRAPI_API_BASE_URL}/graphql`,
    fetchParams
  );
  const data = await response.json();
  return data.data.categories.data.map((category: Category) => ({
    title: category.attributes.name,
    id: category.id,
  }));
};

export {
  getBlurImgData,
  getCategories,
  getCategoriesSlugs,
  getCategoryById,
  getCategoryReports,
  getImagesWithPlaceholders,
  getReportById,
  getReports,
  getReportsByCategory,
  getReportsMetaData,
  sendLeadForFreeCustomizedReport,
  subscribeToNewsLetter,
};
