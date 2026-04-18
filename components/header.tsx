'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const [showPractice, setShowPractice] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <Image
                src="/images/logo-videha.png"
                alt="Videha Law and Associates logo"
                width={200}
                height={200}
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain rounded-sm"
              />

              <div className="min-w-0 text-left">
                <p
                  className="truncate text-sm md:text-base font-bold leading-tight"
                  style={{ color: '#013367' }}
                >
                  Videha Law and Associates
                </p>
                <p
                  className="hidden lg:block truncate text-xs"
                  style={{ color: '#013367' }}
                >
                  Premier Corporate Law Firm in Nepal.
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">

            <Link href="/#about" className="hover:opacity-70" style={{ color: '#013367' }}>
              About
            </Link>

            {/* Practice Areas */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:opacity-70" style={{ color: '#013367' }}>
                  Practice Areas
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#013367] text-white border-white/10 w-72">
                {practiceAreas.map((area) => (
                  <DropdownMenuItem
                    asChild
                    key={area.id}
                    className="text-white/90 focus:text-white focus:bg-white/10"
                  >
                    <Link href={`/practice-areas/${area.id}`}>
                      {area.title}
                    </Link>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator className="bg-white/10" />

                <DropdownMenuItem asChild className="text-white/90 focus:text-white focus:bg-white/10">
                  <Link href="/practice-areas">View All Practice Areas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:opacity-70" style={{ color: '#013367' }}>
                  Services
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#013367] text-white border-white/10 w-72">
                {services.map((service) => (
                  <DropdownMenuItem
                    asChild
                    key={service.id}
                    className="text-white/90 focus:text-white focus:bg-white/10"
                  >
                    <Link href={`/services/${service.id}`}>
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator className="bg-white/10" />

                <DropdownMenuItem asChild className="text-white/90 focus:text-white focus:bg-white/10">
                  <Link href="/services">View All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/#insights" className="hover:opacity-70" style={{ color: '#013367' }}>
              Insights
            </Link>

            <Link href="/#consultation" className="hover:opacity-70" style={{ color: '#013367' }}>
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#013367' }}
            >
              <a href="/#consultation">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: '#013367' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU (CLEAN + COLLAPSIBLE) */}
        {isOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">

            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              style={{ color: '#013367' }}
            >
              About
            </Link>

            {/* PRACTICE AREAS */}
            <div className="flex flex-col">
              <button
                onClick={() => setShowPractice(!showPractice)}
                className="text-left font-normal"
                style={{ color: '#013367' }}
              >
                Practice Areas {showPractice ? '−' : ''}
              </button>

              {showPractice && (
                <div className="flex flex-col gap-2 mt-2 pl-3">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.id}
                      href={`/practice-areas/${area.id}`}
                      style={{ color: '#013367' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {area.title}
                    </Link>
                  ))}

                  <Link
                    href="/practice-areas"
                    style={{ color: '#013367' }}
                    onClick={() => setIsOpen(false)}
                  >
                    View All Practice Areas
                  </Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div className="flex flex-col">
              <button
                onClick={() => setShowServices(!showServices)}
                className="text-left font-normal"
                style={{ color: '#013367' }}
              >
                Services {showServices ? '−' : ''}
              </button>

              {showServices && (
                <div className="flex flex-col gap-2 mt-2 pl-3">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      style={{ color: '#013367' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}

                  <Link
                    href="/services"
                    style={{ color: '#013367' }}
                    onClick={() => setIsOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#insights"
              onClick={() => setIsOpen(false)}
              style={{ color: '#013367' }}
            >
              Insights
            </Link>

            <Link
              href="/#consultation"
              onClick={() => setIsOpen(false)}
              style={{ color: '#013367' }}
            >
              Contact
            </Link>

            <Button
              asChild
              className="w-full text-white hover:opacity-90"
              style={{ backgroundColor: '#013367' }}
            >
              <a href="/#consultation" onClick={() => setIsOpen(false)}>
                Book Consultation
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}