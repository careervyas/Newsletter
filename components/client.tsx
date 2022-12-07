import sanityClient from '@sanity/client'

const client= sanityClient({
  projectId: 'l7pn9uh6',
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
});


export default client;
