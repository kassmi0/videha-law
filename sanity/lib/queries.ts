import { groq } from 'next-sanity';

export const insightsListQuery = groq`
  *[_type == "article"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    category,
    _createdAt
  }
`;

export const insightBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    category,
    content,
    _createdAt
  }
`;
