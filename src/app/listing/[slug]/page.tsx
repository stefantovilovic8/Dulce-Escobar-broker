import { redirect } from "next/navigation";

// Old /listing/[slug] URLs — redirect to new /rent/[slug] or /sale/[slug]
const SALE_SLUGS = ["binghatti-azure", "binghatti-aurora", "binghatti-orchid"];

export default async function ListingRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (SALE_SLUGS.includes(slug)) {
    redirect(`/sale/${slug}`);
  }
  redirect(`/rent/${slug}`);
}
