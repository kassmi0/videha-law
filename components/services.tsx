import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/law-data/services';

export default function Services() {
  const visibleServices = services.slice(0, 6);

  return (
    <section id="services" className="py-24 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading (CENTERED) */}
        <div className="mb-20 max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#58081F] mb-4">
            Our Services
          </h2>
          <p className="text-[#2E2E2E]/70 text-lg">
            Strategic legal solutions designed to support your business and protect your interests.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT FEATURED */}
          <div className="lg:col-span-2">
            {visibleServices[0] && (
              <div className="group relative h-full min-h-[320px] rounded-2xl overflow-hidden">

                <Image
                  src={visibleServices[0].image}
                  alt={visibleServices[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {visibleServices[0].title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 max-w-md">
                    {visibleServices[0].shortDescription}
                  </p>
                </div>

              </div>
            )}
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-6">

            {visibleServices.slice(1, 3).map((service) => (
              <Card
                key={service.title}
                className="group flex flex-col flex-1 overflow-hidden rounded-xl border border-[#58081F]/10 bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <CardTitle className="text-base font-semibold text-[#58081F] mb-2 line-clamp-2">
                    {service.title}
                  </CardTitle>

                  <p className="text-sm text-[#2E2E2E]/70 flex-1 line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </Card>
            ))}

          </div>

        </div>

        {/* LOWER GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {visibleServices.slice(3).map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden rounded-xl border border-[#58081F]/10 bg-white hover:shadow-lg transition"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4">
                <CardTitle className="text-sm font-semibold text-[#58081F] mb-1 line-clamp-2">
                  {service.title}
                </CardTitle>
                <p className="text-xs text-[#2E2E2E]/70 line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA (CENTERED) */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="text-[#58081F] font-semibold underline underline-offset-4"
          >
            View All Services →
          </Link>
        </div>

      </div>
    </section>
  );
}