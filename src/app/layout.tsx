import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Junior Web Developer Portfolio',
  description:
    'A portfolio showcasing my skills and projects as a junior web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Arpey:wght@400;500;600;700&display=swap'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
