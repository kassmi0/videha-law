import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { practiceAreas } from '@/lib/law-data/practice-areas';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ practiceId: string }>;
}) {
  const { practiceId } = await params;
  const area = practiceAreas.find((p) => p.id === practiceId);

  if (!area) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6">
            <Link
              href="/practice-areas"
              className="text-primary hover:underline inline-flex items-center"
            >
              ← Back to Practice Areas
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            {area.title}
          </h1>

          <p className="text-foreground/70 text-lg max-w-2xl mb-8">
            {area.shortDescription}
          </p>

          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">
              <Card className="bg-card/80 border-border/60">
                <CardContent className="p-6">

                  <div className="text-foreground/80 leading-relaxed">

                    {area.fullDescription.split('\n').map((line, i) => {
                      const trimmed = line.trim();

                      if (!trimmed) return null;

                      const isHeading =
                        trimmed === 'Overview' ||
                        area.keyPoints.some((point) => trimmed === point);

                      return isHeading ? (
                        <p
                          key={i}
                          className="font-bold text-foreground text-lg mt-5 mb-2"
                        >
                          {trimmed}
                        </p>
                      ) : (
                        <p key={i} className="mb-3">
                          {line}
                        </p>
                      );
                    })}

                  </div>

                  {/* DISCLAIMER */}
                  <div className="mt-8 pt-6 border-t border-border/40">
                    <p className="text-sm text-blue-400 leading-relaxed">
                      Disclaimer: The information provided on this page is for general informational purposes only and does not constitute legal advice or create an attorney-client relationship. Please consult our legal professionals for advice specific to your situation.
                    </p>
                  </div>

                </CardContent>
              </Card>
            </div>

            {/* RIGHT: FIXED STICKY (ONLY CHANGE HERE) */}
            <div className="lg:col-span-1 flex">
              <div className="sticky top-24 self-start w-full bg-card/70 border border-border/50 rounded-lg p-6">

                <h2 className="text-xl font-bold text-primary mb-3">
                  Discuss This Practice Area
                </h2>

                <p className="text-sm text-foreground/70 mb-5">
                  Speak with our team about how this practice area applies to your situation and the options available to you.
                </p>

                <div className="flex flex-col gap-3">

                  <Link
                    href="/#consultation"
                    className="px-5 py-2 rounded-md bg-primary text-white hover:opacity-90 transition text-center"
                  >
                    Book Consultation
                  </Link>

                  <Link
                    href="/#consultation"
                    className="px-5 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition text-center"
                  >
                    Contact Us
                  </Link>

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