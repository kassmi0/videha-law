import { createClient } from '@sanity/client';

import { apiVersion, dataset, projectId } from '../env';

if (!projectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to .env.local to enable Sanity content fetching.',
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
