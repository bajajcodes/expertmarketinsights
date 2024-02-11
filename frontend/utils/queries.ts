const LIST_CATEGORIES = `
query LIST_CATEGORY($category: String){
  categories(filters: {slug: {eq: $category}}){
    data {
      id
      attributes {
        name
        image {
          data {
            id
            attributes {
              name
              url
              previewUrl
            }
          }
        }
        slug
      }
    }
  }
}
`;

const LIST_CATEGORIES_SLUGS = `
query LIST_CATEGORIES_SLUGS{
  categories{
    data {
      attributes {
        name
      }
    }
  }
}
`;

//TODO: check if name from directing to slug route can be used?
const LIST_CATEGORY_REPORTS_META_DATA = `
query Reports($category: String!) {
  reports(filters: {category: {slug: {eq : $category}}}){
    data{
      id
      attributes {
        reportTitle
        reportCode
        reportId
        numberOfPages
      }
    }
  }
}`;

export {
  LIST_CATEGORIES,
  LIST_CATEGORIES_SLUGS,
  LIST_CATEGORY_REPORTS_META_DATA,
};
