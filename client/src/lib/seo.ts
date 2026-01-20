/**
 * SEO Utilities for Два-Кадра Studio
 * Handles meta tags, structured data, and SEO optimization
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export const DEFAULT_SEO: SEOConfig = {
  title: "Два-Кадра - Детская студия видеотворчества в Ярославле",
  description:
    "Детская студия видеотворчества в Ярославле. Учим детей писать сценарии, снимать, монтировать. Ежовости для телеканала 'Я первый'. Фестивальные награды. С 2017 года.",
  keywords: [
    "студия видеотворчества",
    "детская студия",
    "Ярославль",
    "видеомонтаж",
    "сценарий",
    "кинематография",
    "Ежовости",
    "детское кино",
    "актерское мастерство",
  ],
  image: "/images/hero-kids-filming.jpg",
  url: "https://dva-kadra-studio.manus.space/",
  type: "website",
};

export function updateMetaTags(config: SEOConfig = DEFAULT_SEO) {
  // Update title
  document.title = config.title;
  updateMetaTag("og:title", config.title);
  updateMetaTag("twitter:title", config.title);

  // Update description
  updateMetaTag("description", config.description);
  updateMetaTag("og:description", config.description);
  updateMetaTag("twitter:description", config.description);

  // Update keywords
  if (config.keywords) {
    updateMetaTag("keywords", config.keywords.join(", "));
  }

  // Update image
  if (config.image) {
    updateMetaTag("og:image", config.image);
    updateMetaTag("twitter:image", config.image);
  }

  // Update URL
  if (config.url) {
    updateMetaTag("og:url", config.url);
    updateMetaTag("twitter:url", config.url);
  }

  // Update type
  if (config.type) {
    updateMetaTag("og:type", config.type);
  }
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) ||
    document.querySelector(`meta[property="${name}"]`) || null;

  if (!element) {
    element = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("twitter:")) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Два-Кадра",
    image: "/images/hero-kids-filming.jpg",
    description:
      "Детская студия видеотворчества в Ярославле. Учим детей писать сценарии, снимать, монтировать, работать в кадре и в команде.",
    url: "https://dva-kadra-studio.manus.space/",
    telephone: "+7 (XXX) XXX-XX-XX",
    email: "info@dva-kadra.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ярославль",
      addressLocality: "Ярославль",
      addressRegion: "Ярославская область",
      postalCode: "150000",
      addressCountry: "RU",
    },
    priceRange: "$$",
    sameAs: ["https://vk.com/2kadra", "https://t.me/dva_kadra"],
    foundingDate: "2017",
    areaServed: "Ярославль",
    serviceType: "Образование и творчество",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Два-Кадра",
    url: "https://dva-kadra-studio.manus.space/",
    logo: "/images/logo.png",
    description: "Детская студия видеотворчества в Ярославле с 2017 года",
    sameAs: ["https://vk.com/2kadra", "https://t.me/dva_kadra"],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "ru",
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Image optimization hints
export const IMAGE_OPTIMIZATION = {
  hero: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px",
    formats: ["webp", "jpg"],
  },
  gallery: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    formats: ["webp", "jpg"],
  },
  thumbnail: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
    formats: ["webp", "jpg"],
  },
};
