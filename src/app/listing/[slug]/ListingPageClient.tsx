"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Bed, Bath, Maximize2, MapPin,
  Phone, MessageCircle, ArrowLeft, Building2, Layers,
  Eye, Car, CircleDot, CreditCard,
} from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { LISTINGS_DATA } from "@/components/sections/investment-listings";
import { useLanguage } from "@/lib/language-context";

// Type extension for sale listing fields
type ListingWithSale = typeof LISTINGS_DATA[0] & {
  salePrice?: string;
  saleContract?: string;
};

// Extended specs per slug
const EXTENDED_SPECS: Record<string, {
  unitTitle?: string;
  floor?: string;
  view?: string;
  parking?: string;
  status?: string;
  paymentTerms?: string;
  amenities?: { category: string; items: string[] }[];
}> = {
  "binghatti-tulip-1": {
    unitTitle: "Unit 3007",
    view: "Marina View",
    status: "Vacant",
    paymentTerms: "AED 75,000 (4 Cheques) · AED 80,000 (6 Cheques)",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Furnished",
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Exclusive Wellness",
        items: [
          "Private Swimming Pool",
          "Shared Swimming Pool",
          "Jacuzzi",
          "Sauna",
          "Steam Room",
          "Gymnasium",
        ],
      },
      {
        category: "Lifestyle & Building",
        items: [
          "BBQ Area",
          "Entertaining Area",
          "Covered Parking",
          "Children's Play Area",
          "Tennis Courts",
        ],
      },
      {
        category: "Location Benefits",
        items: [
          "Pets Allowed",
          "Marina View",
          "Dedicated Parking",
        ],
      },
    ],
  },
  "binghatti-tulip-2": {
    unitTitle: "Unit 2806",
    view: "Community View",
    status: "Vacant",
    paymentTerms: "AED 75,000 (4 Cheques) · AED 80,000 (6 Cheques)",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Furnished",
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Exclusive Wellness",
        items: [
          "Private Swimming Pool",
          "Shared Swimming Pool",
          "Jacuzzi",
          "Sauna",
          "Steam Room",
          "Gymnasium",
        ],
      },
      {
        category: "Lifestyle & Building",
        items: [
          "BBQ Area",
          "Entertaining Area",
          "Covered Parking",
          "Children's Play Area",
          "Tennis Courts",
        ],
      },
      {
        category: "Location Benefits",
        items: [
          "Pets Allowed",
          "Public Park nearby",
          "Dedicated Parking",
        ],
      },
    ],
  },
  "neva-residences": {
    unitTitle: "Unit 1 B/R",
    view: "Community View",
    status: "Vacant",
    paymentTerms: "80,000 AED / Year",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Furnished",
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Exclusive Wellness",
        items: [
          "Private Swimming Pool",
          "Shared Swimming Pool",
          "Jacuzzi",
          "Sauna",
          "Steam Room",
          "Gymnasium",
        ],
      },
      {
        category: "Lifestyle & Building",
        items: [
          "BBQ Area",
          "Entertaining Area",
          "Covered Parking",
          "Children's Play Area",
          "Tennis Courts",
          "Pets Allowed",
        ],
      },
    ],
  },
  "binghatti-aurora": {
    parking: "1 Space",
    status: "Available",
    paymentTerms: "6,000 AED / Month",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "Gymnasium",
          "Jacuzzi",
          "Sauna",
          "Steam Room",
        ],
      },
      {
        category: "Building & Outdoor",
        items: [
          "Covered Parking",
          "BBQ Area",
          "Children's Play Area",
          "Communal Gardens",
        ],
      },
      {
        category: "Connectivity & Lifestyle",
        items: [
          "Broadband Ready",
          "Public Transport",
          "Restaurants",
          "Shops",
          "24/7 Security",
        ],
      },
    ],
  },
  "binghatti-azure": {
    floor: "Investment Grade",
    view: "City View",
    status: "Tenanted",
    paymentTerms: "Rented until 28.8.2028",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "Gymnasium",
          "Jacuzzi",
          "Sauna",
          "Steam Room",
        ],
      },
      {
        category: "Building & Outdoor",
        items: [
          "Covered Parking",
          "BBQ Area",
          "Children's Play Area",
          "Communal Gardens",
        ],
      },
      {
        category: "Connectivity & Lifestyle",
        items: [
          "Broadband Ready",
          "Public Transport",
          "Restaurants",
          "Shops",
          "24/7 Security",
        ],
      },
    ],
  },
  "binghatti-azure-sale": {
    floor: "Investment Grade",
    view: "City View",
    status: "Tenanted",
    paymentTerms: "Rented until 28.8.2028",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "Gymnasium",
          "Jacuzzi",
          "Sauna",
          "Steam Room",
        ],
      },
      {
        category: "Building & Outdoor",
        items: [
          "Covered Parking",
          "BBQ Area",
          "Children's Play Area",
          "Communal Gardens",
        ],
      },
      {
        category: "Connectivity & Lifestyle",
        items: [
          "Broadband Ready",
          "Public Transport",
          "Restaurants",
          "Shops",
          "24/7 Security",
        ],
      },
    ],
  },
  "binghatti-aurora-sale": {
    parking: "1 Space",
    status: "Tenanted",
    paymentTerms: "Rented until 30.11.2028",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "Gymnasium",
          "Jacuzzi",
          "Sauna",
          "Steam Room",
        ],
      },
      {
        category: "Building & Outdoor",
        items: [
          "Covered Parking",
          "BBQ Area",
          "Children's Play Area",
          "Communal Gardens",
        ],
      },
      {
        category: "Connectivity & Lifestyle",
        items: [
          "Broadband Ready",
          "Public Transport",
          "Restaurants",
          "Shops",
          "24/7 Security",
        ],
      },
    ],
  },
  "binghatti-phantom": {
    unitTitle: "Unit 409",
    view: "Community View",
    status: "Vacant",
    paymentTerms: "4–6 Cheques",
    amenities: [
      {
        category: "Interior",
        items: [
          "Fully Furnished",
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Carpets",
          "Central A/C",
          "Study",
          "Upgraded Interior",
        ],
      },
      {
        category: "Leisure & Wellness",
        items: [
          "Private Swimming Pool",
          "Shared Swimming Pool",
          "Jacuzzi",
          "Gymnasium",
          "Sauna",
          "Steam Room",
          "BBQ Area",
          "Entertaining Area",
        ],
      },
      {
        category: "Building & Outdoor",
        items: [
          "Balcony",
          "Covered Parking",
          "Communal Gardens",
          "Children's Play Area",
          "Children's Nursery",
        ],
      },
      {
        category: "Connectivity & Lifestyle",
        items: [
          "Broadband Ready",
          "Pets Allowed",
          "Public Park",
          "Public Transport",
          "Restaurants",
          "Shops",
          "Tennis Courts",
        ],
      },
    ],
  },
  "binghatti-orchid": {
    floor: "Low Floor",
    view: "Community View",
    paymentTerms: "1,100,000 AED",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Furnished",
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Shared Swimming Pool",
          "Gymnasium",
        ],
      },
      {
        category: "Building & Lifestyle",
        items: [
          "Parking",
          "Entertaining Area",
        ],
      },
      {
        category: "Surroundings",
        items: [
          "Public Park (nearby)",
          "Shopping Mall (nearby)",
        ],
      },
    ],
  },
  "binghatti-emerald": {
    status: "Vacant",
    paymentTerms: "62,000 AED / 2 Cheques · 65,000 AED / 4 Cheques",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "State-of-the-art Gymnasium",
        ],
      },
      {
        category: "Building & Security",
        items: [
          "Grand Entrance Lobby",
          "Covered Parking",
          "24/7 Security",
        ],
      },
    ],
  },
  "damac-courestia-villa": {
    status: "Available",
    paymentTerms: "155,000 AED / Yearly",
    amenities: [
      {
        category: "Property Layout & Comfort",
        items: [
          "5 Bedrooms + Maid's Room",
          "6 Bathrooms",
          "Balcony",
          "Central A/C",
          "Marble Floors",
          "Built-in Wardrobes",
        ],
      },
      {
        category: "Furnishing & Kitchen",
        items: [
          "Part Furnished",
          "Fully Fitted Kitchen",
          "Premium Kitchen Appliances",
        ],
      },
      {
        category: "Private Outdoor & Parking",
        items: [
          "Private Garden",
          "Private Garage",
          "Covered Parking",
          "BBQ Area",
        ],
      },
      {
        category: "Leisure & Lifestyle",
        items: [
          "Gymnasium",
          "Private Swimming Pool",
          "Entertaining Area",
          "Pets Allowed",
        ],
      },
      {
        category: "Community Amenities (DAMAC Hills 2)",
        items: [
          "Shared Swimming Pool",
          "Children's Play Area",
          "Communal Gardens",
          "Public Park",
          "Public Parking",
          "Shopping Mall & Retail Shops",
        ],
      },
    ],
  },
  "reef-residence": {
    unitTitle: "Unit 2206",
    status: "Vacant",
    paymentTerms: "45,000 AED / 2 Cheques",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "Gymnasium",
        ],
      },
      {
        category: "Building & Security",
        items: [
          "Covered Parking",
          "24/7 Security",
        ],
      },
    ],
  },
  "binghatti-tulip-3": {
    status: "Vacant",
    paymentTerms: "55,000 AED / Year",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "Gymnasium",
        ],
      },
      {
        category: "Building & Security",
        items: [
          "Covered Parking",
          "24/7 Security",
        ],
      },
    ],
  },
  "binghatti-tulip-4": {
    status: "Vacant",
    paymentTerms: "60,000 AED / 6 Cheques",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Swimming Pool",
          "Gymnasium",
        ],
      },
      {
        category: "Building & Security",
        items: [
          "Covered Parking",
          "24/7 Security",
        ],
      },
    ],
  },
  "binghatti-lavender": {
    status: "Vacant",
    paymentTerms: "60,000 AED / Year",
    amenities: [
      {
        category: "Interior & Comfort",
        items: [
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Central A/C",
          "Balcony",
        ],
      },
      {
        category: "Wellness & Leisure",
        items: [
          "Private Swimming Pool",
          "Gymnasium",
        ],
      },
      {
        category: "Building & Parking",
        items: [
          "Covered Parking",
          "Public Parking",
          "24/7 Security",
          "BBQ Area",
        ],
      },
      {
        category: "Surroundings",
        items: [
          "Public Park",
        ],
      },
    ],
  },
};

