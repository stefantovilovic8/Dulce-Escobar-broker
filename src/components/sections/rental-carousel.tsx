"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const RENTAL_PROPERTIES = [
    {
      title: "Luxury Waterfront Villa",
      description: "Experience the ultimate in coastal living with breathtaking views.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/stefanpridn-1767619029406.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1588182529087678890?viralityEntryPoint=1&s=76"
    },
  {
    title: "Modern Penthouse Suite",
    description: "Sleek design meets urban convenience in this stunning penthouse.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/majanagaja-1767618887326.jpeg?width=8000&height=8000&resize=contain",
    link: "https://www.airbnb.co.uk/rooms/1569391071072922295?viralityEntryPoint=1&s=76"
  },
    {
      title: "Epic Pool - Studio JVC",
      description: "Stylish studio at Binghatti Azure, JVC, offering modern design, top-notch amenities, and a prime Dubai location.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/princessnajboljpridn-1767619139249.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1547581461940919455?viralityEntryPoint=1&s=76"
    },
    {
      title: "Epic Private Pool",
        description: "Stylish 2BR Apartment at Binghatti Onyx, JVC, with private plunge pool, modern amenities, and a central Dubai location.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jakahribar-1767619192452.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1507410151688225315?viralityEntryPoint=1&s=76"
    },
  {
    title: "Luxury Studio JVC",
    description: "Stylish studio at Binghatti Phoenix, JVC, with smart amenities, premium facilities, and a central Dubai location.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ysyisyisyis-1767619288574.jpeg?width=8000&height=8000&resize=contain",
    link: "https://www.airbnb.co.uk/rooms/1588259960473825892?viralityEntryPoint=1&s=76"
  }
];

export default function RentalCarousel() {
  const { t, isRTL } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    direction: isRTL ? 'rtl' : 'ltr'
  });
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <section className="bg-[#FFFFFF] py-20 overflow-hidden">
      <div className="container mx-auto max-w-[1140px] px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[#C5A059] rounded-full me-3"></span>
            <span className="text-[#C5A059] text-[12px] font-bold uppercase tracking-[0.1em] font-body">
              RENTAL PROPERTIES
            </span>
          </div>
            <div className="flex gap-4" dir="ltr">
              <button 
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
        </div>

        {/* Carousel */}
        <div 
          className="embla overflow-hidden cursor-grab active:cursor-grabbing" 
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="embla__container flex">
            {RENTAL_PROPERTIES.map((property, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_100%] px-2">
                <a 
                  href={property.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C5A059]/10 hover:border-[#C5A059]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C5A059]/5">
                    <div className="relative w-full md:w-[350px] aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                      <Image 
                        src={property.image} 
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    </div>
                      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                        <span className="text-[#C5A059]/80 text-[11px] font-medium uppercase tracking-widest mb-4 font-body">
                          AIRBNB LISTING
                        </span>
                        <h3 className="font-display text-2xl lg:text-3xl text-[#1A1A1A] font-medium leading-[1.3] mb-6 group-hover:text-[#C5A059] transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-[#4A4A4A] text-sm md:text-base font-body mb-6 line-clamp-2">
                          {property.description}
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-[#C5A059] font-body text-xs font-bold tracking-widest group-hover:gap-4 transition-all duration-300">
                          VIEW ON AIRBNB <ChevronRight className="w-4 h-4" />
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
