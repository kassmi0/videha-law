'use client';

import { Building2, Scale, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">

          {/* Left side - Image with blue overlay */}
          <div className="relative h-96 md:h-auto rounded-l-lg overflow-hidden">

            {/* Background image - replace src with your own image */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Videha Law Office"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Blue overlay — same look as your screenshot */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(1, 51, 103, 0.70)' }} />


            {/* Text content */}
            <div className="absolute inset-0 flex flex-col p-8 md:p-12 z-10">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                  About the Firm
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Videha Law and Associates
                </h2>
                <div className="w-16 h-1 bg-accent mb-6" />
                <p className="text-white/90 text-lg">
                  We combine legal excellence with unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Content and features */}
          <div className="bg-background/50 p-8 md:p-12 flex flex-col justify-between rounded-r-lg">
            <div>
              <p className="text-foreground text-base leading-relaxed mb-6">
                Videha Law and Associates stands as a premier corporate law firm in Nepal, built on a foundation of deep industry insight, technical expertise, and an unwavering commitment to client success. We are dedicated to delivering sophisticated, strategic, and practical legal solutions to domestic and international clients navigating the complexities of the Nepalese market.
              </p>

              <p className="text-foreground text-base leading-relaxed mb-6">
                Whether advising multinational corporations on market entry or assisting local enterprises with corporate governance, our objective remains constant: to deliver excellence, ensure compliance, and foster long-term value.
              </p>

              <p className="text-foreground text-base leading-relaxed mb-10">
                We believe effective legal counsel is more than interpreting the law. It is about protecting visions, enabling opportunities, and providing a strategic advantage through proactive, business-minded guidance.
              </p>
{/* Feature Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
  <div className="bg-white p-6 rounded-lg text-center border border-border/50">
    <div className="text-accent mb-4 flex justify-center">
      <Building2 size={32} strokeWidth={1.5} />
    </div>
    <h3 className="font-bold text-foreground mb-2 text-sm">Market Entry</h3>
    <p className="text-foreground/70 text-xs">
      Structuring, approvals, and compliance support.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg text-center border border-border/50">
    <div className="text-accent mb-4 flex justify-center">
      <Scale size={32} strokeWidth={1.5} />
    </div>
    <h3 className="font-bold text-foreground mb-2 text-sm">Governance</h3>
    <p className="text-foreground/70 text-xs">
      Board, shareholders, and ongoing advisory.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg text-center border border-border/50">
    <div className="text-accent mb-4 flex justify-center">
      <Globe size={32} strokeWidth={1.5} />
    </div>
    <h3 className="font-bold text-foreground mb-2 text-sm">Cross-Border</h3>
    <p className="text-foreground/70 text-xs">
      Local insight aligned with global standards.
    </p>
  </div>
</div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('consultation');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}