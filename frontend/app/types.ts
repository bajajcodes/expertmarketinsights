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
