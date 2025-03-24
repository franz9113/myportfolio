import type React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className='min-h-screen bg-[#121210] text-white font-arpey'>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
