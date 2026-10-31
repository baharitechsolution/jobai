import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat AI Recruit Pro, platform rekrutmen cerdas terdepan di Indonesia yang menghubungkan talenta terbaik dengan UMKM impian.',
  openGraph: {
    title: 'Tentang Kami | AI Recruit Pro',
    description: 'Kenali lebih dekat AI Recruit Pro, platform rekrutmen cerdas terdepan di Indonesia yang menghubungkan talenta terbaik dengan UMKM impian.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
