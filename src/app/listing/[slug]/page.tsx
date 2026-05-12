import type { Metadata } from "next";
import { LISTINGS_DATA } from "@/components/sections/investment-listings";
import ListingPageClient from "./ListingPageClient";

// Per-listing SEO metadata
const LISTING_META: Record<string, { title: string; description: string }> = {
  "binghatti-tulip-3007": {
    title: "Binghatti Tulip – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Fully furnished 1-bedroom apartment for rent in Binghatti Tulip, JVC Dubai. Marina views, premium interiors, resort-style amenities. From 75,000 AED/year. Contact Dulce Escobar.",
  },
  "binghatti-tulip-2806": {
    title: "Binghatti Tulip – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Stylish 1-bedroom apartment for rent in Binghatti Tulip, Jumeirah Village Circle. Fully furnished with community views, built-in wardrobes and premium finishes. 75,000 AED/year.",
  },
  "binghatti-aurora": {
    title: "Binghatti Aurora – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Modern 1-bedroom apartment for rent in Binghatti Aurora, JVC Dubai. City views, fully fitted kitchen, pool and gym access. 6,000 AED/month. Enquire with Dulce Escobar.",
  },
  "binghatti-phantom": {
    title: "Binghatti Phantom – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Exquisite fully furnished 1-bedroom apartment for rent in Binghatti Phantom, JVC Dubai. Designer interiors, community views, resort amenities. 110,000 AED/year.",
  },
  "binghatti-azure-sale": {
    title: "Binghatti Azure – Studio For Sale | JVC Dubai | Dulce Escobar",
    description:
      "Investment-grade studio apartment for sale in Binghatti Azure, JVC Dubai. Currently tenanted until 2028. Ideal buy-to-let opportunity. Contact Dulce Escobar for details.",
  },
  "binghatti-aurora-sale": {
    title: "Binghatti Aurora – 1 Bed Apartment For Sale | JVC Dubai | Dulce Escobar",
    description:
      "1-bedroom apartment for sale in Binghatti Aurora, JVC Dubai. Modern finishes, fully fitted kitchen, pool and gym. Prime JVC investment opportunity. Contact Dulce Escobar.",
  },
  "neva-residences-1br": {
    title: "NEVA Residences – 1 Bed Apartment for Rent | JVC Dubai | Dulce Escobar",
    description:
      "Spacious 1-bedroom apartment for rent in NEVA Residences, JVC Dubai. 77.84 Sqm, 2 bathrooms, fully furnished with luxury finishes. 80,000 AED/year. Contact Dulce Escobar.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = LISTINGS_DATA.find((l) => l.slug === slug);
  const meta = LISTING_META[slug];

  if (!listing || !meta) {
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
      images: listing.images[0] ? [{ url: listing.images[0] }] : [],
    },
  };
}

export default function ListingPage() {
  return <ListingPageClient />;
}
