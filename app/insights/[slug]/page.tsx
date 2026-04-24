import { notFound } from 'next/navigation';
import Link from 'next/link';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { insightArticles } from '@/lib/insights-data';

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = insightArticles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#4E0F1A] text-white">
      <Header />
      <article className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/insights"
            className="mb-8 inline-block text-sm text-white/70 transition hover:text-white"
          >
            ← Back to Insights
          </Link>

          <p className="mb-2 text-xs uppercase tracking-wide text-white/60">{article.category}</p>
          <h1 className="mb-2 text-3xl font-bold">{article.title}</h1>
          <p className="mb-6 text-white/70">{article.subtitle}</p>
          <p className="mb-10 text-sm text-white/50">{formatDate(article.publishedAt)}</p>

          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-3 text-2xl font-semibold">{section.heading}</h2>
                <div className="space-y-3 text-white/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {article.faqs && article.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>
              <div className="space-y-4">
                {article.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="mb-2 font-medium">{faq.question}</h3>
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <Footer />
    </main>
  );
}
