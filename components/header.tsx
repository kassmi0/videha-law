'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { practiceAreas } from '@/lib/law-data/practice-areas';
import { services } from '@/lib/law-data/services';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-foreground">
              Kasmita
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-white/90 hover:text-white transition-colors"
            >
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white/90 hover:text-white transition-colors">
                  Practice Areas
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#013366] text-white border-white/10 w-72">
                {practiceAreas.map((area) => (
                  <DropdownMenuItem asChild key={area.id} className="text-white/90 focus:text-white">
                    <Link href={`/practice-areas/${area.id}`}>{area.title}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem asChild className="text-white/90 focus:text-white">
                  <Link href="/practice-areas">View All Practice Areas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white/90 hover:text-white transition-colors">
                  Services
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#013366] text-white border-white/10 w-72">
                {services.map((service) => (
                  <DropdownMenuItem asChild key={service.id} className="text-white/90 focus:text-white">
                    <Link href={`/services/${service.id}`}>{service.title}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem asChild className="text-white/90 focus:text-white">
                  <Link href="/services">View All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/#insights"
              className="text-white/90 hover:text-white transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/#consultation"
              className="text-white/90 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="default">
              <a href="/#consultation">Book Consultation</a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/#about" className="text-white/90 hover:text-white transition-colors">
              About
            </Link>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold text-white/90">Practice Areas</div>
              {practiceAreas.map((area) => (
                <Link
                  key={area.id}
                  href={`/practice-areas/${area.id}`}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {area.title}
                </Link>
              ))}
              <Link href="/practice-areas" className="text-white/90 hover:text-white transition-colors">
                View All Practice Areas
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold text-white/90">Services</div>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {service.title}
                </Link>
              ))}
              <Link href="/services" className="text-white/90 hover:text-white transition-colors">
                View All Services
              </Link>
            </div>
            <Link href="/#insights" className="text-white/90 hover:text-white transition-colors">
              Insights
            </Link>
            <Link href="/#consultation" className="text-white/90 hover:text-white transition-colors">
              Contact
            </Link>
            <Button asChild variant="default" className="w-full">
              <a href="/#consultation">Book Consultation</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
