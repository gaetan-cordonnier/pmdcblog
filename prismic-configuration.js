import Prismic from "prismic-javascript";
const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const client = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

// Link resolution rules
export const linkResolver = (doc) => {
  if (doc.type === "post") {
    return `/blog/${doc.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === "post") {
    return `/post?uid=${doc.uid}`;
  }
  return "/";
};
