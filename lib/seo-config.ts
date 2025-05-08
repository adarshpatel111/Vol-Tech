// SEO configuration for the website
export const siteConfig = {
  name: "Vol-Tech Transformer Industries",
  url: "https://voltechtransformer.com",
  description:
    "Leading manufacturer of high-quality transformers since 1998. ISO 9001-2000 certified company based in Waghodia, Vadodara, Gujarat, India.",
  keywords: [
    "transformer manufacturer",
    "Vol-Tech Industries",
    "power transformer",
    "distribution transformer",
    "transformer supplier",
    "electrical transformer",
    "Waghodia",
    "Vadodara",
    "Gujarat",
    "India",
    "ISO 9001-2000 certified",
    "furnace transformer",
    "rectifier transformer",
    "auto voltage transformer",
  ],
  authors: [
    {
      name: "Vol-Tech Transformer Industries",
      url: "https://voltechtransformer.com",
    },
  ],
  creator: "Vol-Tech Transformer Industries",
  themeColor: "#8BC34A",
  colorScheme: "light",
  socialImage: "/images/og-image.jpg",
  twitter: {
    card: "summary_large_image",
    creator: "@voltech",
  },
  facebook: {
    appId: "", // Add your Facebook App ID if available
  },
}

// Page-specific SEO configurations
export const pageSeoConfig = {
  home: {
    title: "Vol-Tech Transformer Industries | High-Quality Transformer Manufacturer",
    description:
      "Leading manufacturer of high-quality transformers since 1998. ISO 9001-2000 certified company based in Waghodia, Vadodara, Gujarat, India.",
    keywords: [
      "transformer manufacturer",
      "Vol-Tech Industries",
      "power transformer",
      "distribution transformer",
      "Vadodara",
      "Gujarat",
      "India",
    ],
    image: "/images/og-home.jpg",
  },
  about: {
    title: "About Us | Vol-Tech Transformer Industries",
    description:
      "Vol-Tech Industries is an ISO 9001-2000 certified company established in 1998, manufacturing high-quality transformers in Waghodia, Vadodara.",
    keywords: [
      "about Vol-Tech",
      "transformer manufacturer history",
      "ISO 9001-2000 certified",
      "Waghodia",
      "Vadodara",
      "Gujarat",
      "India",
    ],
    image: "/images/og-about.jpg",
  },
  products: {
    title: "Products | Vol-Tech Transformer Industries",
    description:
      "High-quality transformers including distribution, power, furnace, rectifier, auto voltage, and special purpose transformers manufactured by Vol-Tech Industries.",
    keywords: [
      "transformer products",
      "distribution transformer",
      "power transformer",
      "furnace transformer",
      "rectifier transformer",
      "auto voltage transformer",
      "special purpose transformer",
      "Vol-Tech",
      "Gujarat",
    ],
    image: "/images/og-products.jpg",
  },
  services: {
    title: "Services | Vol-Tech Transformer Industries",
    description:
      "Comprehensive transformer services including vector group conversion, voltage ratio conversion, tap changer modifications, and maintenance services.",
    keywords: [
      "transformer services",
      "transformer maintenance",
      "vector group conversion",
      "voltage ratio conversion",
      "tap changer modification",
      "transformer repair",
      "Vol-Tech",
      "Vadodara",
    ],
    image: "/images/og-services.jpg",
  },
  contact: {
    title: "Contact Us | Vol-Tech Transformer Industries",
    description:
      "Contact Vol-Tech Transformer Industries in Waghodia, Vadodara, Gujarat for high-quality transformers and services. Call +91 9825307217 or email info@voltechtransformer.com.",
    keywords: [
      "contact transformer manufacturer",
      "Vol-Tech contact",
      "transformer inquiry",
      "Waghodia",
      "Vadodara",
      "Gujarat",
      "India",
    ],
    image: "/images/og-contact.jpg",
  },
}

// Generate structured data for the organization
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vol-Tech Transformer Industries",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "878/12 SAHJANAND RICE MILL COMPOUND",
      addressLocality: "WAGHODIA",
      addressRegion: "VADODARA",
      postalCode: "391 760",
      addressCountry: "INDIA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9825307217",
        contactType: "sales",
        email: "info@voltechtransformer.com",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9998983266",
        contactType: "technical support",
        email: "info@voltechtransformer.com",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/voltechtransformer",
      "https://twitter.com/voltech",
      "https://www.linkedin.com/company/vol-tech-transformer-industries",
    ],
    foundingDate: "1998",
    founders: [
      {
        "@type": "Person",
        name: "Ghanshyam Patel",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
    award: "ISO 9001-2000 Certification",
  }
}

// Generate structured data for products
export function generateProductSchema(productName: string, description: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: description,
    brand: {
      "@type": "Brand",
      name: "Vol-Tech",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vol-Tech Transformer Industries",
    },
    image: `${siteConfig.url}${image}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Vol-Tech Transformer Industries",
      },
    },
  }
}

// Generate structured data for services
export function generateServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Vol-Tech Transformer Industries",
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  }
}

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}
