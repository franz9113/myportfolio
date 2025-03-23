'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/data/portfolio-data';

export function Header() {
  // Handle smooth scrolling for navigation links
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if the clicked element is a navigation link
      if (
        target.tagName === 'A' &&
        target.getAttribute('href')?.startsWith('#')
      ) {
        e.preventDefault();

        const href = target.getAttribute('href');
        if (!href) return;

        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });

          // Update URL without page reload
          window.history.pushState({}, '', href);
        }
      }
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <header className='sticky top-0 z-10 backdrop-blur-md bg-[#121210]/80 border-b border-white/10'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          <span className='text-primary'>Dev</span>Portfolio
        </Link>
        <nav className='hidden md:flex gap-6'>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='hover:text-primary transition-colors'
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Button variant='outline' size='sm' className='hidden md:flex'>
          Resume
        </Button>
      </div>
    </header>
  );
}
