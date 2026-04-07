'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
          Where Integrity Meets Impact
        </h1>
        
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Premier legal services for corporate, commercial, and intellectual property matters. 
          Your trusted partner in navigating complex legal challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="#consultation">Book Consultation</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/services">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
