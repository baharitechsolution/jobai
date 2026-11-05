import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Punya pertanyaan atau butuh bantuan terkait platform JOB-AI? Hubungi tim support kami, kami siap membantu Anda kapan saja.',
  openGraph: {
    title: 'Hubungi Kami | JOB-AI',
    description: 'Punya pertanyaan atau butuh bantuan terkait platform JOB-AI? Hubungi tim support kami, kami siap membantu Anda kapan saja.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
