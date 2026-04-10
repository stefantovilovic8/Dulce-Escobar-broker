"use client";

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useLanguage } from '@/lib/language-context';

export default function ArticleSection() {
  const { t, isRTL } = useLanguage();
  
  const articles = [
    {
      title: t("articles.item1_title"),
      category: t("articles.item1_category"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/zaynab-1767546765268.jpg?width=8000&height=8000&resize=contain",
      url: "https://gulfnews.com/lifestyle/inspiring-journey-how-a-single-mum-became-real-estate-mogul-in-dubai-1.500336241"
    },
    {
      title: t("articles.item2_title"),
      category: t("articles.item2_category"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2026-01-04-at-21.50.22-1767559872533.png?width=8000&height=8000&resize=contain",
      url: "https://www.instagram.com/p/DSH_iJ5E1oJ/?igsh=MXg3OWUyaW03aWhjMw=="
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    duration: 40,
    skipSnaps: false,
    direction: isRTL ? 'rtl' : 'ltr'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section className="bg-[#FFFFFF] py-20 overflow-hidden">
      <div className="container mx-auto max-w-[1140px] px-6">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[#C5A059] rounded-full me-3"></span>
            <span className="text-[#C5A059] text-[12px] font-bold uppercase tracking-[0.1em] font-body">
              {t("articles.label")}
            </span>
          </div>
            <div className="flex gap-4" dir="ltr">
              <button 
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {articles.map((article, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                <a 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C5A059]/10 hover:border-[#C5A059]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C5A059]/5">
                    <div className="relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src={article.image} 
                          alt={article.title}
                          fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                    <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                      <span className="text-[#C5A059]/60 text-[11px] font-medium uppercase tracking-widest mb-4 font-body">
                        {article.category}
                      </span>
                        <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl text-[#1A1A1A] font-medium leading-[1.2] mb-8 group-hover:text-[#C5A059] transition-colors">
                        {article.title}
                      </h3>
                      <div className="mt-auto flex items-center gap-2 text-[#C5A059] font-body text-xs font-bold tracking-widest group-hover:gap-4 transition-all duration-300">
                        {t("articles.read_more")} <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
