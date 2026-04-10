"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function VideoCTA() {
    const { t } = useLanguage();
  
    return (
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 bg-[#FFFFFF]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  referrerPolicy="no-referrer"
                >
                  <source 
                    src="https://assets.mixkit.co/videos/20208/20208-720.mp4" 
                    type="video/mp4" 
                  />
                </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
  
        {/* Button Content */}
        <div className="relative z-20">
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-6 border border-white/90 rounded-full pl-8 pr-2 py-2 transition-transform duration-300 ease-out hover:scale-105 hover:bg-white/5"
          >
            <span className="text-white font-body text-sm md:text-base font-medium tracking-wide uppercase">
              {t("hero.cta")}
            </span>
            <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </div>
          </Link>
        </div>
      </section>
    );
}
