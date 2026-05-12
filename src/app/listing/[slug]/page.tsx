import type { Metadata } from "next";
import ListingPageClient from "./ListingPageClient";

// Per-listing SEO metadata (no client imports needed here)
const LISTING_META: Record<string, { title: string; description: string; image?: string }> = {
  "binghatti-tulip-3007": {
    title: "Binghatti Tulip – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Fully furnished 1-bedroom apartment for rent in Binghatti Tulip, JVC Dubai. Marina views, premium interiors, resort-style amenities. From 75,000 AED/year. Contact Dulce Escobar.",
    image: "/tulip-1.jpg",
  },
  "binghatti-tulip-2806": {
    title: "Binghatti Tulip – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Stylish 1-bedroom apartment for rent in Binghatti Tulip, Jumeirah Village Circle. Fully furnished with community views, built-in wardrobes and premium finishes. 75,000 AED/year.",
    image: "/tulip2-1.jpg",
  },
  "binghatti-aurora": {
    title: "Binghatti Aurora – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Modern 1-bedroom apartment for rent in Binghatti Aurora, JVC Dubai. City views, fully fitted kitchen, pool and gym access. 6,000 AED/month. Enquire with Dulce Escobar.",
    image: "/aurora-4.jpg",
  },
  "binghatti-phantom": {
    title: "Binghatti Phantom – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Exquisite fully furnished 1-bedroom apartment for rent in Binghatti Phantom, JVC Dubai. Designer interiors, community views, resort amenities. 110,000 AED/year.",
    image: "/phantom-1.jpg",
  },
  "binghatti-azure-sale": {
    title: "Binghatti Azure – Studio For Sale | JVC Dubai | Dulce Escobar",
    description:
      "Investment-grade studio apartment for sale in Binghatti Azure, JVC Dubai. Currently tenanted until 2028. Ideal buy-to-let opportunity. Contact Dulce Escobar for details.",
    image: "/azure-7.jpg",
  },
  "binghatti-aurora-sale": {
    title: "Binghatti Aurora – 1 Bed Apartment For Sale | JVC Dubai | Dulce Escobar",
    description:
      "1-bedroom apartment for sale in Binghatti Aurora, JVC Dubai. Modern finishes, fully fitted kitchen, pool and gym. Prime JVC investment opportunity. Contact Dulce Escobar.",
    image: "/aurora-4.jpg",
  },
  "neva-residences-1br": {
    title: "NEVA Residences – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Spacious 1-bedroom apartment for rent in NEVA Residences, JVC Dubai. 77.84 Sqm, 2 bathrooms, fully furnished with luxury finishes. 80,000 AED/year. Contact Dulce Escobar.",
    image: "/bt2806-1.jpg",
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
    return {
      title: "Property Listing | Dulce Escobar Real Estate Dubai",
      description:
        "View luxury property listings in Dubai. Contact Dulce Escobar for expert real estate advice on buying, selling and renting in Dubai.",
    };
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

export default function ListingPage() {
  return <ListingPageClient />;
}
