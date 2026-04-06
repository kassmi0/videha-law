'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert('Thank you for your inquiry. We will contact you shortly.');
  };

  return (
    <section id="consultation" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Need Legal Assistance? Schedule a Consultation Today
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Get in touch with our legal experts to discuss your case and find the right solution for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Book Your Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What do you need help with?"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your legal matter..."
                  rows={5}
                  className="w-full"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Schedule Consultation
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl font-bold text-primary mb-6"
                id="contact"
              >
                Contact Information
              </h3>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">info@kasmita.com</p>
                <p className="text-foreground/80">legal@kasmita.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">+1 (555) 123-4567</p>
                <p className="text-foreground/80">+1 (555) 987-6543</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">123 Legal Street</p>
                <p className="text-foreground/80">Corporate Plaza, Suite 500</p>
                <p className="text-foreground/80">City, State 12345</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-foreground/80">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-foreground/80">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
