import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { practiceAreas } from '@/lib/law-data/practice-areas';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, MapPin, Clock, Circle, ArrowUpRight, ArrowRight } from 'lucide-react';

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ practiceId: string }>;
}) {
  const { practiceId } = await params;
  const area = practiceAreas.find((p) => p.id === practiceId);

  if (!area) notFound();

  const relatedAreas = practiceAreas.filter((p) => p.id !== practiceId).slice(0, 3);

  // Parse fullDescription into sections based on blank lines and heading detection
  const parseSections = (text: string) => {
    const lines = text.split('\n');
    const sections: { heading: string | null; paragraphs: string[] }[] = [];
    let current: { heading: string | null; paragraphs: string[] } = { heading: null, paragraphs: [] };

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // A line is a heading if it's short (under 80 chars), doesn't end with a period,
      // and is not a numbered list item
      const isHeading =
        trimmed.length < 80 &&
        !trimmed.endsWith('.') &&
        !trimmed.endsWith(',') &&
        !/^\d+\./.test(trimmed) &&
        !/^[ivx]+\./i.test(trimmed) &&
        trimmed === trimmed.replace(/[.,:;]$/, '');

      // Only treat as heading if it looks like a section title (title case or all caps keywords)
      const looksLikeHeading =
        isHeading &&
        (trimmed === 'Overview' ||
          /^[A-Z]/.test(trimmed) && trimmed.split(' ').length <= 10);

      if (looksLikeHeading && current.paragraphs.length > 0) {
        sections.push(current);
        current = { heading: trimmed, paragraphs: [] };
      } else if (looksLikeHeading && current.paragraphs.length === 0) {
        current.heading = trimmed;
      } else {
        current.paragraphs.push(trimmed);
      }
    }

    if (current.paragraphs.length > 0 || current.heading) {
      sections.push(current);
    }

    return sections;
  };

  const sections = parseSections(area.fullDescription);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* BREADCRUMB */}
          <nav className="mb-6 text-sm flex items-center gap-1">
            <Link href="/practice-areas" className="text-primary hover:underline">
              Our Expertise
            </Link>
            <span className="text-foreground/40">/</span>
            <span className="text-foreground/60">{area.title}</span>
          </nav>

          {/* BADGE */}
          <div className="mb-3">
            <span className="text-xs font-semibold tracking-widest uppercase border border-primary text-primary px-3 py-1 rounded-sm">
              Expertise
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            {area.title}
          </h1>

          {/* SHORT DESCRIPTION */}
          <p className="text-foreground/70 text-lg max-w-2xl mb-5">
            {area.shortDescription}
          </p>

          {/* META BAR */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/60 mb-10">
            <span className="flex items-center gap-1.5">
              <ArrowRight className="w-2 h-2 fill-500 text-500" />
              Available for consultation
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Updated March 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Kathmandu, Nepal
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card className="bg-card/80 border-border/60">
                <CardContent className="p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-6">
                    Overview
                  </p>

                  <div className="flex flex-col gap-5">
                    {sections.map((section, i) => (
                      <div key={i}>
                        {section.heading && section.heading !== 'Overview' && (
                          <h2 className="font-bold text-foreground text-lg mb-2">
                            {section.heading}
                          </h2>
                        )}
                        {section.paragraphs.map((para, j) => (
                          <p key={j} className="text-foreground/80 leading-relaxed mb-3 last:mb-0">
                            {para}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* KEY AREAS OF FOCUS */}
                  {area.keyPoints && area.keyPoints.length > 0 && (
                    <div className="mt-8 border border-border/50 rounded-lg p-5 bg-background/40">
                      <p className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-4">
                        Key Areas of Focus
                      </p>
                      <ul className="flex flex-col gap-2.5">
                        {area.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <BadgeCheck className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* DISCLAIMER */}
                  <div className="mt-8 border border-red-400/30 rounded-lg bg-red-400/5 p-4">
                    <p className="text-sm text-red-400 leading-relaxed">
                      <span className="font-semibold">Disclaimer:</span> The information on this page is for general informational purposes only and does not constitute legal advice or create an attorney-client relationship. Consult our legal professionals for advice specific to your situation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-4">
                {/* RELATED PRACTICE AREAS */}
                {relatedAreas.length > 0 && (
                  <div className="bg-card/70 border border-border/50 rounded-lg p-5">
                    <p className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-4">
                      Related Expertise
                    </p>
                    <div className="flex flex-col gap-1">
                      {relatedAreas.map((related) => (
                        <Link
                          key={related.id}
                          href={`/practice-areas/${related.id}`}
                          className="flex items-center justify-between py-2 text-sm text-primary hover:underline group"
                        >
                          {related.title}
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}