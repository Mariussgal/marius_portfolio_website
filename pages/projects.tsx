import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { motion } from 'framer-motion';

type Category = 'all' | 'hackathon' | 'contract';

interface Project {
  name: string;
  date: string;
  description: string;
  githubLink?: string;
  projectLink?: string;
  address: string;
  network: string;
  category: Category;
  stack: string[];
}

const cards: Project[] = [
  {
    name: 'Echo — ETHGlobal New-York 2026',
    date: 'June 2026',
    description: 'An on-chain music prior-art registry for independent artists. Echo lets an artist establish a timestamped, verifiable, and confidential proof of creation for a track, without ever exposing the unreleased audio. By combining multi-agent AI similarity analysis, confidential off-chain compute, and on-chain timestamping in a fail-fast agentic pipeline.',
    githubLink: 'https://github.com/nohem-mg/Echo',
    projectLink: 'https://ethglobal.com/showcase/echo-sh56g',
    address: '0xecho...2026',
    network: 'Sepolia',
    category: 'hackathon',
    stack: ['WORLD ID', 'Chainlink CRE', 'UNLINK', 'Solidity', 'Next.js'],
  },
  {
    name: 'Onchor AI — ETHGlobal Open Agents 2026',
    date: 'May 2026',
    description: 'Solidity security AI-Agent with persistent collective memory. Decentralized vulnerability storage via 0G, on-chain anchoring via KeeperHub, and ENS audit certificates. Made it to Round 2 (~40/468 projects).',
    githubLink: 'https://github.com/Mariussgal/OPEN-AGENTS-2026',
    projectLink: 'https://ethglobal.com/showcase/onchor-ai-mkuyn',
    address: 'certified.onchor-ai.eth',
    network: 'Ethereum / 0G',
    category: 'hackathon',
    stack: ['Solidity', '0G Storage', 'KeeperHub MCP', 'ENS subnames'],
  },
  {
    name: 'YSM — ETHGlobal Cannes 2026',
    date: 'April 2026',
    description: 'Yield Stream Marketplace: DeFi protocols sell future fee revenue for instant USDC capital. Investors buy YST at a discount and earn yield.',
    githubLink: 'https://github.com/Mariussgal/ETH-GLOBAL-CANNES-2026',
    projectLink: 'https://ethglobal.com/showcase/ysm-ch2s2',
    address: '0xysm0...2026',
    network: 'Ethereum',
    category: 'hackathon',
    stack: ['Chainlink CRE', 'ENS subdomains', 'Arc', 'CCTP'],
  },
  {
    name: '12th Man — Chiliz\'s Hacking Paris',
    date: 'July 2025',
    description: 'Decentralized crowd-lending protocol allowing sports clubs to launch fundraising campaigns with customizable APY.',
    githubLink: 'https://github.com/Mariussgal/12th_man_app/',
    address: '0x12th...man0',
    network: 'Chiliz',
    category: 'hackathon',
    stack: ['Solidity', 'Hardhat', 'Chiliz'],
  },
  {
    name: 'ERC-721 Smart Contract',
    date: 'December 2024',
    description: 'Full tutorial for deploying ERC-721 contracts on Sepolia: deploy, verify & publish, host metadata on IPFS, mint and transfer the NFT.',
    githubLink: 'https://github.com/Mariussgal/ERC-721_contract_sepolia',
    address: '0x76526b...031d5d',
    network: 'Sepolia',
    category: 'contract',
    stack: ['Solidity', 'IPFS', 'ERC-721'],
  },
  {
    name: 'ERC-20 Smart Contract',
    date: 'July 2024',
    description: 'Tutorial for deploying ERC-20 contracts on Base, Arbitrum One, and Scroll. Covers enable trading, remove wallet limit, renounce ownership, and burn liq.',
    githubLink: 'https://github.com/Mariussgal/ERC20-BASE-smart-contract',
    address: '0x0000...0000',
    network: 'Base / Arbitrum',
    category: 'contract',
    stack: ['Solidity', 'Remix IDE', 'ERC-20'],
  },
];

const tabs: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Hackathons', value: 'hackathon' },
  { label: 'Contracts', value: 'contract' },
];

