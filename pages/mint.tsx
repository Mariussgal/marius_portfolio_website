import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { motion } from 'framer-motion';
import ClientOnly from '../components/ClientOnly';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract';

declare global {
  interface Window { ethereum?: any; }
}

function truncateAddress(addr: string) {
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

const recentMints = [
  { addr: '0x3a1f...mint', label: 'Minted Business Card #001', time: '2 days ago' },
  { addr: '0x9c2d...mint', label: 'Minted Business Card #002', time: '5 days ago' },
  { addr: '0x7b4a...mint', label: 'Minted Business Card #003', time: '1 week ago' },
];

const Mint: NextPage = () => {
  const { isConnected, address } = useAccount();
  const toast = useToast();
  const [isMinting, setIsMinting] = useState(false);

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
    <div className="flex flex-col h-[calc(100dvh-144px)] overflow-y-auto overflow-x-hidden lg:overflow-hidden">
      {/* Hero */}
      <div className="w-full px-8 md:px-16 pt-6 pb-4 flex-shrink-0 z-10 bg-white border-b border-[#E5E9F2]">
        <div className="flex flex-col">
          <p className="font-mono text-[10px] text-[#8E91A0] font-semibold tracking-widest uppercase mb-0.5">Mint NFT</p>
          <h1 className="text-[28px] font-extrabold text-[#1C1E23] leading-tight tracking-tight">Business Card</h1>
          <p className="font-mono text-[11px] text-[#4B65FF] font-semibold tracking-widest uppercase mt-1">Free on Sepolia testnet</p>
        </div>
      </div>

      {/* Main content — 2-col on desktop */}
      <div className="w-full flex-1 lg:overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 md:px-16 py-6 min-h-min lg:min-h-0 pb-10">
        {/* Left: NFT preview */}
        <div className="flex flex-col h-full rounded-[20px] border border-[#E5E9F2] p-4 bg-white min-h-[350px] lg:min-h-0">
          <div className="w-full flex-1 relative flex justify-center items-center mb-3 min-h-[200px] lg:min-h-0">
            <Image src="/businessCard.jpg" alt="NFT Business Card" fill
              className="object-contain rounded-[12px] " />
          </div>
          <div className="mt-auto flex-shrink-0">
            <p className="text-[16px] font-semibold text-[#1C1E23]">Marius Gal — Business Card</p>
            <div className="flex items-center justify-between mt-1.5">
               <p className="font-mono text-[11px] text-[#8E91A0] break-all">{CONTRACT_ADDRESS}</p>
           
            </div>
            <p className="text-[13px] font-medium text-[#4B4D59] mt-2.5 leading-relaxed">
              Mint my NFT business card to keep in touch. Free to mint on Sepolia testnet.
            </p>
            <div className="flex flex-col gap-2 mt-3">
              <a href="https://ipfs.io/ipfs/bafkreiebxd7imb32wuqbtvrkf7kn6sws2b57xhdc6qdkvdijb4iqj6ilru"
                target="_blank" rel="noopener noreferrer"
                className="text-[12px] font-medium text-[#4B65FF] no-underline hover:text-[#3A54E5] transition-colors inline-flex items-center gap-1">
                View metadata on IPFS →
              </a>
            </div>
          </div>
        </div>

        {/* Right: wallet + activity */}
        <div className="flex flex-col h-full min-h-0">
          <ClientOnly fallback={<div className="bg-white rounded-[20px] border border-[#E5E9F2] p-6 animate-pulse h-full shadow-[0_4px_24px_rgba(0,0,0,0.02)]" />}>
            <WalletBlock isConnected={isConnected} address={address} isMinting={isMinting} onMint={mintNFT} />
          </ClientOnly>
        </div>
      </div>
    </div>
  );
};

function WalletBlock({ isConnected, address, isMinting, onMint }: {
  isConnected: boolean; address?: string; isMinting: boolean; onMint: () => void;
}) {
  return (
    <div className="bg-white rounded-[20px] border border-[#E5E9F2] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] text-center flex flex-col items-center justify-center flex-1 h-full min-h-0">
      {!isConnected ? (
        <div className="flex flex-col items-center gap-4">
      
          <p className="text-[15px] font-semibold text-[#1C1E23]">Connect your wallet first</p>
          <ConnectButton />
          <p className="font-mono text-[11px] text-[#8E91A0] mt-1">Requires Sepolia ETH for gas</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
          <div className="bg-[#F5F6FA] rounded-[16px] p-3 flex flex-col items-center gap-2 border border-[#E5E9F2]">
            <div className="flex items-center gap-2">
              <span className="text-[#27C193] animate-pulse">●</span>
              <span className="text-[13px] font-semibold text-[#1C1E23]">Connected</span>
            </div>
            {address && <span className="font-mono text-[12px] font-medium text-[#8E91A0] bg-white px-3 py-1 rounded-md shadow-sm">{truncateAddress(address)}</span>}
          </div>
          <button onClick={onMint} disabled={isMinting}
            className="w-full rounded-[14px] py-3.5 text-[14px] font-semibold text-white flex items-center justify-center gap-3 transition-all disabled:opacity-70 hover:opacity-90 hover:scale-[1.02] shadow-[0_4px_16px_rgba(75,101,255,0.3)]"
            style={{ backgroundColor: '#4B65FF' }}>
            {isMinting ? (
              <>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Minting...
              </>
            ) : 'Sign & Mint →'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Mint;
