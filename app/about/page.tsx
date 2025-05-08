import type { Metadata } from "next"
import { pageSeoConfig } from "@/lib/seo-config"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: pageSeoConfig.about.title,
  description: pageSeoConfig.about.description,
  keywords: pageSeoConfig.about.keywords,
  openGraph: {
    title: pageSeoConfig.about.title,
    description: pageSeoConfig.about.description,
    images: [pageSeoConfig.about.image],
  },
  twitter: {
    title: pageSeoConfig.about.title,
    description: pageSeoConfig.about.description,
    images: [pageSeoConfig.about.image],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
