import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jobai.id';

  const routes = [
    '',
    '/about',
    '/tentang-kami',
    '/companies',
    '/campus',
    '/login',
    '/register',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
