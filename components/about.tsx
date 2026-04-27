'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="relative min-h-[460px] overflow-hidden rounded-3xl border border-primary/15 shadow-xl shadow-primary/10 lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Videha Law Office"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-white/10 p-5 text-white backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Our Promise</p>
              <p className="mt-2 text-lg font-semibold leading-snug">
                Clear legal advice, strategic execution, and long-term client partnerships.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/15 bg-card p-8 shadow-xl shadow-primary/5 sm:p-10 lg:col-span-7">
            <p className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              About Videha Law & Associates
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
              A modern legal team built for complex matters.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-foreground/75">
            Videha Law and Associates is a Kathmandu-based law firm dedicated to delivering sharp, practical legal solutions for businesses operating in Nepal. With expertise spanning corporate law, commercial transactions, regulatory compliance, and dispute resolution, our team brings clarity to complex legal challenges. We measure our success not by the complexity of the work, but by the confidence our clients gain from working with us.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-primary/15 bg-background/70 p-4">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="mt-1 text-sm text-foreground/65">Practice specialties</p>
              </div>
              <div className="rounded-xl border border-primary/15 bg-background/70 p-4">
                <p className="text-2xl font-bold text-primary">100+</p>
                <p className="mt-1 text-sm text-foreground/65">Client matters handled</p>
              </div>
              <div className="rounded-xl border border-primary/15 bg-background/70 p-4">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="mt-1 text-sm text-foreground/65">Responsive support</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const element = document.getElementById('consultation');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Consultation
              </button>
              <Link
                href="/practice-areas"
                className="rounded-lg border border-primary/30 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Explore Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}