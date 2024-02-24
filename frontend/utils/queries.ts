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
      id
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

const LIST_REPORTS = `
query LIST_REPORTS{
  reports {
    data {
      id 
      attributes {
        reportTitle
        reportCode
        numberOfPages
        reportId
      }
    }
  }
}
`;

const LIST_CATEGORY_REPORTS = `
query LIST_CATEGORY_REPORTS($id: ID){
  categories(filters: {id: {eq: $id}}){
    data {
      id
      attributes {
        reports {
          data {
            id 
            attributes {
              reportTitle
              reportCode
							reportId
							numberOfPages
            }
          }
        }
      }
    }
  }
}
`;

const LIST_CATEGORY = `
query LIST_CATEGORY($id: ID){
  categories(filters: {id: {eq: $id}}){
    data {
      id
      attributes{
        name
      }
    }
  }
}`;

export {
  LIST_CATEGORIES,
  LIST_CATEGORIES_SLUGS,
  LIST_CATEGORY,
  LIST_CATEGORY_REPORTS,
  LIST_CATEGORY_REPORTS_META_DATA,
  LIST_REPORTS,
};
