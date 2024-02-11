const LIST_CATEGORIES = `
query LIST_CATEGORY($category: String){
  categories(filters: {value: {eq: $category}}){
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
        value
      }
    }
  }
}
`;

//TODO: check if name from directing to slug route can be used?
const LIST_CATEGORY_REPORTS_META_DATA = `
query LIST_CATEGORY_REPORTS($category: String!){
  categories(filters: {value:{eq: $category}}){
    data {
      attributes {
        name
        reports {
          data {
            id
            attributes {
              reportId
              reportCode
              reportTitle
              numberOfPages
            }
          }
        }
      }
    }
  }
}`;

export { LIST_CATEGORIES, LIST_CATEGORY_REPORTS_META_DATA };
