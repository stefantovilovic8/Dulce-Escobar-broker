"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { CheckCircle2 } from 'lucide-react';
import { sendEmail } from '@/app/actions';
import { toast } from 'sonner';

export default function CtaContact() {
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
      <section id="contact" className="relative w-full min-h-[700px] flex items-center justify-center py-20 lg:py-28 overflow-hidden bg-[#FFFFFF]">
        {/* Background Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0 bg-[#FFFFFF]">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay for text contrast */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            referrerPolicy="no-referrer"
          >
            <source
              src="https://assets.mixkit.co/videos/20208/20208-720.mp4"
              type="video/mp4"
            />
          </video>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-[54px] text-white font-medium leading-[1.2] mb-6 tracking-wide text-center">
          {t("cta.title")}
        </h2>

        {/* Description */}
        <p className="font-body text-white/80 text-sm md:text-[15px] font-light leading-relaxed max-w-xl mb-12 mx-auto text-center">
          {t("cta.text")}
        </p>

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
