import NavBar from '@/components/NavBar';
import { Orbitron } from 'next/font/google';
import React from 'react';

export default function NavigateLayout({ children }: any) {
  return (
    <html lang='en'>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
