import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: fjgciggk,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token:
    sk2cXrwhk8zK0bWzbzQqzX0Z9PhDFH8szKfKypv2w8JWCh7J7zURsCeZtJEiwhXeRqdQ2GFynE4ODT4jTTREcnOfrf2gvhnMhCbx7ORruagSMiAEEBRkymRS8YSQZtxMKXOBTbJIShP0eaqHhYZBKEVhotuNOaATDuZHrPDznYXIuAnO7Q2q,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
