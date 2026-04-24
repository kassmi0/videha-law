'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">

        {/* UPDATED GRID RATIO */}
        <div className="grid md:grid-cols-[40%_60%] gap-0 items-stretch">

          {/* LEFT SIDE - IMAGE (narrower + taller) */}
          <div className="relative min-h-[500px] md:min-h-[650px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Videha Law Office"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-3">
              Videha Law & Associates
            </h2>

            <p className="uppercase tracking-widest text-gray-500 text-sm mb-6">
              Law Firm in Nepal
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a vision to deliver exceptional legal services, Videha Law & Associates has grown into a trusted corporate and commercial law firm in Nepal. Our team brings deep industry knowledge and strategic insight to every case.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              We assist multinational corporations and local enterprises in navigating legal complexities, ensuring compliance, and unlocking long-term value through practical and forward-thinking legal solutions.
            </p>

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
    </section>
  );
}