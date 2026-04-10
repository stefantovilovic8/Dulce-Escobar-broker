"use client";

import React from 'react';
import Image from 'next/image';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const ContactHero = () => {
  const { t } = useLanguage();

    return (
      <section className="bg-[#FFFFFF] pt-[160px] pb-[20px] px-[20px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 
            className="text-[#1A1A1A] font-display text-[1.35rem] md:text-[2.25rem] lg:text-[2.7rem] leading-[1.1] mb-[30px] font-normal"
            style={{ 
              letterSpacing: '-0.02em'
            }}
          >
            {t("contact.title")}
          </h1>
  
              <p className="text-[#4A4A4A] text-base md:text-lg max-w-[600px] mb-[40px] font-light leading-relaxed whitespace-pre-line">
                {t("contact.conversation")}
              </p>
  
          {/* Social Icons Row */}
            <div className="flex items-center justify-center gap-[15px] mb-[20px]">
              <a
              href="https://www.instagram.com/dulcescob?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#C5A059]/20 bg-white/50 text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059]/5 hover:border-[#C5A059] hover:text-[#C5A059]"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
              <a
                href="mailto:Rescobardulce@gmail.com"
                className="social-circle w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#C5A059]/20 bg-white/50 text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059]/5 hover:border-[#C5A059] hover:text-[#C5A059]"
                aria-label="Email"
              >
              <Mail size={18} />
            </a>
            <a
                href="https://wa.me/971588473125"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#C5A059]/20 bg-white/50 text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059]/5 hover:border-[#C5A059] hover:text-[#C5A059]"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
  
          {/* QR Code */}
          <div className="mt-2 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
            <div className="relative group p-3 rounded-2xl border border-[#C5A059]/10 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-[#C5A059]/50 hover:bg-white/80">
              <div className="relative w-[180px] h-[180px] overflow-hidden rounded-lg">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/dulcescob_qr-resized-1772911427988.webp?width=8000&height=8000&resize=contain"
                    alt="Instagram QR Code"
                    fill
                    sizes="180px"
                    className="object-contain object-center group-hover:brightness-105 transition-all duration-500"
                    priority
                  />
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C5A059]/0 group-hover:border-[#C5A059]/50 transition-all duration-500 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C5A059]/0 group-hover:border-[#C5A059]/50 transition-all duration-500 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C5A059]/0 group-hover:border-[#C5A059]/50 transition-all duration-500 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C5A059]/0 group-hover:border-[#C5A059]/50 transition-all duration-500 rounded-br-xl" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactHero;
