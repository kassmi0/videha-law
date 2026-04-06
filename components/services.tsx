import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/law-data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to your unique business and personal needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{service.shortDescription}</p>
                <div className="mt-4">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Learn More <span aria-hidden>&gt;</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="text-primary font-semibold hover:underline"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
