import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/law-data/services';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo + About */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-md bg-primary">
                <Image
                  src="/images/logo-videha.png"
                  alt="Videha Law and Associates logo"
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-sm object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-primary-foreground">
                  Videha Law and Associates
                </h3>
                <p className="text-xs text-primary-foreground/85">
                  Premier Corporate Law Firm in Nepal.
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Premier legal services for corporate, commercial, and intellectual property matters.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/#about" className="hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-primary-foreground transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#insights" className="hover:text-primary-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/#consultation" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (kept dynamic if you still want it) */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (optional — you can remove if redundant) */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/#about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#insights" className="hover:text-primary-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/#consultation" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/70">
              © 2024 Videha Law and Associates. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4 md:mt-0">
              This website is for informational purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}