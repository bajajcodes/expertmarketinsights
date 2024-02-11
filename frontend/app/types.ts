export enum ImageKeys {
  HEADER = "HEADER",
  INTRODUCTION1 = "INTRODUCTION1",
  INTRODUCTION2 = "INTRODUCTION2",
  BANNER1 = "BANNER1",
  BANNER2 = "BANNER2",
  BANNER3 = "BANNER3",
}

export interface Category {
  id: string;
  attributes: {
    name: string;
    value: string;
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

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type ReportMetaDataAttributes = {
  reportTitle: string;
  reportCode: string;
  numberOfPages: number;
  reportId: number;
};

export interface ReportMetaData {
  id: string;
  attributes: ReportMetaDataAttributes;
}

export interface Report extends ReportMetaData {
  publishedDate: string;
  summary: string;
  toc: string;
  methodology: string;
  faqs: FAQ[];
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
}
