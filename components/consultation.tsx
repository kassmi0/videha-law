'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitStatus({ type: null, message: '' });

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
          hint?: string;
          details?: string;
        } | null;
        const base = data?.error || 'Failed to submit. Please try again.';
        const hint = data?.hint ? `\n\n${data.hint}` : '';
        const details = data?.details ? `\n\nDetails: ${data.details}` : '';
        throw new Error(`${base}${hint}${details}`);
      }

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your inquiry. We will contact you shortly.',
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setSubmitStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-2xl shadow-primary/10 lg:grid-cols-5">
          <div className="lg:col-span-2 bg-primary text-primary-foreground p-8 sm:p-10">
            <p className="inline-flex rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Contact Us
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight">
              Get legal guidance from our experts.
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Share your case details, and we will connect you with the right attorney for a clear
              next step.
            </p>

            <div className="mt-8 space-y-4" id="contact">
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <p className="text-xs uppercase tracking-wide text-primary-foreground/80">Email</p>
                <p className="mt-1 font-medium">infovidehalaw@gmail.com</p>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <p className="text-xs uppercase tracking-wide text-primary-foreground/80">Phone</p>
                <p className="mt-1 font-medium">+977 9747201706</p>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <p className="text-xs uppercase tracking-wide text-primary-foreground/80">Office</p>
                <p className="mt-1 font-medium">New-Baneshwor, Kathmandu 44600, Nepal</p>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <p className="text-xs uppercase tracking-wide text-primary-foreground/80">Hours</p>
                <p className="mt-1 font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-primary-foreground/80">Saturday and Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 sm:p-10">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary">Tell us about your matter</h3>
              <p className="mt-2 text-foreground/70">
                Complete this short form and we will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-11"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977"
                    className="h-11"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What do you need help with?"
                    className="h-11"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your legal matter..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto px-8" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'contact Us'}
              </Button>

              {submitStatus.type ? (
                <p
                  className={[
                    'rounded-md border px-3 py-2 text-sm',
                    submitStatus.type === 'success'
                      ? 'border-green-200 bg-green-50 text-green-700'
                      : 'border-red-200 bg-red-50 text-red-700',
                  ].join(' ')}
                  role="status"
                >
                  {submitStatus.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
