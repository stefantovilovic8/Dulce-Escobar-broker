"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const images = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6363938c-1a0a-4fd7-80ff-6f78f509f220-we-concierge-com/assets/images/26779279-e616-4586-b5aa-b568f9a7adda-4.jpg",
    titleKey: "gallery.title.jet_exterior",
    categoryKey: "gallery.item.aviation"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Yacht-Moments-in-Dubai_-Champagne-Views-Best-Service-1767456653786.jpeg?width=8000&height=8000&resize=contain",
    titleKey: "gallery.title.yacht",
    categoryKey: "gallery.item.yacht"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/champagn-1767451097677.jpeg?width=8000&height=8000&resize=contain",
    titleKey: "gallery.title.jet_interior",
    categoryKey: "gallery.item.vip"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/_-3-1767462408451.jpeg?width=8000&height=8000&resize=contain",
    titleKey: "gallery.title.car_fleet",
    categoryKey: "gallery.item.car_rentals"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/20260103_1547_Car-Interior-Relaxation_remix_01ke253yj1eg8928c1nhxvvxtg-1767451727921.png?width=8000&height=8000&resize=contain",
    titleKey: "gallery.title.car_fleet",
    categoryKey: "gallery.item.chauffeur"
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    titleKey: "gallery.title.hotel_suite",
    categoryKey: "gallery.item.hospitality"
  },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dubai-cloud22-atlantistheroyal-palmjumeirah_-1767619817162.jpeg?width=8000&height=8000&resize=contain",
      titleKey: "gallery.title.protection",
      categoryKey: "gallery.item.protection"
    },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/20260103_1620_Business-Meeting-Discussion_remix_01ke271wy4fyss4kae4mcvwsd7-1767456435987.png?width=8000&height=8000&resize=contain",
    titleKey: "gallery.title.yacht_deck",
    categoryKey: "gallery.item.investment"
  }
];

const GalleryGrid = () => {
  const { t } = useLanguage();

      return (
        <section className="bg-[#FFFFFF] pt-2 pb-12 px-4 overflow-hidden">
          <div className="max-w-[1050px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {images.map((image, index) => (
                  <Link href={index === 6 ? "/services" : "/contact-us"} key={index} className="block">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#1a1a1a] cursor-pointer"
                  >
                  <Image
                        src={image.src}
                        alt={t(image.titleKey)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                        
                          <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />
                              <div className="absolute inset-0 flex items-end justify-center p-4 transition-opacity duration-500 group-hover:opacity-0">
                                      <p className="text-white text-[12px] tracking-[0.1em] uppercase font-body font-medium text-center">
                                  {t(image.categoryKey)}
                                </p>
                              </div>
                      </motion.div>
                </Link>
              ))}
            </div>
        </div>
      </section>
    );
};

export default GalleryGrid;
