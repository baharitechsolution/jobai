import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masuk ke Akun',
  description: 'Masuk ke akun JOB-AI Anda untuk mulai melamar pekerjaan impian atau mengelola proses rekrutmen UMKM secara cerdas.',
  openGraph: {
    title: 'Masuk ke Akun | JOB-AI',
    description: 'Masuk ke akun JOB-AI Anda untuk mulai melamar pekerjaan impian atau mengelola proses rekrutmen UMKM secara cerdas.',
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
