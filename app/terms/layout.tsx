import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan penggunaan layanan platform JOB-AI untuk pelamar, UMKM, dan mitra institusi.',
  openGraph: {
    title: 'Syarat & Ketentuan | JOB-AI',
    description: 'Syarat dan ketentuan penggunaan layanan platform JOB-AI untuk pelamar, UMKM, dan mitra institusi.',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
