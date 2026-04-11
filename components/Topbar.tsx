import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import ClientOnly from './ClientOnly';

function truncateAddress(addr: string) {
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 h-16 bg-white/80 backdrop-blur-md flex-shrink-0 z-40 border-b border-[#E5E9F2] sticky top-0">
      {/* Left: avatar + label */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-2 bg-white hover:bg-[#F5F6FA] transition-colors cursor-pointer rounded-full px-1.5 py-1.5 pr-4 border border-[#E5E9F2] shadow-sm">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-100">
             <img src="/headshot.jpg" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-[13px] text-[#1C1E23] leading-none ml-1">
            marius-gal.eth
          </span>
        </div>
      </div>

      {/* Right: wallet */}
      <ClientOnly fallback={
        <div className="bg-[#F5F6FA] text-[#8E91A0] text-[13px] font-semibold rounded-full px-5 py-2 opacity-50">
          Connect
        </div>
      }>
        <WalletButton />
      </ClientOnly>
    </header>
  );
}

function WalletButton() {
  const { isConnected, address } = useAccount();

  return (
    <ConnectButton.Custom>
      {({ openConnectModal, openAccountModal }) => {
        if (!isConnected || !address) {
          return (
            <button
              onClick={openConnectModal}
              className="flex items-center gap-2 bg-[#4B65FF] text-white text-[13px] font-semibold rounded-full px-5 py-2 hover:bg-[#3A54E5] transition-all shadow-[0_4px_12px_rgba(75,101,255,0.25)] hover:shadow-[0_6px_16px_rgba(75,101,255,0.3)] hover:-translate-y-0.5"
            >
              <span>Connect</span>
            </button>
          );
        }
        return (
          <button
            onClick={openAccountModal}
            className="flex items-center gap-2 bg-white border border-[#E5E9F2] text-[#1C1E23] text-[13px] rounded-full px-4 py-2 hover:bg-[#F5F6FA] transition-all font-mono font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span className="text-[#27C193] text-[10px] animate-pulse">●</span>
            <span>{truncateAddress(address)}</span>
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}
