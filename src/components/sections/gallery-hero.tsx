"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

const GalleryHero = () => {
  const { t } = useLanguage();
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/20260103_1221_Jet-and-Rolls-Royce-Nightscape_remix_01ke1scxemem2vwcw42wb6xcmg-1767444628604.png?width=8000&height=8000&resize=contain";

  return (
    <section className="relative min-h-[500px] h-[60vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Gallery Hero"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 z-[1]" />
      </div>

        <div className="container relative z-10 px-6 mx-auto pt-14">
          <div className="max-w-[1140px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-white font-display text-[2.8rem] md:text-[3.9rem] lg:text-[4.95rem] leading-[1.1] tracking-[-0.02em]">
                {t("gallery.title")}
              </h1>
                    <p className="text-[#E0E0E0] font-body text-sm md:text-base lg:text-[17px] font-normal max-w-[600px] leading-[1.6] -mt-[38px]">
                {t("gallery.subtitle")}
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default GalleryHero;
