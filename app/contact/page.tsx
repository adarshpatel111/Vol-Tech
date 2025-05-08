import type { Metadata } from "next"
import { pageSeoConfig } from "@/lib/seo-config"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: pageSeoConfig.contact.title,
  description: pageSeoConfig.contact.description,
  keywords: pageSeoConfig.contact.keywords,
  openGraph: {
    title: pageSeoConfig.contact.title,
    description: pageSeoConfig.contact.description,
    images: [pageSeoConfig.contact.image],
  },
  twitter: {
    title: pageSeoConfig.contact.title,
    description: pageSeoConfig.contact.description,
    images: [pageSeoConfig.contact.image],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
