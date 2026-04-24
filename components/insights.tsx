import Link from 'next/link';
import { Calendar } from 'lucide-react';

import { allInsightArticles } from '@/lib/insights-data';

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-[#4E0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Insights & Publications
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert analysis and thought leadership on key legal and business topics
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {allInsightArticles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
            >
              {/* Category */}
              <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium mb-4 tracking-wide self-start">
                {article.category}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-white/90">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 line-clamp-2 overflow-hidden">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="shrink-0" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <span className="text-white/40 italic">By Videha Law & Associates</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 underline underline-offset-4 transition hover:text-white"
          >
            View all insights →
          </Link>
        </div>

      </div>
    </section>
  );
}