const stackColors: Record<string, string> = {
  Solidity: '#6366f1',
  Hardhat: '#f59e0b',
  'ERC-20': '#3b82f6',
  'ERC-721': '#8b5cf6',
  IPFS: '#10b981',
  'Next.js': '#1e293b',
  Chiliz: '#ef4444',
  DeFi: '#16a34a',
  USDC: '#2563eb',
  Ethereum: '#6366f1',
  'Chainlink CRE': '#375bd2',
  'ENS subdomains': '#5284ff',
  Arc: '#f02e65',
  CCTP: '#5c7ee4',
  'Remix IDE': '#16a34a',
  '0G Storage': '#000000',
  'KeeperHub MCP': '#FF5733',
  'ENS subnames': '#5284ff',
  'WORLD ID': '#000000',
  UNLINK: '#8b5cf6',
};

const Projects: NextPage = () => {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const filtered = activeTab === 'all' ? cards : cards.filter((c) => c.category === activeTab);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [filtered]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Projects — Marius Gal</title>
        <meta name="description" content="Marius Gal's Web3 projects: ETHGlobal hackathons, ERC-721 and ERC-20 smart contracts on Ethereum, DeFi protocols, and more." />
        <link rel="canonical" href="https://gal-marius.xyz/projects" />
        <meta property="og:url" content="https://gal-marius.xyz/projects" />
        <meta property="og:title" content="Projects — Marius Gal" />
      </Head>
      <div className="flex flex-col min-h-full">
        {/* Hero */}
        <div className="w-full px-8 md:px-16 pt-8 pb-6 flex-shrink-0 z-10 bg-white border-b border-[#E5E9F2]">
          <div className="flex flex-col">
            <h1 className="text-[36px] font-extrabold text-[#1C1E23] leading-tight tracking-tight">Projects</h1>
            <p className="font-mono text-[12px] text-[#4B65FF] font-semibold tracking-widest uppercase mt-2">{cards.length} shipped</p>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-3 px-8 md:px-16 pt-6 pb-4">
          {tabs.map((tab) => (
            <button key={tab.value} onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-[14px] text-[13px] font-medium transition-all duration-300 ${activeTab === tab.value ? 'bg-[#4B65FF] text-white shadow-[0_4px_12px_rgba(75,101,255,0.3)]' : 'bg-[#EEF1FF] text-[#4B65FF] hover:bg-[#E4E9FF]'
                }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards — Carousel */}
        <div className="relative w-full pl-8 pr-4 md:px-16 pb-10 mt-8 md:mt-2">

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            onScroll={updateScrollButtons}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-4 pr-8 md:pr-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map((card, i) => (
              <motion.div key={card.name}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="snap-center sm:snap-start flex-shrink-0 w-[78vw] sm:w-[360px] rounded-[20px] border border-[#E5E9F2] bg-white p-6 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-[#1C1E23]">{card.name}</h3>
                    <div className="inline-flex items-center gap-1.5 bg-[#EEF1FF] px-2.5 py-1 rounded-full mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4B65FF]" />
                      <p className="font-mono text-[10px] font-medium text-[#4B65FF]">{card.address}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end flex-shrink-0">
                    <span className="font-mono text-[11px] font-medium text-[#8E91A0] bg-[#F5F6FA] px-2 py-0.5 rounded-md">{card.date}</span>
                    <span className="font-mono text-[10px] text-[#8E91A0] mt-1">{card.network}</span>
                  </div>
                </div>

                <p className="text-[14px] text-[#4B4D59] leading-relaxed flex-1 mb-5">{card.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {card.stack.map((tech) => (
                    <span key={tech}
                      className="text-[11px] font-medium px-3 py-1 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: stackColors[tech] ?? '#8E91A0' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 border-t border-[#E5E9F2] pt-4 mt-auto">
                  {card.githubLink && (
                    <a href={card.githubLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] font-medium text-[#8E91A0] no-underline hover:text-[#1C1E23] transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {card.projectLink && (
                    <a href={card.projectLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] font-medium text-[#4B65FF] no-underline hover:text-[#3A54E5] transition-colors">
                      <ExternalLink size={16} /> Live App
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-end gap-3 mt-2 pr-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-[#E5E9F2] bg-white flex items-center justify-center text-[#1C1E23] hover:bg-[#F5F6FA] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-[#E5E9F2] bg-white flex items-center justify-center text-[#1C1E23] hover:bg-[#F5F6FA] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
