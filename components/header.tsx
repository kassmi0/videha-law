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
import { allInsightArticles } from '@/lib/insights-data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPractice, setShowPractice] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-videha.png"
              alt="Videha Law and Associates logo"
              width={200}
              height={200}
              className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
            />
            <div>
              <p className="text-sm md:text-base font-bold" style={{ color: '#2E2E2E' }}>
                Videha Law and Associates
              </p>
              <p className="hidden lg:block text-xs" style={{ color: '#2E2E2E' }}>
                Advocates Advisor  Agent of justice
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">

            <Link href="/#about" style={{ color: '#2E2E2E' }}>
              About
            </Link>

            {/* Practice Areas */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button style={{ color: '#2E2E2E' }}>Practice Areas</button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#FAFAFA] text-charcoal w-72">
                {practiceAreas.map((area) => (
                  <DropdownMenuItem asChild key={area.id}>
                    <Link href={`/practice-areas/${area.id}`}>
                      {area.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/practice-areas">
                    View All Practice Areas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button style={{ color: '#2E2E2E' }}>Services</button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#FAFAFA] text-charcoal w-72">
                {services.map((service) => (
                  <DropdownMenuItem asChild key={service.id}>
                    <Link
                      href={{
                        pathname: '/services',
                        hash: service.id,
                      }}
                    >
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/services">View All Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Insights */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button style={{ color: '#2E2E2E' }}>Insights</button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#FAFAFA] text-charcoal w-72">
                {allInsightArticles.map((article) => (
                  <DropdownMenuItem asChild key={article.slug}>
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/insights">View All Insights</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

  
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <Button asChild style={{ backgroundColor: '#58081F' }}>
              <a href="/#consultation" className="text-white">
              Schedule a Meeting
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: '#2E2E2E' }}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden flex flex-col gap-4 pt-4 pb-4 border-t">

            <Link href="/#about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            {/* Practice Mobile */}
            <div>
              <button onClick={() => setShowPractice(!showPractice)}>
                Practice Areas {showPractice ? '−' : '+'}
              </button>
              {showPractice && (
                <div className="pl-3 mt-2 flex flex-col gap-2">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.id}
                      href={`/practice-areas/${area.id}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {area.title}
                    </Link>
                  ))}
                  <Link href="/practice-areas" onClick={() => setIsOpen(false)}>
                    View All Practice Areas
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mobile */}
            <div>
              <button onClick={() => setShowServices(!showServices)}>
                Services {showServices ? '−' : '+'}
              </button>
              {showServices && (
                <div className="pl-3 mt-2 flex flex-col gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={{
                        pathname: '/services',
                        hash: service.id,
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            {/* Insights Mobile */}
            <div>
              <button onClick={() => setShowInsights(!showInsights)}>
                Insights {showInsights ? '−' : '+'}
              </button>
              {showInsights && (
                <div className="pl-3 mt-2 flex flex-col gap-2">
                  {allInsightArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/insights/${article.slug}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {article.title}
                    </Link>
                  ))}
                  <Link href="/insights" onClick={() => setIsOpen(false)}>
                    View All Insights
                  </Link>
                </div>
              )}
            </div>

            <Link href="/#consultation" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Button asChild>
              <a href="/#consultation" onClick={() => setIsOpen(false)}>
              Schedule a Meeting
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}