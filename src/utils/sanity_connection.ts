import Client from "@sanity/client";

export default Client({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.REACT_APP_SANITY_VERSION,
});
