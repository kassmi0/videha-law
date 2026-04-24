import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/lib/law-data/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
              Our Services
            </h1>
            <p className="text-foreground/70 text-base max-w-xl mx-auto">
              Comprehensive legal solutions tailored to your needs
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {services.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col h-full rounded-lg border-border/60 bg-card/80 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative mx-2 mt-2 h-40 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  
                  {/* Title */}
                  <CardHeader className="px-4 pt-3 pb-1">
                    <CardTitle className="text-base font-semibold text-[#58081F] leading-snug min-h-[48px] flex items-center justify-center text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  {/* Description */}
                  <CardContent className="px-4 pb-4 pt-0">
                    <p className="text-sm text-foreground/70 leading-relaxed text-center">
                      {service.shortDescription}
                    </p>
                  </CardContent>

                </div>
              </Card>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}