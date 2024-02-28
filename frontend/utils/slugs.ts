import slugify from "slugify";

const getIdFromSlug = (slug: string) => slug.split("-").pop();

const getSlug = (title: string, id: string) => {
  const urlSlug = slugify(`${title}-${id}`, {
    lower: true,
    trim: true,
  });
  return encodeURI(urlSlug);
};

export { getIdFromSlug, getSlug };
