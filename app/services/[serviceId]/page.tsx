import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/law-data/services';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/services"
              className="text-primary hover:underline inline-flex items-center"
            >
              ← Back to Services
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {service.title}
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mb-10">
            {service.shortDescription}
          </p>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Card className="bg-card/80 border-border/60">
                <CardContent className="p-6">
                  <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
                    {service.fullDescription}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Key Highlights
              </h2>
              <div className="space-y-3">
                {service.keyPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 bg-card/70 border border-border/50 rounded-lg p-4"
                  >
                    <BadgeCheck className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

