import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat JOB-AI, platform rekrutmen cerdas terdepan di Indonesia yang menghubungkan talenta terbaik dengan UMKM impian.',
  openGraph: {
    title: 'Tentang Kami | JOB-AI',
    description: 'Kenali lebih dekat JOB-AI, platform rekrutmen cerdas terdepan di Indonesia yang menghubungkan talenta terbaik dengan UMKM impian.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
