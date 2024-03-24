const LIST_CATEGORIES = `
query LIST_CATEGORY($category: String){
  categories(filters: {slug: {eq: $category}}, pagination: {pageSize: 100}){
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
  categories(pagination: {pageSize: 100}){
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
        publishedDate
        summary
        toc
        methodology
        faqs {
          id
          question
          answer
        }
      }
    }
  }
}
`;

const LIST_REPORTS_META_DATA = `
query LIST_REPORTS($search: String){
  reports(sort: "publishedAt:desc", pagination: {pageSize: 100}, filters: {reportTitle: {containsi: $search}}) {
    data {
      id 
      attributes {
        reportTitle
        reportCode
        numberOfPages
        reportId
        publishedDate
        category{
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

const LIST_CATEGORY_REPORTS = `
query LIST_CATEGORY_REPORTS($id: ID!){
  reports(sort: "publishedAt:desc", filters: {category: {id: {eq: $id}}}, pagination: {pageSize: 100} ){
    data { 
      id
            attributes {
              reportTitle
              reportCode
							reportId
							numberOfPages
              publishedDate
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

const LIST_REPORT = `
query LIST_REPORT($id : ID!){
  reports(filters:{id:{eq: $id}}) {
    data {
      id 
      attributes {
        reportTitle
        reportCode
        numberOfPages
        reportId
        publishedDate
        summary
        toc
        methodology
        faqs {
          id
          question
          answer
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

const LIST_REPORTS_BY_CATEGORY = `
query LIST_REPORTS_BY_CATEGORY($id : ID!){
  reports(filters:{category: {id:{eq: $id}}}) {
    data {
      id 
      attributes {
        reportTitle
      }
    }
  }
}
`;

const LIST_REPORT_BY_ID = `
query LIST_REPORT_BY_ID($id: ID!){
  report(id: $id) {
    data {
      id
      attributes {
        reportTitle
        reportCode
        numberOfPages
        reportId
        publishedDate
        summary
        toc
        methodology
        faqs {
          id
          question
          answer
        }
        buyingOptions {
          id
          user
          price
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

const LIST_REPORT_FOR_CHECKOUT_BY_ID = `
query LIST_REPORT_BY_ID($id: ID!){
  report(id: $id) {
    data {
      id
      attributes {
        reportTitle
        reportCode
        reportId
        buyingOptions {
          id
          user
          price
        }
      }
    }
  }
} `;

const LIST_CATEGORY_BY_REPORT_ID = `
query LIST_CATEGORY_BY_REPORT_ID($id: ID!){
  report(id: $id){
    data {
      id
      attributes {
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

const LIST_CATEGORY_NAME = `
query LIST_CATEGORY_NAME($id: ID){
  categories(filters: {id: {eq: $id}}){
    data {
      id
      attributes{
        name
      }
    }
  }
}
`;

export {
  LIST_CATEGORIES,
  LIST_CATEGORIES_SLUGS,
  LIST_CATEGORY,
  LIST_CATEGORY_BY_REPORT_ID,
  LIST_CATEGORY_NAME,
  LIST_CATEGORY_REPORTS,
  LIST_CATEGORY_REPORTS_META_DATA,
  LIST_REPORT,
  LIST_REPORTS,
  LIST_REPORTS_BY_CATEGORY,
  LIST_REPORTS_META_DATA,
  LIST_REPORT_BY_ID,
  LIST_REPORT_FOR_CHECKOUT_BY_ID,
};
