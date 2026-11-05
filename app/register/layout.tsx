import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daftar Akun Baru',
  description: 'Daftar sekarang di JOB-AI. Buka peluang karier impian bagi pencari kerja atau temukan talenta terbaik dengan seleksi AI cepat untuk UMKM.',
  openGraph: {
    title: 'Daftar Akun Baru | JOB-AI',
    description: 'Daftar sekarang di JOB-AI. Buka peluang karier impian bagi pencari kerja atau temukan talenta terbaik dengan seleksi AI cepat untuk UMKM.',
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
