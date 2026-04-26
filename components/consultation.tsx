'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const STEPS = [
  { id: 1, title: 'Basic Info' },
  { id: 2, title: 'Details' },
  { id: 3, title: 'Review & Submit' },
] as const;

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
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

  const validateStep = (step: number) => {
    if (step === 1) {
      return formData.name.trim() && formData.email.trim();
    }
    if (step === 2) {
      return formData.phone.trim() && formData.subject.trim() && formData.message.trim();
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete all required fields before continuing.',
      });
      return;
    }
    setSubmitStatus({ type: null, message: '' });
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setSubmitStatus({ type: null, message: '' });
    setCurrentStep((prev) => Math.max(prev - 1, 1));
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
      setCurrentStep(1);
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary">çSend Your Inquiry</h2>
              <p className="mt-2 text-sm text-foreground/70">
                Complete a few quick steps and we&apos;ll get back to you
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={[
                          'flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all',
                          currentStep >= step.id
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-foreground/60',
                        ].join(' ')}
                      >
                        {step.id}
                      </span>
                      <span className="text-xs text-foreground/70">{step.title}</span>
                    </div>
                    {index < STEPS.length - 1 ? (
                      <div
                        className={[
                          'mx-2 h-px flex-1 transition-colors',
                          currentStep > step.id ? 'bg-primary' : 'bg-border',
                        ].join(' ')}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="transition-all duration-300 ease-out">
                {currentStep === 1 ? (
                  <div className="space-y-4">
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
                        placeholder="you@example.com"
                        className="h-11"
                        required
                      />
                    </div>
                  </div>
                ) : null}

                {currentStep === 2 ? (
                  <div className="space-y-4">
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
                  </div>
                ) : null}

                {currentStep === 3 ? (
                  <div className="space-y-3 rounded-xl border border-border/60 bg-background/50 p-4">
                    <div className="rounded-lg border border-border/60 bg-card p-3">
                      <p className="text-xs uppercase tracking-wide text-foreground/60">Full Name</p>
                      <p className="mt-1 text-sm text-foreground">{formData.name}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-card p-3">
                      <p className="text-xs uppercase tracking-wide text-foreground/60">Email Address</p>
                      <p className="mt-1 text-sm text-foreground">{formData.email}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-card p-3">
                      <p className="text-xs uppercase tracking-wide text-foreground/60">Phone Number</p>
                      <p className="mt-1 text-sm text-foreground">{formData.phone}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-card p-3">
                      <p className="text-xs uppercase tracking-wide text-foreground/60">Subject</p>
                      <p className="mt-1 text-sm text-foreground">{formData.subject}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-card p-3">
                      <p className="text-xs uppercase tracking-wide text-foreground/60">Message</p>
                      <p className="mt-1 whitespace-pre-wrap text-sm text-foreground">{formData.message}</p>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1 || isSubmitting}
                  className="min-w-24"
                >
                  Back
                </Button>

                {currentStep < 3 ? (
                  <Button type="button" onClick={handleNext} className="min-w-28">
                    Continue
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting} className="min-w-32">
                    {isSubmitting ? 'Sending...' : 'Contact Us'}
                  </Button>
                )}
              </div>

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
