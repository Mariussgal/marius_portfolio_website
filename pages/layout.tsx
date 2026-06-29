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
        <meta name="description" content="Marius Gal — Engineering student passionate about blockchain and DeFi. Explore my projects, smart contracts, and mint my NFT business card on Sepolia testnet." />
        <meta name="keywords" content="Marius Gal, Web3, Blockchain, DeFi, Solidity, Ethereum, Smart Contract, NFT, Portfolio, Developer, React, Next.js, ETHGlobal" />
        <meta name="author" content="Marius Gal" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#3144D9" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gal-marius.xyz/" />
        <meta property="og:title" content="Marius Gal — Web3 Portfolio" />
        <meta property="og:description" content="Engineering student passionate about blockchain and DeFi. Explore my projects, smart contracts, and mint NFT business card." />
        <meta property="og:image" content="https://gal-marius.xyz/headshot.jpg" />
        <meta property="og:site_name" content="Marius Gal" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mariusgal_eth" />
        <meta name="twitter:creator" content="@mariusgal_eth" />
        <meta name="twitter:title" content="Marius Gal — Web3 Portfolio" />
        <meta name="twitter:description" content="Engineering student passionate about blockchain and DeFi. Explore my projects, smart contracts, and mint NFT business card." />
        <meta name="twitter:image" content="https://gal-marius.xyz/headshot.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://gal-marius.xyz/" />

        <link rel="icon" href="/eth-logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Marius Gal",
              "url": "https://gal-marius.xyz/",
              "image": "https://gal-marius.xyz/headshot.jpg",
              "jobTitle": "Engineering student",
              "description": "Passionate about blockchain technology and DeFi, looking out for new experiences in Web3.",
              "sameAs": [
                "https://github.com/Mariussgal",
                "https://linkedin.com/in/marius-gal",
                "https://twitter.com/mariusgal_eth"
              ],
              "knowsAbout": ["Blockchain", "DeFi", "Solidity", "Ethereum", "Smart Contracts", "NFT", "React", "Next.js", "TypeScript"]
            })
          }}
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
