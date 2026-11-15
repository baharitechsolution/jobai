import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daftar Perusahaan/UMKM Terpercaya',
  description: 'Jelajahi profil Perusahaan/UMKM terkemuka dan startup terbaik di Indonesia. Temukan info budaya kerja, ulasan, dan lowongan aktif di JOB-AI.',
  openGraph: {
    title: 'Daftar Perusahaan/UMKM Terpercaya | JOB-AI',
    description: 'Jelajahi profil Perusahaan/UMKM terkemuka dan startup terbaik di Indonesia. Temukan info budaya kerja, ulasan, dan lowongan aktif di JOB-AI.',
  },
};

export default function CompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
