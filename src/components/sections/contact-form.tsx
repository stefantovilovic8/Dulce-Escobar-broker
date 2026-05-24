"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { CheckCircle2 } from 'lucide-react';
import { sendEmail } from '@/app/actions';
import { toast } from 'sonner';

/**
 * ContactForm component
 * A pixel-perfect clone of the inquiry section from WE Concierge website.
 * Matches the style and functionality of the Home page's contact section.
 */
export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      toast.error(result.error || t("cta.error"));
    }
  };
  
  return (
    <section id="contact-form" className="relative w-full min-h-[700px] flex items-center justify-center pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay for text contrast */}
        <video
          loading="lazy" className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
              src="https://assets.mixkit.co/videos/20208/20208-720.mp4" 
              type="video/mp4" 
            />
        </video>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-12">
          <p className="font-body text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            {t("cta.text")}
          </p>
          {/* Direct contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <a
              href="https://wa.me/971588473125"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 16.92-.38 2.29a2 2 0 0 1-2 1.79A19.86 19.86 0 0 1 3 5.38a2 2 0 0 1 1.79-2L7.08 3a2 2 0 0 1 2 1.72l.49 3.09a2 2 0 0 1-.45 1.67L7.8 10.8a16 16 0 0 0 5.39 5.39l1.32-1.32a2 2 0 0 1 1.67-.45l3.09.49A2 2 0 0 1 22 16.92z"/></svg>
              <span className="font-body text-sm font-medium">+971 58 847 3125</span>
            </a>
            <a
              href="mailto:Rescobardulce@gmail.com"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="font-body text-sm font-medium">Rescobardulce@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          
          {/* Success State or Contact Form */}
          {isSubmitted ? (
            <div className="w-full max-w-[580px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-10 md:p-16 flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white font-medium mb-4">
                {t("cta.success.title")}
              </h3>
              <p className="font-body text-white/70 text-base font-light leading-relaxed text-center">
                {t("cta.success.message")}
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-white/50 hover:text-white text-sm font-body transition-colors underline underline-offset-4"
              >
                {t("cta.send_another")}
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="w-full max-w-[580px] flex flex-col gap-4 mx-auto"
            >
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("cta.name")}
                    className="w-full h-14 px-6 bg-white/20 backdrop-blur-sm border border-transparent rounded-2xl text-white placeholder:text-white/70 font-body text-sm outline-none focus:bg-white/25 transition-all duration-300"
                    required
                  />
                </div>

                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("cta.phone")}
                    className="w-full h-14 px-6 bg-white/20 backdrop-blur-sm border border-transparent rounded-2xl text-white placeholder:text-white/70 font-body text-sm outline-none focus:bg-white/25 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("cta.email")}
                    className="w-full h-14 px-6 bg-white/20 backdrop-blur-sm border border-transparent rounded-2xl text-white placeholder:text-white/70 font-body text-sm outline-none focus:bg-white/25 transition-all duration-300"
                    required
                  />
                </div>

              <div className="w-full">
                <textarea
                  name="message"
                  placeholder={t("cta.message")}
                  rows={4}
                  className="w-full p-6 bg-white/20 backdrop-blur-sm border border-transparent rounded-2xl text-white placeholder:text-white/70 font-body text-sm outline-none focus:bg-white/25 transition-all duration-300 resize-none min-h-[140px]"
                  required
                />
              </div>

              <div className="mt-4 flex justify-center w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1a1a1a] text-white font-body text-sm font-medium py-3.5 px-10 rounded-full hover:bg-black hover:text-primary transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)] min-w-[160px] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t("cta.sending")}</span>
                    </>
                  ) : (
                    t("cta.button")
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
