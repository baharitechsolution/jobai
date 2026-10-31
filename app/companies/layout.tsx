import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daftar UMKM Terpercaya',
  description: 'Jelajahi profil UMKM terkemuka dan startup terbaik di Indonesia. Temukan info budaya kerja, ulasan, dan lowongan aktif di AI Recruit Pro.',
  openGraph: {
    title: 'Daftar UMKM Terpercaya | AI Recruit Pro',
    description: 'Jelajahi profil UMKM terkemuka dan startup terbaik di Indonesia. Temukan info budaya kerja, ulasan, dan lowongan aktif di AI Recruit Pro.',
  },
};

export default function CompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
