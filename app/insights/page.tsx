import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { allInsightArticles } from '@/lib/insights-data';

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#4E0F1A]">
      <Header />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-4xl font-bold text-white">Legal Insights</h1>
            <p className="text-white/70">Expert guidance on legal and regulatory topics.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {allInsightArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="flex flex-col h-full rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white self-start">
                  {article.category}
                </div>
                <h2 className="mb-2 text-xl font-semibold text-white">{article.title}</h2>
                <p className="text-sm text-white/70 flex-1 line-clamp-2.5">{article.excerpt}</p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} className="shrink-0" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <span className="text-white/40 italic">By Videha Law & Associates</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}