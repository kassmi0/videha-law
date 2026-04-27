import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { practiceAreas } from '@/lib/law-data/practice-areas';

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Expertise
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
             
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <Card
                key={area.id}
                className="overflow-hidden rounded-xl border-border/60 bg-card/80 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative mx-4 mt-4 h-44 overflow-hidden rounded-lg sm:h-52 lg:h-56">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-[#58081F]">{area.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-foreground/70">{area.shortDescription}</p>

                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
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