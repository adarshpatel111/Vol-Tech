import type { Metadata } from "next"
import { pageSeoConfig } from "@/lib/seo-config"
import ProductsPageClient from "./ProductsPageClient"

export const metadata: Metadata = {
  title: pageSeoConfig.products.title,
  description: pageSeoConfig.products.description,
  keywords: pageSeoConfig.products.keywords,
  openGraph: {
    title: pageSeoConfig.products.title,
    description: pageSeoConfig.products.description,
    images: [pageSeoConfig.products.image],
  },
  twitter: {
    title: pageSeoConfig.products.title,
    description: pageSeoConfig.products.description,
    images: [pageSeoConfig.products.image],
  },
}

export default function ProductsPage() {
  return <ProductsPageClient />
}
