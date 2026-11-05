import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import MaintenanceProvider from '@/components/MaintenanceProvider';
import { getBaseUrl } from '@/lib/api';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jobai.id";

export async function generateMetadata(): Promise<Metadata> {
  let title = "JOB-AI - Platform Rekrutmen Cerdas Berbasis AI";
  let description = "JOB-AI adalah platform rekrutmen berbasis AI terdepan di Indonesia untuk mempercepat pencocokan kandidat, screening CV otomatis, dan seleksi talenta terbaik.";
  let keywordsList = [
    "JOB-AI",
    "jobai",
    "job-ai",
    "job ai indonesia",
    "platform rekrutmen AI",
    "rekrutmen cerdas",
    "applicant tracking system AI",
    "screening CV otomatis",
    "lowongan kerja AI",
    "software rekrutmen UMKM"
  ];

  let logoUrl = `${siteUrl}/logo_hd.png`;

  try {
    // Next.js fetch API can be used directly on the server side
    const res = await fetch(`${getBaseUrl()}/config/public`, { next: { revalidate: 60 } });
    if (res.ok) {
      const config = await res.json();
      if (config.seo_title) {
        title = config.seo_title
          .replace(/AI[- ]?Recruit[- ]?Pro/gi, 'JOB-AI')
          .replace(/airecruit/gi, 'jobai');
      }
      if (config.seo_description) {
        description = config.seo_description
          .replace(/AI[- ]?Recruit[- ]?Pro/gi, 'JOB-AI')
          .replace(/airecruit/gi, 'jobai');
      }
      if (config.app_logo_url) {
        let cleanAppLogo = config.app_logo_url;
        if (cleanAppLogo.includes('airecruit-pro.com') || cleanAppLogo.includes('airecruitpro.com')) {
          cleanAppLogo = '/logo_hd.png';
        }
        logoUrl = cleanAppLogo.startsWith('http') 
          ? cleanAppLogo 
          : `${siteUrl}${cleanAppLogo.startsWith('/') ? '' : '/'}${cleanAppLogo}`;
      }
      if (config.seo_keywords) {
        if (typeof config.seo_keywords === 'string') {
          keywordsList = config.seo_keywords
            .replace(/AI[- ]?Recruit[- ]?Pro/gi, 'JOB-AI')
            .replace(/airecruit/gi, 'jobai')
            .split(',')
            .map((k: string) => k.trim())
            .filter(Boolean);
        } else if (Array.isArray(config.seo_keywords)) {
          keywordsList = config.seo_keywords.map((k: string) =>
            k.replace(/AI[- ]?Recruit[- ]?Pro/gi, 'JOB-AI').replace(/airecruit/gi, 'jobai')
          );
        }
      }
    }
  } catch (error) {
    console.error("Failed to fetch SEO metadata", error);
  }

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | JOB-AI",
    },
    description: description,
    keywords: keywordsList,
    authors: [{ name: "JOB-AI Team", url: siteUrl }],
    creator: "JOB-AI",
    publisher: "JOB-AI",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: title,
      description: description,
      url: siteUrl,
      siteName: "JOB-AI",
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
          alt: "JOB-AI Logo",
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [logoUrl],
      creator: "@jobai",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "Q9U_ioI63DeHw7bSPhF2FOPEjXf-KuAufpUFXkaNad0",
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [
        { url: '/icon.png' },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "JOB-AI",
        "alternateName": ["jobai", "job-ai", "JOB-AI Indonesia"],
        "url": siteUrl,
        "logo": `${siteUrl}/logo_hd.png`,
        "description": "Platform rekrutmen cerdas berbasis AI untuk efisiensi seleksi talenta dan screening CV otomatis."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "JOB-AI",
        "alternateName": "jobai",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "inLanguage": "id-ID"
      }
    ]
  };

  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="Q9U_ioI63DeHw7bSPhF2FOPEjXf-KuAufpUFXkaNad0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MaintenanceProvider>
          {children}
        </MaintenanceProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

