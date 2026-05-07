import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAccount, useGasPrice } from 'wagmi';
import { formatUnits } from 'viem';
import { ethers } from 'ethers';
import { motion } from 'framer-motion';
import { Diamond, Fuel, ChevronDown, Copy, QrCode, RefreshCw, Key, ChevronRight, Maximize, Settings, ArrowLeftRight, Send, Headphones, Download, Clock, ShieldAlert, Infinity as InfinityIcon, Ghost, Star, Box, Briefcase, User, FileText, Mail } from 'lucide-react';
import { FaEthereum, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract';

declare global {
  interface Window { ethereum?: any; }
}

const recentProjects = [
  {
    hash: 'certified.onchor-ai.eth',
    name: 'Onchor AI — ETHGlobal Open Agents 2026',
    date: 'May 2026',
    href: 'https://ethglobal.com/showcase/onchor-ai-mkuyn',
  },
  {
    hash: '0xa3f7...c291',
    name: 'YSM — ETHGlobal Cannes 2026',
    date: 'Apr 2026',
    href: 'https://ethglobal.com/showcase/ysm-ch2s2',
  },
  {
    hash: '0x12th...man0',
    name: '12th Man — Chiliz Hackathon',
    date: 'Jul 2025',
    href: 'https://github.com/Mariussgal/12th_man_app/',
  },
  {
    hash: '0x76526b...031d5d',
    name: 'ERC-721 Smart Contract',
    date: 'Dec 2024',
    href: 'https://github.com/Mariussgal/ERC-721_contract_sepolia',
  },
  {
    hash: '0x0000...ERC20',
    name: 'ERC-20 Smart Contract',
    date: 'Jul 2024',
    href: 'https://github.com/Mariussgal/ERC20-BASE-smart-contract',
  },
];

const Home: NextPage = () => {
  const { isConnected, address } = useAccount();
  const toast = useToast();
  const [isMinting, setIsMinting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [ethChange, setEthChange] = useState<number | null>(null);

  const { data: gasPriceData } = useGasPrice();
  const gasPriceGwei = gasPriceData ? Number(formatUnits(gasPriceData, 9)).toFixed(4) : '...';

  useEffect(() => {
    setMounted(true);

    const fetchEthData = async () => {
      try {
        const [priceRes, changeRes] = await Promise.all([
          fetch('https://coins.llama.fi/prices/current/coingecko:ethereum'),
          fetch('https://coins.llama.fi/percentage/coingecko:ethereum')
        ]);
        
        const priceData = await priceRes.json();
        const changeData = await changeRes.json();

        if (priceData?.coins?.['coingecko:ethereum']?.price) {
          setEthPrice(priceData.coins['coingecko:ethereum'].price);
        }
        
        if (changeData?.coins?.['coingecko:ethereum']) {
          setEthChange(changeData.coins['coingecko:ethereum']);
        }
      } catch (error) {
        console.error('Failed to fetch ETH data from DefiLlama', error);
      }
    };

    fetchEthData();
    const interval = setInterval(fetchEthData, 60000);
    return () => clearInterval(interval);
  }, []);

  const mintNFT = async () => {
    if (!isConnected) {
      toast({ title: 'Error', description: 'Please connect your wallet first.', status: 'error', duration: 5000, isClosable: true });
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      setIsMinting(true);
      const tx = await contract.safeMint(address, 'https://ipfs.io/ipfs/bafkreiebxd7imb32wuqbtvrkf7kn6sws2b57xhdc6qdkvdijb4iqj6ilru');
      await tx.wait();
      toast({ title: 'Success', description: `NFT minted! Tx: https://sepolia.etherscan.io/tx/${tx.hash}`, status: 'success', duration: 5000, isClosable: true });
    } catch (err: any) {
      if (err?.code === 4001 || err?.reason === 'rejected' || err?.message?.includes('user rejected action')) {
        toast({ title: 'Cancelled', description: 'Transaction was cancelled.', status: 'info', duration: 5000, isClosable: true });
      } else if (err?.message?.toLowerCase().includes('network')) {
        toast({ title: 'Error', description: 'Network connection problem.', status: 'error', duration: 5000, isClosable: true });
      } else {
        toast({ title: 'Error', description: 'Error while minting the NFT.', status: 'error', duration: 5000, isClosable: true });
      }
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Marius Gal — Web3 Portfolio</title>
        <meta name="description" content="Marius Gal — Generalist engineering student passionate about blockchain, DeFi, and Web3. Explore my projects, smart contracts, and NFT business card." />
        <link rel="canonical" href="https://gal-marius.xyz/" />
        <meta property="og:url" content="https://gal-marius.xyz/" />
        <meta property="og:title" content="Marius Gal — Web3 Portfolio" />
      </Head>
      {/* Mobile View */}
      <div className="flex md:hidden flex-col min-h-[calc(100dvh-80px)] bg-[#F5F6FA] font-sans relative overflow-y-auto">
        {/* Blue Header Section */}
        <div className="bg-[#3144D9] text-white pt-6 pb-2 px-4 rounded-b-[16px] relative overflow-hidden shadow-sm shrink-0">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6 z-10 relative">
            <div className="flex items-center gap-2 bg-[#ffffff20] px-3.5 py-2 rounded-[14px] cursor-pointer hover:bg-[#ffffff30] transition-colors">
              <Key size={15} className="text-white" />
              <span className="text-[14px] font-semibold text-white truncate max-w-[85px]">Private Ke...</span>
              <span className="text-[14px] text-white/70 font-mono tracking-tight">0xe97f62...f30fd8</span>
              <ChevronRight size={15} className="text-white/70" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-[#ffffff20] flex items-center justify-center cursor-pointer hover:bg-[#ffffff30] transition-colors">
                <Copy size={15} className="text-white" />
              </div>
              <div className="w-[34px] h-[34px] rounded-[10px] bg-[#ffffff20] flex items-center justify-center cursor-pointer hover:bg-[#ffffff30] transition-colors">
                <Maximize size={15} className="text-white" />
              </div>
         
            </div>
          </div>

          {/* Balance */}
          <div className="flex items-center justify-between z-10 relative mb-20 cursor-pointer">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[38px] font-extrabold text-white leading-none">$*****</span>
                <span className="text-[14px] font-semibold text-[#4ADE80]">+2,25%</span>
              </div>
              <div className="flex items-center mt-1.5">
                <FaEthereum size={12} className="text-white/80" />
              </div>
            </div>
          </div>

          {/* Chart Background Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-80">
            <svg viewBox="0 0 300 64" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mobileChartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0.0,43.8 L1.5,44.7 L3.1,43.4 L4.6,45.4 L6.2,45.1 L7.7,45.8 L9.2,44.7 L10.8,44.4 L12.3,45.8 L13.8,46.0 L15.4,46.4 L16.9,46.0 L18.5,48.3 L20.0,47.7 L21.7,46.5 L23.3,46.1 L25.0,43.9 L26.5,35.7 L28.0,29.0 L30.0,32.5 L32.0,38.8 L33.6,38.9 L35.2,35.7 L36.8,36.5 L38.4,38.4 L40.0,38.2 L41.7,37.1 L43.3,38.8 L45.0,39.4 L46.7,43.6 L48.3,42.6 L50.0,41.1 L51.7,41.8 L53.3,41.2 L55.0,43.8 L56.7,41.0 L58.3,43.2 L60.0,40.0 L61.7,40.8 L63.3,38.6 L65.0,36.5 L66.7,39.2 L68.3,38.8 L70.0,35.1 L71.7,39.7 L73.3,35.5 L75.0,38.4 L76.7,40.7 L78.3,39.3 L80.0,39.8 L81.7,38.5 L83.3,38.6 L85.0,39.7 L86.7,44.5 L88.3,43.3 L90.0,43.4 L91.7,46.6 L93.3,47.9 L95.0,48.4 L96.7,47.9 L98.3,49.1 L100.0,50.7 L101.7,50.4 L103.3,50.4 L105.0,49.1 L106.7,50.1 L108.3,50.4 L110.0,47.9 L111.7,47.9 L113.3,46.6 L115.0,46.8 L116.7,47.2 L118.3,45.0 L120.0,43.2 L121.7,45.1 L123.3,46.5 L125.0,47.0 L126.7,47.1 L128.3,46.3 L130.0,46.4 L131.7,47.6 L133.3,46.7 L135.0,44.6 L136.7,45.7 L138.3,41.5 L140.0,45.4 L141.7,43.6 L143.3,41.7 L145.0,37.8 L146.7,34.7 L148.3,35.8 L150.0,33.4 L151.7,32.9 L153.3,33.4 L155.0,31.1 L156.7,30.3 L158.3,27.8 L160.0,27.0 L161.7,30.2 L163.3,28.6 L165.0,29.1 L166.7,29.1 L168.3,26.2 L170.0,27.4 L171.7,27.5 L173.3,26.8 L175.0,31.0 L176.7,30.3 L178.3,31.0 L180.0,34.7 L181.7,34.0 L183.3,30.3 L185.0,29.4 L186.7,30.1 L188.3,28.7 L190.0,25.7 L191.7,26.4 L193.3,27.0 L195.0,31.7 L196.7,33.4 L198.3,31.8 L200.0,34.7 L201.7,31.9 L203.3,29.1 L205.0,22.3 L206.5,17.6 L208.0,9.4 L209.8,11.3 L211.5,11.4 L213.2,12.3 L215.0,11.3 L216.7,14.7 L218.3,17.5 L220.0,19.9 L221.7,15.9 L223.3,13.4 L225.0,12.8 L226.7,13.9 L228.3,19.1 L230.0,19.8 L231.7,16.6 L233.3,14.6 L235.0,11.1 L236.7,12.9 L238.3,18.2 L240.0,21.1 L241.7,18.5 L243.3,14.9 L245.0,11.7 L246.7,11.9 L248.3,13.5 L250.0,13.0 L251.7,14.5 L253.3,13.8 L255.0,13.0 L256.7,15.0 L258.3,13.5 L260.0,11.7 L261.7,10.3 L263.3,10.0 L265.0,7.1 L266.7,8.7 L268.3,9.7 L270.0,11.1 L271.7,11.6 L273.3,11.2 L275.0,13.1 L276.7,11.3 L278.3,10.3 L280.0,9.4 L281.7,9.4 L283.3,8.8 L285.0,7.9 L286.7,10.3 L288.3,11.9 L290.0,13.5 L291.7,15.0 L293.3,15.9 L295.0,15.1 L296.7,17.7 L298.3,14.2 L300,14.0 L300,64 L0,64Z"
                fill="url(#mobileChartFill)"
              />
              <path
                d="M0.0,43.8 L1.5,44.7 L3.1,43.4 L4.6,45.4 L6.2,45.1 L7.7,45.8 L9.2,44.7 L10.8,44.4 L12.3,45.8 L13.8,46.0 L15.4,46.4 L16.9,46.0 L18.5,48.3 L20.0,47.7 L21.7,46.5 L23.3,46.1 L25.0,43.9 L26.5,35.7 L28.0,29.0 L30.0,32.5 L32.0,38.8 L33.6,38.9 L35.2,35.7 L36.8,36.5 L38.4,38.4 L40.0,38.2 L41.7,37.1 L43.3,38.8 L45.0,39.4 L46.7,43.6 L48.3,42.6 L50.0,41.1 L51.7,41.8 L53.3,41.2 L55.0,43.8 L56.7,41.0 L58.3,43.2 L60.0,40.0 L61.7,40.8 L63.3,38.6 L65.0,36.5 L66.7,39.2 L68.3,38.8 L70.0,35.1 L71.7,39.7 L73.3,35.5 L75.0,38.4 L76.7,40.7 L78.3,39.3 L80.0,39.8 L81.7,38.5 L83.3,38.6 L85.0,39.7 L86.7,44.5 L88.3,43.3 L90.0,43.4 L91.7,46.6 L93.3,47.9 L95.0,48.4 L96.7,47.9 L98.3,49.1 L100.0,50.7 L101.7,50.4 L103.3,50.4 L105.0,49.1 L106.7,50.1 L108.3,50.4 L110.0,47.9 L111.7,47.9 L113.3,46.6 L115.0,46.8 L116.7,47.2 L118.3,45.0 L120.0,43.2 L121.7,45.1 L123.3,46.5 L125.0,47.0 L126.7,47.1 L128.3,46.3 L130.0,46.4 L131.7,47.6 L133.3,46.7 L135.0,44.6 L136.7,45.7 L138.3,41.5 L140.0,45.4 L141.7,43.6 L143.3,41.7 L145.0,37.8 L146.7,34.7 L148.3,35.8 L150.0,33.4 L151.7,32.9 L153.3,33.4 L155.0,31.1 L156.7,30.3 L158.3,27.8 L160.0,27.0 L161.7,30.2 L163.3,28.6 L165.0,29.1 L166.7,29.1 L168.3,26.2 L170.0,27.4 L171.7,27.5 L173.3,26.8 L175.0,31.0 L176.7,30.3 L178.3,31.0 L180.0,34.7 L181.7,34.0 L183.3,30.3 L185.0,29.4 L186.7,30.1 L188.3,28.7 L190.0,25.7 L191.7,26.4 L193.3,27.0 L195.0,31.7 L196.7,33.4 L198.3,31.8 L200.0,34.7 L201.7,31.9 L203.3,29.1 L205.0,22.3 L206.5,17.6 L208.0,9.4 L209.8,11.3 L211.5,11.4 L213.2,12.3 L215.0,11.3 L216.7,14.7 L218.3,17.5 L220.0,19.9 L221.7,15.9 L223.3,13.4 L225.0,12.8 L226.7,13.9 L228.3,19.1 L230.0,19.8 L231.7,16.6 L233.3,14.6 L235.0,11.1 L236.7,12.9 L238.3,18.2 L240.0,21.1 L241.7,18.5 L243.3,14.9 L245.0,11.7 L246.7,11.9 L248.3,13.5 L250.0,13.0 L251.7,14.5 L253.3,13.8 L255.0,13.0 L256.7,15.0 L258.3,13.5 L260.0,11.7 L261.7,10.3 L263.3,10.0 L265.0,7.1 L266.7,8.7 L268.3,9.7 L270.0,11.1 L271.7,11.6 L273.3,11.2 L275.0,13.1 L276.7,11.3 L278.3,10.3 L280.0,9.4 L281.7,9.4 L283.3,8.8 L285.0,7.9 L286.7,10.3 L288.3,11.9 L290.0,13.5 L291.7,15.0 L293.3,15.9 L295.0,15.1 L296.7,17.7 L298.3,14.2 L300,14.0"
                fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="mx-4 mt-2 bg-white rounded-[16px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#E5E9F2]/60">
          <div className="grid grid-cols-3 divide-x divide-y divide-[#E5E9F2]/60">
            <Link href="/projects" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors no-underline">
              <Briefcase size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">Projects</span>
            </Link>
            <Link href="/about" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors border-t-0 no-underline">
              <User size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">About</span>
            </Link>
            <Link href="/mint" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors border-t-0 no-underline">
              <Diamond size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">Mint NFT</span>
            </Link>
            <a href="https://github.com/Mariussgal" target="_blank" rel="noreferrer" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors no-underline">
              <FaGithub size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/marius-gal" target="_blank" rel="noreferrer" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors no-underline">
              <FaLinkedin size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">LinkedIn</span>
            </a>
            <a href="https://twitter.com/mariusgal_eth" target="_blank" rel="noreferrer" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors no-underline">
              <FaTwitter size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">Twitter</span>
            </a>
            <a href="mailto:marius.gal05@gmail.com" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors no-underline">
              <Mail size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">Contact</span>
            </a>
            <a href="/cv-marius-gal.pdf" target="_blank" rel="noreferrer" className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors no-underline">
              <FileText size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">Resume</span>
            </a>
            <a href='/about' className="bg-white flex flex-col items-center justify-center py-3.5 gap-1.5 cursor-pointer active:bg-gray-50 transition-colors">
              <Star size={20} className="text-[#3144D9]" />
              <span className="text-[12px] font-semibold text-[#1C1E23]">Skills</span>
            </a>
          </div>
        </div>

        {/* Market Info */}
        <div className="mx-4 mt-2 bg-white rounded-[12px] p-3 flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#E5E9F2]/60">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#1C1E23] flex items-center justify-center">
              <FaEthereum size={11} className="text-white" />
            </div>
            <span className="text-[14px] font-bold text-[#1C1E23]">
              {ethPrice !== null ? `$${ethPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$...'}
            </span>
            <span className={`text-[13px] font-semibold ${ethChange !== null && ethChange >= 0 ? 'text-[#4ADE80]' : 'text-[#F87171]'}`}>
              {ethChange !== null ? `${ethChange >= 0 ? '+' : ''}${ethChange.toFixed(2)}%` : '...'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel size={14} className="text-[#8E91A0]" />
            <span className="text-[14px] font-bold text-[#1C1E23]">{gasPriceGwei}</span>
            <span className="text-[13px] font-medium text-[#8E91A0]">Gwei</span>
          </div>
        </div>

        {/* dApp Status */}
        <div className="mx-4 mt-2 mb-4 bg-white rounded-[12px] p-3 flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#E5E9F2]/60 text-center min-h-[80px]">
          {mounted && isConnected ? (
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E5E9F2] shadow-sm">
                  <Image src="/headshot.jpg" alt="Marius Gal" width={44} height={44} className="object-cover w-full h-full" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ADE80] border-2 border-white rounded-full"></div>
              </div>
              <span className="text-[13px] font-bold text-[#1C1E23] leading-tight">Marius Gal dApp</span>
              <span className="text-[11px] font-medium text-[#4ADE80] mt-0.5">Connecté</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Box size={20} className="text-[#8E91A0]" />
              <span className="text-[14px] font-medium text-[#8E91A0]"> Not connected to the Dapp </span>
            </div>
          )}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col h-[calc(100dvh-144px)] overflow-hidden">
      {/* Intro Description */}
      <div className="w-full px-8 md:px-16 pt-8 pb-6 flex-shrink-0 z-10 bg-white border-b border-[#E5E9F2]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <h1 className="text-[36px] font-extrabold text-[#1C1E23] leading-tight tracking-tight">Marius Gal</h1>
            <p className="font-mono text-[12px] text-[#4B65FF] font-semibold tracking-widest uppercase mt-1">Generalist engineering student</p>
          </div>
        </div>
        <p className="font-mono text-[13px] text-[#8E91A0] max-w-[85%] leading-relaxed mt-2">
          Passionate about Blockchain technology and DeFi, looking out for new experiences in web3.0!
        </p>
      </div>

      {/* Hero — Rabby Wallet style */}
      <div className="w-full px-8 md:px-16 py-2 flex-shrink-0 z-10">
        <div className="relative w-full rounded-[20px] border border-[#E5E9F2] p-5 sm:p-6 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="flex items-end justify-between">
            <div className="flex flex-col pb-2 z-10 w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-[15px] text-[#1C1E23]">Private Key 1</span>
              <span className="font-mono text-[13px] text-[#8E91A0]">0xe7f62...36f6fd8</span>
              <Copy size={14} className="text-[#8E91A0] cursor-pointer hover:text-[#1C1E23] transition-colors" />
              <QrCode size={14} className="text-[#8E91A0] cursor-pointer hover:text-[#1C1E23] transition-colors" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[40px] font-bold text-[#1C1E23] leading-none">$*****</span>
              <span className="text-[14px] font-medium text-[#8E91A0] mb-1">+2.25% </span>
              <RefreshCw size={14} className="text-[#8E91A0] mb-1.5 ml-1 cursor-pointer hover:text-[#1C1E23] transition-colors" />
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-end hidden sm:flex">
            <div className="w-full h-24 relative -mb-1">
              <svg viewBox="0 0 300 64" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0.0,43.8 L1.5,44.7 L3.1,43.4 L4.6,45.4 L6.2,45.1 L7.7,45.8 L9.2,44.7 L10.8,44.4 L12.3,45.8 L13.8,46.0 L15.4,46.4 L16.9,46.0 L18.5,48.3 L20.0,47.7 L21.7,46.5 L23.3,46.1 L25.0,43.9 L26.5,35.7 L28.0,29.0 L30.0,32.5 L32.0,38.8 L33.6,38.9 L35.2,35.7 L36.8,36.5 L38.4,38.4 L40.0,38.2 L41.7,37.1 L43.3,38.8 L45.0,39.4 L46.7,43.6 L48.3,42.6 L50.0,41.1 L51.7,41.8 L53.3,41.2 L55.0,43.8 L56.7,41.0 L58.3,43.2 L60.0,40.0 L61.7,40.8 L63.3,38.6 L65.0,36.5 L66.7,39.2 L68.3,38.8 L70.0,35.1 L71.7,39.7 L73.3,35.5 L75.0,38.4 L76.7,40.7 L78.3,39.3 L80.0,39.8 L81.7,38.5 L83.3,38.6 L85.0,39.7 L86.7,44.5 L88.3,43.3 L90.0,43.4 L91.7,46.6 L93.3,47.9 L95.0,48.4 L96.7,47.9 L98.3,49.1 L100.0,50.7 L101.7,50.4 L103.3,50.4 L105.0,49.1 L106.7,50.1 L108.3,50.4 L110.0,47.9 L111.7,47.9 L113.3,46.6 L115.0,46.8 L116.7,47.2 L118.3,45.0 L120.0,43.2 L121.7,45.1 L123.3,46.5 L125.0,47.0 L126.7,47.1 L128.3,46.3 L130.0,46.4 L131.7,47.6 L133.3,46.7 L135.0,44.6 L136.7,45.7 L138.3,41.5 L140.0,45.4 L141.7,43.6 L143.3,41.7 L145.0,37.8 L146.7,34.7 L148.3,35.8 L150.0,33.4 L151.7,32.9 L153.3,33.4 L155.0,31.1 L156.7,30.3 L158.3,27.8 L160.0,27.0 L161.7,30.2 L163.3,28.6 L165.0,29.1 L166.7,29.1 L168.3,26.2 L170.0,27.4 L171.7,27.5 L173.3,26.8 L175.0,31.0 L176.7,30.3 L178.3,31.0 L180.0,34.7 L181.7,34.0 L183.3,30.3 L185.0,29.4 L186.7,30.1 L188.3,28.7 L190.0,25.7 L191.7,26.4 L193.3,27.0 L195.0,31.7 L196.7,33.4 L198.3,31.8 L200.0,34.7 L201.7,31.9 L203.3,29.1 L205.0,22.3 L206.5,17.6 L208.0,9.4 L209.8,11.3 L211.5,11.4 L213.2,12.3 L215.0,11.3 L216.7,14.7 L218.3,17.5 L220.0,19.9 L221.7,15.9 L223.3,13.4 L225.0,12.8 L226.7,13.9 L228.3,19.1 L230.0,19.8 L231.7,16.6 L233.3,14.6 L235.0,11.1 L236.7,12.9 L238.3,18.2 L240.0,21.1 L241.7,18.5 L243.3,14.9 L245.0,11.7 L246.7,11.9 L248.3,13.5 L250.0,13.0 L251.7,14.5 L253.3,13.8 L255.0,13.0 L256.7,15.0 L258.3,13.5 L260.0,11.7 L261.7,10.3 L263.3,10.0 L265.0,7.1 L266.7,8.7 L268.3,9.7 L270.0,11.1 L271.7,11.6 L273.3,11.2 L275.0,13.1 L276.7,11.3 L278.3,10.3 L280.0,9.4 L281.7,9.4 L283.3,8.8 L285.0,7.9 L286.7,10.3 L288.3,11.9 L290.0,13.5 L291.7,15.0 L293.3,15.9 L295.0,15.1 L296.7,17.7 L298.3,14.2 L300,14.0"
                  fill="none" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M0.0,43.8 L1.5,44.7 L3.1,43.4 L4.6,45.4 L6.2,45.1 L7.7,45.8 L9.2,44.7 L10.8,44.4 L12.3,45.8 L13.8,46.0 L15.4,46.4 L16.9,46.0 L18.5,48.3 L20.0,47.7 L21.7,46.5 L23.3,46.1 L25.0,43.9 L26.5,35.7 L28.0,29.0 L30.0,32.5 L32.0,38.8 L33.6,38.9 L35.2,35.7 L36.8,36.5 L38.4,38.4 L40.0,38.2 L41.7,37.1 L43.3,38.8 L45.0,39.4 L46.7,43.6 L48.3,42.6 L50.0,41.1 L51.7,41.8 L53.3,41.2 L55.0,43.8 L56.7,41.0 L58.3,43.2 L60.0,40.0 L61.7,40.8 L63.3,38.6 L65.0,36.5 L66.7,39.2 L68.3,38.8 L70.0,35.1 L71.7,39.7 L73.3,35.5 L75.0,38.4 L76.7,40.7 L78.3,39.3 L80.0,39.8 L81.7,38.5 L83.3,38.6 L85.0,39.7 L86.7,44.5 L88.3,43.3 L90.0,43.4 L91.7,46.6 L93.3,47.9 L95.0,48.4 L96.7,47.9 L98.3,49.1 L100.0,50.7 L101.7,50.4 L103.3,50.4 L105.0,49.1 L106.7,50.1 L108.3,50.4 L110.0,47.9 L111.7,47.9 L113.3,46.6 L115.0,46.8 L116.7,47.2 L118.3,45.0 L120.0,43.2 L121.7,45.1 L123.3,46.5 L125.0,47.0 L126.7,47.1 L128.3,46.3 L130.0,46.4 L131.7,47.6 L133.3,46.7 L135.0,44.6 L136.7,45.7 L138.3,41.5 L140.0,45.4 L141.7,43.6 L143.3,41.7 L145.0,37.8 L146.7,34.7 L148.3,35.8 L150.0,33.4 L151.7,32.9 L153.3,33.4 L155.0,31.1 L156.7,30.3 L158.3,27.8 L160.0,27.0 L161.7,30.2 L163.3,28.6 L165.0,29.1 L166.7,29.1 L168.3,26.2 L170.0,27.4 L171.7,27.5 L173.3,26.8 L175.0,31.0 L176.7,30.3 L178.3,31.0 L180.0,34.7 L181.7,34.0 L183.3,30.3 L185.0,29.4 L186.7,30.1 L188.3,28.7 L190.0,25.7 L191.7,26.4 L193.3,27.0 L195.0,31.7 L196.7,33.4 L198.3,31.8 L200.0,34.7 L201.7,31.9 L203.3,29.1 L205.0,22.3 L206.5,17.6 L208.0,9.4 L209.8,11.3 L211.5,11.4 L213.2,12.3 L215.0,11.3 L216.7,14.7 L218.3,17.5 L220.0,19.9 L221.7,15.9 L223.3,13.4 L225.0,12.8 L226.7,13.9 L228.3,19.1 L230.0,19.8 L231.7,16.6 L233.3,14.6 L235.0,11.1 L236.7,12.9 L238.3,18.2 L240.0,21.1 L241.7,18.5 L243.3,14.9 L245.0,11.7 L246.7,11.9 L248.3,13.5 L250.0,13.0 L251.7,14.5 L253.3,13.8 L255.0,13.0 L256.7,15.0 L258.3,13.5 L260.0,11.7 L261.7,10.3 L263.3,10.0 L265.0,7.1 L266.7,8.7 L268.3,9.7 L270.0,11.1 L271.7,11.6 L273.3,11.2 L275.0,13.1 L276.7,11.3 L278.3,10.3 L280.0,9.4 L281.7,9.4 L283.3,8.8 L285.0,7.9 L286.7,10.3 L288.3,11.9 L290.0,13.5 L291.7,15.0 L293.3,15.9 L295.0,15.1 L296.7,17.7 L298.3,14.2 L300,14.0 L300,64 L0,64Z"
                  fill="url(#chartFill)"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
            </div>
            
            <div className="flex items-center justify-end w-full gap-5 mt-1 pr-1">
              <div className="flex items-center gap-1.5">
                <FaEthereum size={13} className="text-[#8E91A0]" />
                <span className="text-[13px] font-semibold text-[#1C1E23]">
                  {ethPrice !== null ? `$${ethPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$...'}
                </span>
                <span className={`text-[12px] font-medium ${ethChange !== null && ethChange >= 0 ? 'text-[#27C193]' : 'text-[#F87171]'}`}>
                  {ethChange !== null ? `${ethChange >= 0 ? '+' : ''}${ethChange.toFixed(2)}%` : '...'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Fuel size={14} className="text-[#8E91A0]" />
                <span className="text-[13px] font-semibold text-[#1C1E23]">{gasPriceGwei}</span>
                <span className="text-[12px] font-medium text-[#8E91A0]">Gwei</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* NFT card + skills — full width, 2-col on desktop */}
      <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-16 py-2 min-h-0">
        {/* NFT card */}
        <Link href="/mint" className="no-underline group h-full">
          <div className="h-full rounded-[20px] border border-[#E5E9F2] p-4 flex flex-col justify-between transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1">
            <div className="w-full flex-1 relative flex justify-center items-center mb-3 min-h-[100px]">
              <Image src="/businessCard.jpg" alt="NFT Business Card" fill
                className="object-contain rounded-[12px]  transition-transform group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col items-center text-center flex-shrink-0">
              <p className="text-[16px] font-semibold text-[#1C1E23]">NFT Business Card</p>
              <div className="inline-flex items-center gap-1.5 bg-[#EEF1FF] px-2.5 py-1 rounded-full mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B65FF]" />
                <p className="font-mono text-[11px] font-medium text-[#4B65FF]">0x76526b...031d5d</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Recent Transactions */}
        <div className="flex flex-col h-full min-h-0 rounded-[20px] border border-[#E5E9F2] overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E9F2] flex-shrink-0">
            <p className="font-mono text-[11px] text-[#8E91A0] uppercase tracking-wider font-semibold">Recent transactions</p>
            <Link href="/projects" className="font-mono text-[11px] font-medium text-[#4B65FF] no-underline hover:text-[#3A54E5] transition-colors">
              View all →
            </Link>
          </div>
          <div className="flex-1 flex flex-col">
            {recentProjects.map((tx, i) => (
              <motion.a
                key={tx.hash}
                href={tx.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className={`flex-1 flex items-center gap-3 px-5 py-2 no-underline hover:bg-[#F5F6FA] transition-colors
                  ${i < recentProjects.length - 1 ? 'border-b border-[#E5E9F2]' : ''}`}
              >
       

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1C1E23] truncate">{tx.name}</p>
                  <p className="font-mono text-[10px] text-[#8E91A0] mt-0.5">{tx.hash}</p>
                </div>

                {/* date */}
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="font-mono text-[10px] font-medium text-[#8E91A0] bg-[#F5F6FA] px-2 py-0.5 rounded-md">{tx.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <Link href="/mint"
        className="block text-center text-[11px] text-[#8E91A0] pb-3 pt-1 flex-shrink-0 no-underline hover:text-[#4B4D59] transition-colors">
        Connect your wallet to mint your own copy →
      </Link>
    </div>
    </>
  );
};

export default Home;
