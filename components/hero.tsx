'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const heroImages = [
  '/images/hero-images/courtroom.png',
  '/images/hero-images/handshake.png',
  '/images/hero-images/law-books.png',
  '/images/hero-images/office.png'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        setFadeIn(true);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cycling background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${heroImages[currentIndex]})`,
          opacity: fadeIn ? 1 : 0,
        }}
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Where Integrity Meets Impact
        </h1>

        <p className="text-lg md:text-xl text-white/85 mb-8 max-w-3xl md:max-w-5xl mx-auto drop-shadow text-center">
  <span className="block md:whitespace-nowrap">
    Premier legal services for corporate, commercial, and intellectual property matters.
  </span>
  <span className="block md:whitespace-nowrap mt-2">
    Your trusted partner in navigating complex legal challenges.
  </span>
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg" className="border-white text-shadow hover:bg-white hover:text-black">
            <a href="/services">Learn More</a>
          </Button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-white w-6' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}