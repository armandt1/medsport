import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: site.name,
  title: {
    default: "Medsport Temuco | Kinesiología y Entrenamiento Personalizado",
    template: "%s | Medsport Temuco"
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Salud, rehabilitación y entrenamiento deportivo",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: site.name,
    title: "Medsport Temuco | Kinesiología y Entrenamiento Personalizado",
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Centro Medsport Temuco - Kinesiología, rehabilitación y entrenamiento"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Medsport Temuco | Kinesiología y Entrenamiento",
    description: site.description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081521",
  colorScheme: "light"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  url: SITE_URL,
  telephone: site.phone,
  sameAs: [site.instagram, site.facebook]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  inLanguage: "es-CL",
  publisher: { "@id": `${SITE_URL}/#organization` }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" className={`${manrope.variable} ${sora.variable}`}>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
