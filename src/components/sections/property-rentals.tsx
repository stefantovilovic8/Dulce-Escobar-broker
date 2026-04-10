"use client";

import NextImage from "next/image";
import Link from "next/link";
import { MousePointer2, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const RENTAL_PROPERTIES = [
      {
      id: 1,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/stefanpridn-1767619029406.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1588182529087678890"
    },
    {
      id: 2,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/majanagaja-1767618887326.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1569391071072922295"
    },
    {
      id: 3,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/princessnajboljpridn-1767619139249.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1547581461940919455"
    },
    {
      id: 4,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/jakahribar-1767619192452.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1507410151688225315"
    },
    {
      id: 5,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ysyisyisyis-1767619288574.jpeg?width=8000&height=8000&resize=contain",
      link: "https://www.airbnb.co.uk/rooms/1588259960473825892"
    }
];

export default function PropertyRentals() {
  const { t } = useLanguage();

  return (
      <section id="listings" className="bg-[#FFFFFF] pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1300px]">
          <div className="flex justify-center mb-12">
            <h2 className="text-[2.25rem] md:text-[2.8rem] lg:text-[3.15rem] font-display text-[#1A1A1A] leading-[1.1] text-center">
              {t("services.property_rentals")}
            </h2>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {RENTAL_PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="group bg-[#F5F5F5] rounded-lg overflow-hidden border border-[#C5A059]/10 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <NextImage
                  src={property.image}
                  alt={t(`rentals.prop${property.id}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="font-display text-[18px] md:text-[20px] text-[#1A1A1A] font-semibold tracking-wide mb-2 group-hover:text-[#C5A059] transition-colors">
                      {t(`rentals.prop${property.id}.title`)}
                    </h3>
                    <div className="flex items-start gap-1.5 text-[#4A4A4A]">
                      <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                      <p className="font-body text-[14px] leading-snug">
                        {t(`rentals.prop${property.id}.description`)}
                      </p>
                    </div>
                  </div>

                {/* Button Section */}
                <div className="mt-auto">
                  <div className="pt-4 border-t border-[#C5A059]/10">
                    <Link 
                      href={property.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#C5A059] font-body text-[14px] font-medium hover:text-[#C5A059]/80 transition-colors"
                    >
                      <MousePointer2 className="w-4 h-4" />
                      {t("rentals.view_on_airbnb")}
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
