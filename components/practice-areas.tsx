import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { practiceAreas } from '@/lib/law-data/practice-areas';

export default function PracticeAreas() {
  const visiblePracticeAreas = practiceAreas.slice(0, 6);

  return (
    <section className="py-24 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading (CENTERED) */}
        <div className="mb-20 max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#58081F] mb-4">
            Practice Areas
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT FEATURED */}
          <div className="lg:col-span-2 h-full">
            {visiblePracticeAreas[0] && (
              <div className="group relative h-full min-h-[300px] rounded-2xl overflow-hidden">

                <Image
                  src={visiblePracticeAreas[0].image}
                  alt={visiblePracticeAreas[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {visiblePracticeAreas[0].title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 max-w-md">
                    {visiblePracticeAreas[0].shortDescription}
                  </p>
                  <Link
                    href={`/practice-areas/${visiblePracticeAreas[0].id}`}
                    className="text-sm font-semibold underline underline-offset-4"
                  >
                    Explore Area →
                  </Link>
                </div>

              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 h-full">

            {visiblePracticeAreas.slice(1, 3).map((area) => (
              <Card
                key={area.title}
                className="group flex flex-col flex-1 overflow-hidden rounded-xl border border-[#58081F]/10 bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <CardTitle className="text-base font-semibold text-[#58081F] mb-2 line-clamp-2">
                    {area.title}
                  </CardTitle>

                  <p className="text-sm text-[#2E2E2E]/70 flex-1 line-clamp-3">
                    {area.shortDescription}
                  </p>

                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="text-sm font-semibold text-[#58081F] mt-3"
                  >
                    Explore →
                  </Link>
                </div>
              </Card>
            ))}

          </div>
        </div>

        {/* LOWER GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {visiblePracticeAreas.slice(3).map((area) => (
            <Card
              key={area.title}
              className="group overflow-hidden rounded-xl border border-[#58081F]/10 bg-white hover:shadow-lg transition"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4">
                <CardTitle className="text-sm font-semibold text-[#58081F] mb-1 line-clamp-2">
                  {area.title}
                </CardTitle>

                <p className="text-xs text-[#2E2E2E]/70 line-clamp-3">
                  {area.shortDescription}
                </p>

                <Link
                  href={`/practice-areas/${area.id}`}
                  className="text-sm font-semibold text-[#58081F] mt-3"
                >
                  Explore →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA (CENTERED) */}
        <div className="mt-16 text-center">
          <Link
            href="/practice-areas"
            className="text-[#58081F] font-semibold underline underline-offset-4"
          >
            View More →
          </Link>
        </div>

      </div>
    </section>
  );
}