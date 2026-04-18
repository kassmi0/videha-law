import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* MAIN GRID FIXED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-8">

          {/* LEFT */}
          <div>
            <h4 className="font-bold mb-4 text-center md:text-left">Contact Us</h4>

            <div className="space-y-4 text-sm opacity-90">

              <div className="flex gap-2 justify-center md:justify-start items-start">
                <MapPin size={16} className="shrink-0 mt-1" />
                <p>New-Baneshwor, Kathmandu 44600, Nepal</p>
              </div>

              <div className="flex gap-2 justify-center md:justify-start items-start">
                <Phone size={16} className="shrink-0 mt-1" />
                <p>+977 9747201706</p>
              </div>

              <div className="flex gap-2 justify-center md:justify-start items-start">
                <Mail size={16} className="shrink-0 mt-1" />
                <a href="mailto:infovidehalaw@gmail.com">
                  infovidehalaw@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex flex-col items-center text-center">

            <h4 className="font-semibold mb-4">Connect Via</h4>

            {/* ICON WRAP FIXED */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">

              {/* WhatsApp */}
              <a className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-green-500 transition-all"
                 href="https://wa.me/9779849093540"
                 target="_blank"
                 rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.49 0 .16 5.33.16 11.89c0 2.09.55 4.13 1.59 5.94L0 24l6.31-1.65a11.9 11.9 0 005.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.47-8.43z" />
                </svg>
              </a>

              {/* Facebook */}
              <a className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-blue-600 transition-all"
                 href="https://www.facebook.com/profile.php?id=61570958068623"
                 target="_blank"
                 rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M22 12a10 10 0 10-11.5 9.88v-6.99H8v-2.89h2.5V9.41c0-2.47 1.47-3.84 3.73-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.76-1.62 1.54v1.85H16l-.4 2.89h-2.22v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-blue-700 transition-all"
                 href="https://linkedin.com"
                 target="_blank"
                 rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31z" />
                </svg>
              </a>

              {/* Instagram */}
              <a className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-pink-500 transition-all"
                 href="https://www.instagram.com/videha.law/"
                 target="_blank"
                 rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5z" />
                </svg>
              </a>

              {/* Email */}
              <a className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-red-500 transition-all"
                 href="mailto:infovidehalaw@gmail.com">
                <Mail className="h-5 w-5" />
              </a>

            </div>

            <h4 className="font-semibold mb-2">Office Hours</h4>
            <p className="text-sm opacity-80">09:00 AM - 06:00 PM</p>
            <p className="text-sm opacity-80">Monday - Friday</p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center md:text-left">

            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/#practice-areas">Practice Areas</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/#insights">Insights</Link></li>
                <li><Link href="/#consultation">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/#about">About Us</Link></li>
                <li><Link href="/#insights">Insights</Link></li>
                <li><Link href="/#consultation">Contact</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p>© 2026 Videha Law and Associates</p>
          <p>This website is for informational purposes only</p>
        </div>

      </div>
    </footer>
  );
}