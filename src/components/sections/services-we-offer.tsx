"use client";

import NextImage from "next/image";
import Link from "next/link";
import { MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function ServicesWeOffer() {
  const { t } = useLanguage();
    const assets = {
      aviation: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6363938c-1a0a-4fd7-80ff-6f78f509f220-we-concierge-com/assets/images/26779279-e616-4586-b5aa-b568f9a7adda-4.jpg",
      relocation: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Precision-in-Protection_-Mastering-Risk-Management_-1767395792961.jpeg?width=8000&height=8000&resize=contain",
      membership: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
    };

    const services = [
      {
        title: t("services.jet.title"),
        image: assets.aviation,
        price: t("services.price_upon_request"),
        items: [
          t("gallery.item.aviation"),
          t("gallery.item.yacht"),
          t("gallery.item.vip"),
          t("gallery.item.car_rentals"),
          t("gallery.item.chauffeur"),
            t("gallery.item.hospitality"),
            t("gallery.item.investment"),
            t("gallery.item.protection"),
          ],
      },
      {
        title: t("services.relocation.title"),
        image: assets.relocation,
        price: t("services.price_upon_request"),
        items: [
          t("services.relocation.item1"),
          t("services.relocation.item2"),
          t("services.relocation.item3"),
          t("services.relocation.item4"),
          t("services.relocation.item5"),
        ],
      },
      {
        title: t("services.membership.title"),
        image: assets.membership,
        price: t("services.price_upon_request"),
        items: [
        t("services.membership.item1"),
        t("services.membership.item2"),
        t("services.membership.item3"),
        t("services.membership.item4"),
        t("services.membership.item5"),
        t("services.membership.item6"),
        t("services.membership.item7"),
      ],
    },
  ];

    return (
      <section className="bg-[#FFFFFF] pt-6 lg:pt-8 pb-20 lg:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1400px]">
          
            {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                    <span className="text-[#C5A059] font-body text-xs uppercase tracking-widest font-medium">
                      {t("services.subtitle")}
                    </span>
                  </div>
                  <h2 className="text-[2.25rem] md:text-[2.8rem] lg:text-[3.15rem] font-display text-[#1A1A1A] leading-[1.1] text-center">
                        {t("services.header")}
                      </h2>
                </div>
  
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-[#F5F5F5] border border-[#C5A059]/10 rounded-xl overflow-hidden flex flex-col hover:border-[#C5A059]/50 transition-all duration-300 h-full"
                >
                  <div className="relative h-64 overflow-hidden border-b border-[#C5A059]/10">
                    <NextImage
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-colors z-10"></div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col flex-grow">
                    <h3 className="font-display text-2xl text-[#1A1A1A] mb-6 leading-tight transition-colors duration-300 text-start group-hover:text-[#C5A059]">
                      {service.title}
                    </h3>
                    <ul className="space-y-4 font-body text-sm md:text-[15px] text-[#4A4A4A] leading-relaxed mb-8">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-[#C5A059]/60 flex-shrink-0"></span>
                            <span className="text-start">{item}</span>
                          </li>
                        ))}
                    </ul>

                    {/* Bottom Section */}
                    <div className="mt-auto">
                      <p className="font-body text-[16px] text-[#C5A059] font-semibold mb-4">
                        {service.price}
                      </p>
                      <div className="pt-6 border-t border-[#C5A059]/10">
                        <Link 
                          href="/contact-us"
                          className="flex items-center gap-2 text-[#C5A059] font-body text-[14px] font-medium hover:text-[#C5A059]/80 transition-colors"
                        >
                          <MousePointer2 className="w-4 h-4" />
                          {t("services.enquire_now")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

      </div>
    </section>
  );
}

export function FriendsAndPartnersTitle() {
  const { t } = useLanguage();
  return (
      <div className="flex justify-center mb-8 pt-12">
        <h2 className="text-[2.25rem] md:text-[2.8rem] lg:text-[3.15rem] font-display text-[#1A1A1A] leading-[1.1] text-center">
          {t("services.friends")}
        </h2>
      </div>
  );
}
