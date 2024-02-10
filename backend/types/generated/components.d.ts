import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    question: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    answer: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq': FaqFaq;
    }
  }
}
