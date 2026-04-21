import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

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
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
              {[
{
  label: 'WhatsApp',
  href: 'https://wa.me/9747201706',
  icon: <FaWhatsapp className="h-5 w-5" aria-hidden="true" />,
  hover: 'hover:bg-green-500/20 hover:text-green-100',
  external: true,
},
                {
                  label: 'Facebook',
                  href: 'https://www.facebook.com/profile.php?id=61570958068623',
                  icon: <FaFacebookF className="h-5 w-5" aria-hidden="true" />,
                  hover: 'hover:bg-blue-500/20 hover:text-blue-100',
                  external: true,
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/videhalaw/',
                  icon: <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />,
                  hover: 'hover:bg-sky-500/20 hover:text-sky-100',
                  external: true,
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/videha.law/',
                  icon: <FaInstagram className="h-5 w-5" aria-hidden="true" />,
                  hover: 'hover:bg-pink-500/20 hover:text-pink-100',
                  external: true,
                },
                {
                  label: 'Email',
                  href: 'mailto:infovidehalaw@gmail.com',
                  icon: <HiOutlineMail className="h-5 w-5" aria-hidden="true" />,
                  hover: 'hover:bg-red-500/20 hover:text-red-100',
                  external: false,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={[
                    'inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full',
                    'bg-white/10 text-white ring-1 ring-white/15',
                    'transition-all duration-200',
                    'hover:bg-white/20 hover:ring-white/30',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
                    item.hover,
                  ].join(' ')}
                >
                  {item.icon}
                </a>
              ))}
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
          <p>© 2026 Videha Law and Associates. All Rights Reserved.</p>
          <p>This website is for informational purposes only. Contact the legal Team.</p>
        </div>

      </div>
    </footer>
  );
}