import Head from "next/head"
import { siteConfig } from "@/lib/seo-config"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  structuredData?: any
}

export default function SEO({
  title = siteConfig.name,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  image = siteConfig.socialImage,
  url = siteConfig.url,
  type = "website",
  structuredData,
}: SEOProps) {
  const fullUrl = url.startsWith("http") ? url : `${siteConfig.url}${url}`
  const fullImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      {siteConfig.facebook.appId && <meta property="fb:app_id" content={siteConfig.facebook.appId} />}

      {/* Twitter */}
      <meta name="twitter:card" content={siteConfig.twitter.card} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content={siteConfig.twitter.creator} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content={siteConfig.themeColor} />
    </Head>
  )
}
