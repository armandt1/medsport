import type { Metadata } from "next";
import type { ServiceLandingData } from "@/lib/services";
import { SITE_URL, site } from "@/lib/site";

export function metadataForService(service: ServiceLandingData): Metadata {
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      type: "website",
      locale: "es_CL",
      url: `/${service.slug}`,
      title: `${service.name} | Centro Medsport`,
      description: service.description,
      siteName: site.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${service.name} - Centro Medsport` }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Centro Medsport`,
      description: service.description,
      images: ["/opengraph-image"]
    }
  };
}

export function schemaForService(service: ServiceLandingData) {
  const url = `${SITE_URL}/${service.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      description: service.description,
      url,
      areaServed: { "@type": "City", name: "Temuco" },
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#medsport-temuco`,
        name: site.name,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.streetAddress,
          addressLocality: site.address.addressLocality,
          addressRegion: site.address.addressRegion,
          addressCountry: site.address.addressCountry
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: service.shortName, item: url }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];
}
