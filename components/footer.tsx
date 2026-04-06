import Link from 'next/link';
import { practiceAreas } from '@/lib/law-data/practice-areas';
import { services } from '@/lib/law-data/services';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Kasmita</h3>
            <p className="text-primary-foreground/70 text-sm">
              Premier legal services for corporate, commercial, and intellectual property matters.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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

        <div className="pt-8 border-t border-border border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/70">
              © 2024 Kasmita Law and Associates. All rights reserved.
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
