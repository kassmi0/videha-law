import type { PortableTextBlock } from '@portabletext/types';

export type InsightListItem = {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  category?: string;
  _createdAt: string;
};

export type InsightArticle = InsightListItem & {
  content: PortableTextBlock[];
};
