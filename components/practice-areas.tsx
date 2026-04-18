import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { practiceAreas } from '@/lib/law-data/practice-areas';

export default function PracticeAreas() {
  const visiblePracticeAreas = practiceAreas.slice(0, 6);

  return (
    <section id="practice-areas" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Deep expertise across key sectors and complex matters
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">

          {visiblePracticeAreas.map((area) => (
            <Card
              key={area.title}
              className="flex flex-col h-full overflow-hidden rounded-xl border-border/60 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative mx-4 mt-4 h-44 overflow-hidden rounded-lg">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>

              {/* ✅ HEADER FIXED (icon removed + spacing tightened) */}
              <CardHeader className="min-h-[72px] flex flex-col justify-center">
                <CardTitle className="text-lg text-foreground leading-snug">
                  {area.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 pt-0">
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {area.shortDescription}
                </p>

                <div className="mt-auto pt-5">
                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Learn More <span>&gt;</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}

        </div>

        <div className="text-center mt-12">
          <Link href="/practice-areas" className="text-primary font-semibold hover:underline">
            View All Practice Areas
          </Link>
        </div>

      </div>
    </section>
  );
}