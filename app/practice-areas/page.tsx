import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { practiceAreas } from '@/lib/law-data/practice-areas';

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Practice Areas
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Deep expertise across key sectors and complex matters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {practiceAreas.map((area) => (
              <Card
                key={area.id}
                className="bg-card/80 border-border/60 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {area.title}
                  </CardTitle>
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