export default function ListingPageClient() {
  const params = useParams();
  const slug = params?.slug as string;
  const listing = LISTINGS_DATA.find((l) => l.slug === slug) as ListingWithSale | undefined;
  if (!listing) return notFound();
  return <ListingDetail listing={listing} extended={EXTENDED_SPECS[slug] ?? {}} />;
}

function ListingDetail({
  listing,
  extended,
}: {
  listing: ListingWithSale;
  extended: typeof EXTENDED_SPECS[string];
}) {
  const [activeImg, setActiveImg] = useState(0);
  const pageBg = "#FFFFFF";
  const { t } = useLanguage();

  const prev = () => setActiveImg((c) => (c === 0 ? listing.images.length - 1 : c - 1));
  const next = () => setActiveImg((c) => (c === listing.images.length - 1 ? 0 : c + 1));

  const isPhantom = listing.slug === "binghatti-phantom";
  const isSaleListing = listing.status === "for-sale";

  // Build specs bar
  const specs = [
    { icon: <Building2 size={16} />, label: t("listing.details"), value: listing.category },
    { icon: <Bed size={16} />, label: t("card.bed") + "s", value: listing.beds === 0 ? t("card.studio") : listing.slug === "damac-courestia-villa" ? "5 + Maid" : `${listing.beds}` },
    { icon: <Bath size={16} />, label: t("card.bath") + "s", value: `${listing.baths}` },
    { icon: <Maximize2 size={16} />, label: t("card.sqft"), value: `${listing.sqft}` },
    ...(extended.floor ? [{ icon: <Layers size={16} />, label: "Floor", value: extended.floor }] : []),
    ...(extended.view ? [{ icon: <Eye size={16} />, label: "View", value: extended.view }] : []),
    ...(extended.parking ? [{ icon: <Car size={16} />, label: "Parking", value: extended.parking }] : []),
    ...(extended.status ? [{ icon: <CircleDot size={16} />, label: t("listing.status_prefix"), value: extended.status }] : []),
  ];

  // Default amenities for non-phantom listings
  const amenities = extended.amenities ?? [
    {
      category: "Features",
      items: [
        listing.furnishedKey ? "Fully Furnished" : "Unfurnished",
        "Air Conditioning",
        "Built-in Wardrobes",
        "Central A/C & Heating",
        "Gym",
        "Swimming Pool",
        "Covered Parking",
        "24/7 Security",
        "High-speed Internet",
        "Concierge Service",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />

      <main>
        {/* ── Hero Gallery ── */}
        <div className="w-full bg-[#0A0A0A]" style={{ paddingTop: "72px" }}>
          <div className="flex gap-1 h-[420px] md:h-[520px]">

            {/* Main large image — left ~62% */}
            <div className="relative overflow-hidden flex-[62]">
              <img
                src={listing.images[activeImg]}
                alt={listing.project}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Arrow nav */}
              <button onClick={prev} aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronRight size={18} />
              </button>

              {/* Price tag bottom-left */}
              <div className="absolute bottom-5 left-5 z-10">
                <span className="font-body text-[11px] tracking-[0.18em] uppercase text-[#C5A059] block mb-1">
                  {listing.category} · {isSaleListing ? "For Sale" : "For Rent"}
                </span>
                <p className="font-display text-white text-[22px] leading-none">
                  {isSaleListing
                    ? listing.salePrice
                    : isPhantom
                      ? "110,000 AED Yearly"
                      : (listing.slug === "binghatti-tulip-2" || listing.slug === "binghatti-tulip-1")
                        ? "From 75,000 AED Yearly"
                        : listing.slug === "binghatti-lavender"
                          ? "60,000 AED / Year"
                          : ""}
                </p>
              </div>
            </div>

            {/* 2×2 grid — right ~38% */}
            {listing.images.length > 1 && (
              <div className="flex-[38] grid grid-cols-2 grid-rows-2 gap-1">
                {listing.images.slice(1, 5).map((img, idx) => {
                  const realIdx = idx + 1;
                  const isLast = idx === 3 && listing.images.length > 5;
                  return (
                    <button
                      key={realIdx}
                      onClick={() => setActiveImg(realIdx)}
                      className="relative overflow-hidden w-full h-full"
                    >
                      <img
                        src={img}
                        alt={`View ${realIdx + 1}`}
                        className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500"
                        style={{ opacity: activeImg === realIdx ? 1 : 0.85 }}
                      />
                      {activeImg === realIdx && (
                        <div className="absolute inset-0 ring-2 ring-[#C5A059] pointer-events-none" />
                      )}
                      {isLast && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="font-body text-white text-sm tracking-widest">
                            +{listing.images.length - 5} more
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Title bar below gallery */}
          <div className="px-6 md:px-14 py-5 bg-[#0A0A0A]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <h1 className="font-display text-white text-2xl md:text-3xl leading-tight">
                  {listing.project}
                </h1>
                <div className="flex items-center gap-2 mt-1.5">
                  <MapPin size={13} className="text-[#C5A059]" />
                  <span className="font-body text-white/70 text-[13px]">{listing.location}</span>
                </div>
              </div>
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#C5A059] bg-white/5 border border-[#C5A059]/30 px-4 py-2 rounded-full self-start sm:self-auto">
                {isSaleListing ? "Available for Sale" : "Available for Rent"}
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── Specs Bar ── */}
        <div className="bg-[#1A1A1A] px-6 md:px-14 py-3">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-between">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-[#C5A059]">{s.icon}</span>
                <div>
                  <p className="font-body text-[9px] text-white/40 tracking-[0.14em] uppercase leading-none mb-0.5">{s.label}</p>
                  <p className="font-body text-[12px] text-white font-medium">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-[1200px] py-16">

          {/* Back link */}
          <Link href={isSaleListing ? "/sale" : "/rent"} className="inline-flex items-center gap-2 text-[#C5A059] font-body text-sm hover:gap-3 transition-all duration-200 mb-12 block">
            <ArrowLeft size={15} />
            {t("listing.back")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

            {/* LEFT */}
            <div>
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-14"
              >
                <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-3 block">{t("listing.overview")}</span>
                <h2 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">{t("listing.about_property")}</h2>
                <div className="w-10 h-px bg-[#C5A059] mb-6" />
                <p className="font-body text-[#5A5A5A] text-[15px] md:text-[16px] leading-[1.9] font-light">
                  {listing.description}
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-3 block">{t("listing.details")}</span>
                <h2 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">{t("listing.property_features")}</h2>
                <div className="w-10 h-px bg-[#C5A059] mb-10" />

                <div className="flex flex-col gap-10">
                  {amenities.map((group) => (
                    <div key={group.category}>
                      <h3 className="font-body text-[11px] tracking-[0.22em] uppercase text-[#C5A059] mb-4">
                        {group.category}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                        {group.items.map((item) => (
                          <div key={item} className="flex items-center gap-2.5">
                            <span className="w-4 h-4 rounded-full border border-[#C5A059]/50 bg-[#C5A059]/8 flex items-center justify-center flex-shrink-0">
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3l2 2 4-4" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="font-body text-[13px] text-[#4A4A4A]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* QR Code — Tulip 2806 only */}
              {listing.slug === "binghatti-tulip-2" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-tulip-2806.png"
                        alt="QR Code – Binghatti Tulip 2806"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Tulip 3007 only */}
              {listing.slug === "binghatti-tulip-1" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-tulip-3007.png"
                        alt="QR Code – Binghatti Tulip 3007"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — NEVA Residences 1BR only */}
              {listing.slug === "neva-residences" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-bt2806.png"
                        alt="QR Code – NEVA Residences Unit 1 B/R"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Lavender only */}
              {listing.slug === "binghatti-lavender" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-lavender.png"
                        alt="QR Code – Binghatti Lavender"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Orchid only */}
              {listing.slug === "binghatti-orchid" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-orchid.png"
                        alt="QR Code – Binghatti Orchid"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Reef Residence 2206 only */}
              {listing.slug === "reef-residence" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-reef-2206.png"
                        alt="QR Code – Reef Residence Unit 2206"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Binghatti Emerald 1BR only */}
              {listing.slug === "binghatti-emerald" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-emerald-1br.png"
                        alt="QR Code – Binghatti Emerald 1BR"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Tulip Exclusive only */}
              {listing.slug === "binghatti-tulip-3" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-tulip-exclusive.png"
                        alt="QR Code – Binghatti Tulip Exclusive Studio"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Tulip Studio only */}
              {listing.slug === "binghatti-tulip-4" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-tulip-studio.png"
                        alt="QR Code – Binghatti Tulip Studio"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Courestia Villa 152 only */}
              {listing.slug === "damac-courestia-villa" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-courestia-villa.png"
                        alt="QR Code – DAMAC Courestia Villa 152"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* QR Code — Phantom only */}
              {listing.slug === "binghatti-phantom" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-16 pt-12 border-t border-[#F0EBE1]"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                      {t("listing.scan_for_details")}
                    </span>
                    <div className="w-8 h-px bg-[#C5A059] mb-8" />
                    <div
                      className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                      style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                    >
                      <img
                        src="/qr-phantom.png"
                        alt="QR Code – Binghatti Phantom"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                      {t("listing.scan_description")}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* RIGHT — Sticky card */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="sticky top-28 flex flex-col gap-4"
              >
                {/* Price card */}
                <div className="bg-white border border-[#EDE6D8] rounded-2xl p-6"
                  style={{ boxShadow: "0 4px 32px rgba(197,160,89,0.12)" }}>
                  <p className="font-body text-[11px] text-[#9A9A9A] tracking-[0.18em] uppercase mb-1">
                  {isSaleListing ? t("listing.sale_price") : t("listing.asking_price")}
                </p>
                  {isSaleListing ? (
                    <div>
                      <p className="font-display text-[36px] text-[#1A1A1A] leading-none">{listing.salePrice}</p>
                      {listing.saleContract && (
                        <div className="flex items-center gap-2 mt-3">
                          <CreditCard size={13} className="text-[#C5A059]" />
                          <span className="font-body text-[13px] text-[#5A5A5A]">{listing.saleContract}</span>
                        </div>
                      )}
                    </div>
                  ) : (listing.slug === "binghatti-tulip-2" || listing.slug === "binghatti-tulip-1") ? (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">75,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">4 Cheques</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">80,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">6 Cheques</span>
                      </div>
                    </div>
                  ) : listing.slug === "binghatti-emerald" ? (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">62,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">2 Cheques</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">65,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">4 Cheques</span>
                      </div>
                    </div>
                  ) : listing.slug === "reef-residence" ? (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">45,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">2 Cheques</span>
                      </div>
                    </div>
                  ) : listing.slug === "binghatti-tulip-3" ? (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">55,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">4 Cheques</span>
                      </div>
                    </div>
                  ) : listing.slug === "binghatti-tulip-4" ? (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">60,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">6 Cheques</span>
                      </div>
                    </div>
                  ) : listing.slug === "damac-courestia-villa" ? (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">155,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">4 Cheques</span>
                      </div>
                    </div>
                  ) : listing.slug === "binghatti-lavender" ? (
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">5,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">Monthly · 12 Cheques</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <p className="font-display text-[28px] text-[#1A1A1A] leading-none">60,000 AED</p>
                        <span className="font-body text-[12px] text-[#9A9A9A]">Yearly</span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-display text-[36px] text-[#1A1A1A] leading-none">
                      {isPhantom ? "110,000 AED" : listing.slug === "binghatti-aurora" ? "6,000 AED" : "80,000 AED"}
                    </p>
                  )}
                  {extended.paymentTerms && !isSaleListing && listing.slug !== "binghatti-tulip-2" && listing.slug !== "binghatti-tulip-1" && listing.slug !== "binghatti-tulip-4" && listing.slug !== "binghatti-tulip-3" && listing.slug !== "reef-residence" && listing.slug !== "binghatti-emerald" && listing.slug !== "damac-courestia-villa" && (
                    <div className="flex items-center gap-2 mt-3">
                      <CreditCard size={13} className="text-[#C5A059]" />
                      <span className="font-body text-[13px] text-[#5A5A5A]">{extended.paymentTerms}</span>
                    </div>
                  )}

                  <div className="w-8 h-px bg-[#C5A059] my-5" />

                  <div className="flex flex-col gap-2.5">
                    {[
                      listing.category,
                      listing.location,
                      ...(extended.status ? [`Status: ${extended.status}`] : []),
                      ...(listing.furnishedKey ? [t("listing.fully_furnished")] : []),
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                        <span className="font-body text-[13px] text-[#5A5A5A]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agent card */}
                <div className="bg-white border border-[#EDE6D8] rounded-2xl p-6"
                  style={{ boxShadow: "0 4px 32px rgba(197,160,89,0.12)" }}>
                  <div className="flex items-center gap-4 mb-6">
                    <img src="/dulce-portrait.png" alt="Dulce Escobar"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#EDE6D8]" />
                    <div>
                      <p className="font-body text-[10px] text-[#9A9A9A] tracking-[0.12em] uppercase mb-0.5">{t("listing.listed_by")}</p>
                      <p className="font-display text-[19px] text-[#1A1A1A] leading-tight">Dulce Escobar</p>
                      <p className="font-body text-[12px] text-[#7A7A7A]">{t("listing.luxury_re")}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/971588473125"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-[#C5A059] text-white font-body text-[12px] tracking-[0.16em] uppercase hover:bg-[#b08c45] transition-colors duration-200"
                    >
                      <MessageCircle size={14} />
                      {t("listing.whatsapp")}
                    </a>
                    <a
                      href="tel:+971588473125"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full border border-[#C5A059] text-[#C5A059] font-body text-[12px] tracking-[0.16em] uppercase hover:bg-[#C5A059] hover:text-white transition-colors duration-200"
                    >
                      <Phone size={14} />
                      {t("listing.call_now")}
                    </a>
                    <Link
                      href="/contact-us"
                      className="flex items-center justify-center w-full py-3.5 rounded-full border border-[#EDE6D8] text-[#7A7A7A] font-body text-[12px] tracking-[0.16em] uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-200"
                    >
                      {t("listing.book_viewing")}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </main>

      <Footer bgColor={pageBg} />
    </div>
  );
}
