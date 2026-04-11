import React, { ReactNode } from 'react';
import Head from 'next/head';
import Topbar from '../components/Topbar';
import BottomNav from '../components/BottomNav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Marius Gal — Web3 Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Full-page shell */}
      <div
        className="flex flex-col w-full min-h-screen"
        style={{ backgroundColor: 'var(--card-bg)' }}
      >
        <Topbar />

        <main className="flex-1 w-full" style={{ paddingBottom: '80px' }}>
          {children}
        </main>

        <BottomNav />
      </div>

      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default Layout;
