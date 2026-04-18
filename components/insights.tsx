import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';

const articles = [
  {
    title: 'Understanding Foreign Direct Investment Regulations',
    author: 'Videha Law and Associates',
    date: 'March 15, 2025',
    excerpt: 'A comprehensive guide to navigating FDI regulations and compliance requirements in today\'s global market.',
    category: 'Investment',
  },
  {
    title: 'Corporate Governance Best Practices',
    author: 'Videha Law and Associates',
    date: 'April 10, 2025',
    excerpt: 'Essential governance practices to ensure compliance, transparency, and long-term organizational success.',
    category: 'Governance',
  },
  {
    title: 'Intellectual Property Protection Strategies',
    author: 'Videha Law and Associates',
    date: 'january 5, 2024',
    excerpt: 'Effective strategies for protecting your intellectual property in an increasingly digital world.',
    category: 'IP Law',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Insights & Publications
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Expert analysis and thought leadership on key legal and business topics
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {article.category}
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-foreground/70 mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-foreground/60">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
