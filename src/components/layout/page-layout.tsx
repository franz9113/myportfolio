import type React from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className='min-h-screen bg-[#121210] text-white font-arpey'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
