"use client";

import NextImage from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { MapPin, MousePointer2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Destinations() {
  const router = useRouter();
  const pathname = usePathname();
  const { t, language } = useLanguage();

    const formatPrice = (value: string, isMillion: boolean = false) => {
      const from = t("destinations.price_from");
      const prefix = t("destinations.price_currency_prefix");
      const suffix = t("destinations.price_currency_suffix");
      const million = t("destinations.price_million");
      
      let displayValue = value;
      if (language === 'ar') {
        const rate = 4.95;
        if (isMillion) {
          const numValue = parseFloat(value);
          displayValue = (numValue * rate).toFixed(2);
        } else {
          const numValue = parseInt(value.replace(/,/g, ''), 10);
          displayValue = Math.round(numValue * rate).toLocaleString('en-US');
        }
      }
      
      if (isMillion) {
        return `${from}${prefix}${displayValue}${million}`;
      }
      return `${from}${prefix}${displayValue}${suffix}`;
    };

    const destinations = [
        {
          name: t("destinations.safa_one_name"),
          location: t("destinations.safa_one_location"),
          price: formatPrice("980,000"),
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Building-1-1767521487455.jpg?width=8000&height=8000&resize=contain",
        },
      {
        name: t("destinations.damac_bay_2_name"),
        location: t("destinations.damac_bay_2_location"),
        price: formatPrice("1.78", true),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-2-1767521781213.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.couture_name"),
        location: t("destinations.couture_location"),
        price: formatPrice("4.44", true),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-3-1767521960225.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.cavalli_tower_name"),
        location: t("destinations.cavalli_tower_location"),
        price: t("destinations.sold_out"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/bulding-5-1767522334296.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.chic_tower_name"),
        location: t("destinations.chic_tower_location"),
        price: formatPrice("556,507"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-6-1767522536083.webp?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.canal_heights_2_name"),
        location: t("destinations.canal_heights_2_location"),
        price: formatPrice("572,853"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-7-1767522868961.webp?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.damac_casa_name"),
        location: t("destinations.damac_casa_location"),
        price: formatPrice("607,031"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-8-1767522992933.webp?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.safa_two_name"),
        location: t("destinations.safa_two_location"),
        price: formatPrice("660,527"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-9-1767523136778.webp?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.altitude_name"),
        location: t("destinations.altitude_location"),
        price: formatPrice("674,644"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building100-1767523438252.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.canal_crown_name"),
        location: t("destinations.canal_crown_location"),
        price: formatPrice("706,593"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/bild11-1767524806519.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.canal_heights_name"),
        location: t("destinations.canal_heights_location"),
        price: formatPrice("716,252"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-12-1767524946021.jpg?width=8000&height=8000&resize=contain",
      },
    {
      name: t("destinations.damac_bay_name"),
      location: t("destinations.damac_bay_location"),
        price: formatPrice("800,000"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building21-1767526517177.jpg?width=8000&height=8000&resize=contain",
    },
    {
      name: t("destinations.riverside_views_name"),
      location: t("destinations.riverside_views_location"),
      price: formatPrice("251,134"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building-13-1767525336099.webp?width=8000&height=8000&resize=contain",
    },
      {
        name: t("destinations.damac_district_name"),
        location: t("destinations.damac_district_location"),
        price: formatPrice("255,592"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/BUILDING14-1767525566737.png?width=8000&height=8000&resize=contain",
      },
    {
      name: t("destinations.elo_2_3_name"),
      location: t("destinations.elo_2_3_location"),
      price: formatPrice("265,994"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building15-1767525634281.jpg?width=8000&height=8000&resize=contain",
    },
      {
        name: t("destinations.elo_1_name"),
        location: t("destinations.elo_1_location"),
        price: formatPrice("277,139"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building16-1767525735530.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.lagoon_views_name"),
        location: t("destinations.lagoon_views_location"),
        price: formatPrice("284,569"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building17-1767525885266.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.aykon_city_name"),
        location: t("destinations.aykon_city_location"),
        price: formatPrice("291,256"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building18-1767526086343.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.golf_greens_name"),
        location: t("destinations.golf_greens_location"),
        price: formatPrice("338,808"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building19-1767526165138.jpg?width=8000&height=8000&resize=contain",
      },
      {
        name: t("destinations.chelsea_residences_name"),
        location: t("destinations.chelsea_residences_location"),
        price: formatPrice("546,848"),
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/building20-1767526287440.png?width=8000&height=8000&resize=contain",
      },
    ];

  const isSubpage = ['/concierge', '/gallery'].includes(pathname);
  const isOffPlan = pathname === '/off-plan';

    return (
      <section className={`bg-[#FFFFFF] pt-12 ${isSubpage || isOffPlan ? 'pb-4' : 'pb-16 lg:pb-24'} lg:pt-16 overflow-hidden`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1300px]">
          <div className="flex justify-center mb-12">
            <h2 className="text-[2.025rem] md:text-[2.52rem] lg:text-[2.835rem] font-display text-[#1A1A1A] leading-[1.1] text-center">
              {t("destinations.headline_prefix")}<span className="text-[#C5A059]">{t("destinations.headline_luxury")}</span>{t("destinations.headline_middle")}<span className="text-[#C5A059]">{t("destinations.headline_opportunity")}</span>
            </h2>
          </div>
          {/* Grid Section */}
          {!isSubpage && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="group bg-[#F5F5F5] rounded-lg overflow-hidden border border-[#C5A059]/10 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <NextImage
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-4">
                    <h3 className="font-display text-[18px] md:text-[20px] text-[#1A1A1A] font-semibold tracking-wide mb-2 group-hover:text-[#C5A059] transition-colors">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#4A4A4A]">
                      <MapPin className="w-4 h-4 text-[#C5A059]" />
                      <p className="font-body text-[14px]">
                        {destination.location}
                      </p>
                    </div>
                    </div>

                    {/* Price and Enquire Button */}
                    <div className="mt-auto">
                      <p className="font-body text-[16px] text-[#C5A059] font-semibold mb-4">
                        {destination.price}
                      </p>
                      <div className="pt-4 border-t border-[#C5A059]/10">
                        <Link 
                          href="/contact-us"
                          className="flex items-center gap-2 text-[#C5A059] font-body text-[14px] font-medium hover:text-[#C5A059]/80 transition-colors"
                        >
                          <MousePointer2 className="w-4 h-4" />
                          {t("destinations.enquire_now")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
}
