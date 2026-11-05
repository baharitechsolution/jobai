import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Komitmen JOB-AI dalam menjaga kerahasiaan dan keamanan data pribadi pelamar serta mitra UMKM sesuai standar keamanan siber.',
  openGraph: {
    title: 'Kebijakan Privasi | JOB-AI',
    description: 'Komitmen JOB-AI dalam menjaga kerahasiaan dan keamanan data pribadi pelamar serta mitra UMKM sesuai standar keamanan siber.',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
