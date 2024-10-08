import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/main.scss';
import NavBar from '@/components/NavBar';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/Links';

export const metadata: Metadata = {
  title: 'M.ASR Portfolio',
  description:
    'Welcome to M.ASR Portfolio Stay tuned for all new projects and designs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="any" href="/main/me.png" />
      </head>
      <body>
        <main className=" relative main-background ">
          <NavBar />
          <SocialLinks />
          <section className=" container py-10 min-h-[100dvh] px-2 lg:px-3">
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
