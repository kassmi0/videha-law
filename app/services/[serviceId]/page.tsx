import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { services } from '@/lib/law-data/services';

export default function ServiceDetailPage({
  params,
}: {
  params: { serviceId: string };
}) {
  const service = services.find((s) => s.id === params.serviceId);

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/services" className="text-sm font-semibold text-primary hover:underline">
              ← View all services
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h1>
              <p className="mt-4 text-foreground/80 leading-relaxed">{service.fullDescription}</p>

              {service.keyPoints?.length ? (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Key services</h2>
                  <ul className="space-y-3">
                    {service.keyPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-foreground/80">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-xl border border-border/60 bg-card/80 shadow-sm overflow-hidden">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-foreground/70 leading-relaxed">{service.shortDescription}</p>
                  <div className="mt-4">
                    <Link href="/#consultation" className="text-sm font-semibold text-primary hover:underline">
                      Book a consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}