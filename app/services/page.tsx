import type { Metadata } from "next"
import { pageSeoConfig } from "@/lib/seo-config"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: pageSeoConfig.services.title,
  description: pageSeoConfig.services.description,
  keywords: pageSeoConfig.services.keywords,
  openGraph: {
    title: pageSeoConfig.services.title,
    description: pageSeoConfig.services.description,
    images: [pageSeoConfig.services.image],
  },
  twitter: {
    title: pageSeoConfig.services.title,
    description: pageSeoConfig.services.description,
    images: [pageSeoConfig.services.image],
  },
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
