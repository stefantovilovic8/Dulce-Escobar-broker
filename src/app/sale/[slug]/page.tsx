import type { Metadata } from "next";
import ListingPageClient from "@/app/listing/[slug]/ListingPageClient";

const LISTING_META: Record<string, { title: string; description: string; image?: string }> = {
  "binghatti-azure-sale": {
    title: "Binghatti Azure – Studio For Sale | JVC Dubai | Dulce Escobar",
    description: "Investment-grade studio apartment for sale in Binghatti Azure, JVC Dubai. Currently tenanted until 2028. Ideal buy-to-let opportunity. Contact Dulce Escobar for details.",
    image: "/azure-7.jpg",
  },
  "binghatti-aurora-sale": {
    title: "Binghatti Aurora – Studio For Sale | JVC Dubai | Dulce Escobar",
    description: "Studio apartment for sale in Binghatti Aurora, JVC Dubai. Modern finishes, fully fitted kitchen, pool and gym. Prime JVC investment opportunity. Contact Dulce Escobar.",
    image: "/aurora-4.jpg",
  },
  "binghatti-orchid": {
    title: "Binghatti Orchid – 1 Bed Apartment For Sale | Al Barsha South Fourth Dubai | Dulce Escobar",
    description: "1-bedroom apartment for sale in Binghatti Orchid, Al Barsha South Fourth, Dubai. 69.54 Sqm, premium finishes, pool and gym. 1,100,000 AED. High ROI potential. Contact Dulce Escobar.",
    image: "/orchid-1.jpg",
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
    return { title: "Property For Sale | Dulce Escobar Real Estate Dubai" };
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

export default function SaleListingPage() {
  return <ListingPageClient />;
}
