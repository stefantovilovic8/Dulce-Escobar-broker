import type { Metadata } from "next";
import ListingPageClient from "@/app/listing/[slug]/ListingPageClient";

const LISTING_META: Record<string, { title: string; description: string; image?: string }> = {
  "binghatti-tulip-1": {
    title: "Binghatti Tulip – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description: "Fully furnished 1-bedroom apartment for rent in Binghatti Tulip, JVC Dubai. Marina views, premium interiors, resort-style amenities. From 75,000 AED/year. Contact Dulce Escobar.",
    image: "/tulip-1.jpg",
  },
  "binghatti-tulip-2": {
    title: "Binghatti Tulip – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description: "Stylish 1-bedroom apartment for rent in Binghatti Tulip, JVC Dubai. Fully furnished with community views, built-in wardrobes and premium finishes. 75,000 AED/year.",
    image: "/tulip2-1.jpg",
  },
  "binghatti-tulip-3": {
    title: "Binghatti Tulip – Exclusive Studio for Rent | JVC Dubai | Dulce Escobar",
    description: "Exclusive studio for rent in Binghatti Tulip, JVC Dubai. 33.38 Sqm, premium finishes, fitted kitchen, pool & gym. 55,000 AED/year. Contact Dulce Escobar.",
    image: "/tulip-exclusive-1.jpg",
  },
  "binghatti-tulip-4": {
    title: "Binghatti Tulip – Studio for Rent | JVC Dubai | Dulce Escobar",
    description: "Elegant studio for rent in Binghatti Tulip, JVC Dubai. 33.43 Sqm, modern finishes, fully fitted kitchen, pool & gym. 60,000 AED/year — payable in 6 cheques. Contact Dulce Escobar.",
    image: "/tulip-studio-1.jpg",
  },
  "binghatti-aurora": {
    title: "Binghatti Aurora – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description: "Modern 1-bedroom apartment for rent in Binghatti Aurora, JVC Dubai. City views, fully fitted kitchen, pool and gym access. 6,000 AED/month. Enquire with Dulce Escobar.",
    image: "/aurora-4.jpg",
  },
  "binghatti-phantom": {
    title: "Binghatti Phantom – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description: "Exquisite fully furnished 1-bedroom apartment for rent in Binghatti Phantom, JVC Dubai. Designer interiors, community views, resort amenities. 110,000 AED/year.",
    image: "/phantom-1.jpg",
  },
  "binghatti-orchid": {
    title: "Binghatti Orchid – 1 Bed Apartment for Rent | Dubai | Dulce Escobar",
    description: "1-bedroom apartment in Binghatti Orchid, Dubai. Premium finishes, pool and gym. Contact Dulce Escobar.",
    image: "/orchid-1.jpg",
  },
  "binghatti-lavender": {
    title: "Binghatti Lavender – Studio for Rent | JVC Dubai | Dulce Escobar",
    description: "Modern studio for rent in Binghatti Lavender, JVC Dubai. 35.55 Sqm, premium finishes, rooftop pool and gym. 60,000 AED/year. Contact Dulce Escobar.",
    image: "/lavender-1.jpg",
  },
  "neva-residences": {
    title: "NEVA Residences – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description: "Spacious 1-bedroom apartment for rent in NEVA Residences, JVC Dubai. 77.84 Sqm, 2 bathrooms, fully furnished with luxury finishes. 80,000 AED/year. Contact Dulce Escobar.",
    image: "/bt2806-1.jpg",
  },
  "reef-residence": {
    title: "Reef Residence – 1 Bed Apartment for Rent | Al Barsha South Fourth Dubai | Dulce Escobar",
    description: "High-floor 1-bedroom apartment for rent on the 22nd floor of Reef Residence, Al Barsha South Fourth, Dubai. 502.57 Sq. Ft., dedicated parking. 45,000 AED/year — 2 cheques. Contact Dulce Escobar.",
    image: "/reef-2206-1.jpg",
  },
  "binghatti-emerald": {
    title: "Binghatti Emerald – Luxury 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description: "Luxury 1-bedroom apartment for rent in Binghatti Emerald, JVC Dubai. 59.99 Sqm, premium finishes, pool & gym. From 62,000 AED/year. Contact Dulce Escobar.",
    image: "/emerald-1br-1.jpg",
  },
  "damac-courestia-villa": {
    title: "Premium 5-Bedroom Villa for Rent – Courestia Cluster, DAMAC Hills 2 | Dulce Escobar",
    description: "Stunning 5-bedroom + maid's room villa for rent in Courestia Cluster, DAMAC Hills 2 Dubai. 1,881.53 Sq. Ft., private pool, private garden, private garage. 155,000 AED/year. Contact Dulce Escobar.",
    image: "/courestia-villa-4.jpg",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = LISTING_META[slug];
  if (!meta) {
    return { title: "Property for Rent | Dulce Escobar Real Estate Dubai" };
  }
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      ...(meta.image ? { images: [{ url: meta.image }] } : {}),
    },
  };
}

export default function RentListingPage() {
  return <ListingPageClient />;
}
