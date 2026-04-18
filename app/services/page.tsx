import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/law-data/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Services
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to your needs
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col overflow-hidden rounded-xl border-border/60 bg-card/80 shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative mx-3 mt-3 h-40 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <CardHeader className="px-3 pt-3 pb-1">
                  <CardTitle className="text-base text-foreground leading-snug line-clamp-2 min-h-[2.8rem]">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                {/* Description */}
                <CardContent className="flex-1 px-3 pb-3 pt-0">
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </CardContent>

              </Card>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}