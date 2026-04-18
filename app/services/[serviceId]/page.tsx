import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/law-data/services';

export default function Services() {
  const visibleServices = services.slice(0, 6);

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to your unique business and personal needs
          </p>
        </div>

        {/* FIXED ALIGNMENT GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">

          {visibleServices.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col h-full overflow-hidden rounded-xl border-border/60 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative mx-4 mt-4 h-44 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>

              <CardHeader>
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>

              {/* FIX: equal spacing alignment */}
              <CardContent className="flex flex-col flex-1">
                <p className="text-foreground/70">
                  {service.shortDescription}
                </p>
              </CardContent>

            </Card>
          ))}

        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="text-primary font-semibold hover:underline">
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}