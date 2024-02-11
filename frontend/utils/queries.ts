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

const LIST_CATEGORY_REPORTS = `
query LIST_CATEGORY_REPORTS($category: String!){
  categories(filters: {value:{eq: $category}}){
    data {
      attributes {
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

export { LIST_CATEGORIES, LIST_CATEGORY_REPORTS };
