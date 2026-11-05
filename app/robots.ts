import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jobai.id';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/applicant/', '/(perusahaan)/', '/pending-approval/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
