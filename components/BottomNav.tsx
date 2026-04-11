import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, LayoutGrid, Zap, Diamond, FileText } from 'lucide-react';

const tabs = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/projects', label: 'Projects', Icon: LayoutGrid },
  { href: '/about', label: 'Activity', Icon: Zap },
  { href: '/cv-marius-gal.pdf', label: 'Resume', Icon: FileText, isDownload: true },
  { href: '/mint', label: 'Mint', Icon: Diamond },
];

export default function BottomNav() {
  const { pathname } = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-[#E5E9F2] flex items-center justify-around px-2 z-50 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
      {tabs.map(({ href, label, Icon, isDownload }) => {
        const active = pathname === href;
        
        const innerContent = (
          <>
            <div className={`p-1.5 rounded-xl transition-all duration-300 ${active ? 'bg-[#EEF1FF] text-[#4B65FF] scale-110' : 'text-[#8E91A0] group-hover:bg-[#F5F6FA] group-hover:text-[#4B4D59]'}`}>
               <Icon
                 size={24}
                 strokeWidth={active ? 2.5 : 2}
               />
            </div>
            <span
              className={`text-[10px] font-medium transition-colors duration-300 ${active ? 'text-[#4B65FF]' : 'text-[#8E91A0] group-hover:text-[#4B4D59]'}`}
            >
              {label}
            </span>
          </>
        );

        if (isDownload) {
          return (
            <a key={href} href={href} download="cv-marius-gal.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 no-underline w-16 group cursor-pointer">
              {innerContent}
            </a>
          );
        }

        return (
          <Link key={href} href={href} className="flex flex-col items-center gap-1 no-underline w-16 group">
            {innerContent}
          </Link>
        );
      })}
    </nav>
  );
}
