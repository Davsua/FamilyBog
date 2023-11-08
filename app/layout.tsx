import { ReactNode } from 'react';
import './globals.css';
import NavBar from '../components/NavBar';
import { Metadata } from 'next';

import { orbitron } from '@/app/fonts';

import styles from './page.module.css';
import MainNavBar from '@/components/mainNavBar/MainNavBar';

interface LayOutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Family Blog',
    default: 'Family Blog',
  },
  description: 'This blog is make for share and save my best moment ever with my family',
};

export default function RootLayout({ children }: LayOutProps) {
  return (
    <html lang='en'>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header className={styles.header}>
          <MainNavBar />
        </header>
        <main>{children}</main>

        <footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderTop: 'solid 1px gray',
            padding: '10px',
            marginTop: '35px',
            fontFamily: `${orbitron}`,
          }}
        >
          Created with All possible love 💝 by: Davsua
        </footer>
      </body>
    </html>
  );
}
