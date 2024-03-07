export enum ReportBuyingUser {
  SingleUser = "singleuser",
  MultiUser = "multiuser",
  EnterpriseUser = "enterpriseuser",
}

export enum ReportBuyingUserLabel {
  singleuser = "Single User",
  multiuser = "Multi User",
  enterpriseuser = "Enterprise User",
}

export enum ImageKeys {
  HEADER = "HEADER",
  INTRODUCTION1 = "INTRODUCTION1",
  INTRODUCTION2 = "INTRODUCTION2",
  BANNER1 = "BANNER1",
  BANNER2 = "BANNER2",
  BANNER3 = "BANNER3",
}

export enum RequestInfoValue {
  RequestSample = "sample",
  RequestDiscount = "discount",
  PreOrderEnquiry = "enquiry",
  RequestBulkReport = "bulk-report",
}

export enum RequestInfoLabel {
  RequestSample = "Request Sample",
  RequestDiscount = "Request Discount",
  PreOrderEnquiry = "Pre Order Enquiry",
  RequestBulkReport = "Request Bulk Report",
}

export interface CategoryMetadata {
  id: string;
  attributes: {
    name: string;
  };
}

export interface Category {
  id: string;
  attributes: {
    name: string;
    slug: string;
    image: {
      data: {
        attributes: {
          name: string;
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Price = {
  id: string;
  user: ReportBuyingUser;
  price: number;
};

export type ReportMetaDataAttributes = {
  reportTitle: string;
  reportCode: string;
  numberOfPages: number;
  reportId: number;
  publishedDate: string;
  category: {
    data: CategoryMetadata;
  };
  buyingOptions: Price[];
};

export interface ReportMetaData {
  id: string;
  attributes: ReportMetaDataAttributes;
}

export interface Report extends ReportMetaData {
  attributes: ReportMetaDataAttributes & {
    summary: string;
    toc: string;
    methodology: string;
    faqs: FAQ[];
    publishedAt: string;
    updatedAt: string;
    createdAt: string;
  };
}
