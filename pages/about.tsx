import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedinIn, FaTwitter,
  FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython,
  FaHtml5, FaCss3Alt, FaPhp, FaDocker, FaNpm,
  FaEthereum,
} from 'react-icons/fa';
import {
  SiTypescript, SiSolidity, SiChakraui, SiPrettier,
  SiPnpm, SiTailwindcss, SiVercel, SiMongodb,
  SiNumpy, SiGitbook, SiNextdotjs, SiGnubash,
} from 'react-icons/si';
import { MdMail, MdSportsFootball, MdFitnessCenter, MdDirectionsRun, MdBarChart } from 'react-icons/md';

type Skill = { label: string; Icon: React.ElementType; color: string; bg: string };

const devSkills: Skill[] = [
  { label: 'JavaScript',  Icon: FaJs,          color: '#ca8a04', bg: '#fefce8' },
  { label: 'TypeScript',  Icon: SiTypescript,   color: '#2563eb', bg: '#eff6ff' },
  { label: 'React',       Icon: FaReact,        color: '#0891b2', bg: '#ecfeff' },
  { label: 'Node.js',     Icon: FaNodeJs,       color: '#16a34a', bg: '#f0fdf4' },
  { label: 'Next.js',     Icon: SiNextdotjs,    color: '#1e293b', bg: '#f8fafc' },
  { label: 'Git',         Icon: FaGitAlt,       color: '#dc2626', bg: '#fef2f2' },
  { label: 'Prettier',    Icon: SiPrettier,     color: '#1a56db', bg: '#eff6ff' },
  { label: 'Solidity',    Icon: SiSolidity,     color: '#6366f1', bg: '#eef2ff' },
  { label: 'Python',      Icon: FaPython,       color: '#ca8a04', bg: '#fefce8' },
  { label: 'Chakra UI',   Icon: SiChakraui,     color: '#0891b2', bg: '#ecfeff' },
  { label: 'npm',         Icon: FaNpm,          color: '#dc2626', bg: '#fef2f2' },
  { label: 'pnpm',        Icon: SiPnpm,         color: '#ca8a04', bg: '#fefce8' },
  { label: 'Tailwind',    Icon: SiTailwindcss,  color: '#0891b2', bg: '#ecfeff' },
  { label: 'GitHub',      Icon: FaGithub,       color: '#1e293b', bg: '#f8fafc' },
  { label: 'HTML5',       Icon: FaHtml5,        color: '#ea580c', bg: '#fff7ed' },
  { label: 'PHP',         Icon: FaPhp,          color: '#6366f1', bg: '#eef2ff' },
  { label: 'CSS',         Icon: FaCss3Alt,      color: '#2563eb', bg: '#eff6ff' },
  { label: 'Vercel',      Icon: SiVercel,       color: '#1e293b', bg: '#f8fafc' },
  { label: 'Ethereum',    Icon: FaEthereum,     color: '#6366f1', bg: '#eef2ff' },
  { label: 'MongoDB',     Icon: SiMongodb,      color: '#16a34a', bg: '#f0fdf4' },
  { label: 'Matplotlib',  Icon: MdBarChart,     color: '#2563eb', bg: '#eff6ff' },
  { label: 'NumPy',       Icon: SiNumpy,        color: '#2563eb', bg: '#eff6ff' },
  { label: 'GitBook',     Icon: SiGitbook,      color: '#1e293b', bg: '#f8fafc' },
  { label: 'Docker',      Icon: FaDocker,       color: '#2563eb', bg: '#eff6ff' },
  { label: 'Bash',        Icon: SiGnubash,      color: '#16a34a', bg: '#f0fdf4' },
];

const education = [
  { institution: 'ESME Paris', degree: 'Third-Year General Engineering (International, English-Taught Program)', period: 'Sept. 2023 – July 2028' },
  { institution: 'RMIT Vietnam', degree: 'Semester Abroad (Ho Chi Minh)', period: 'Sept. 2026 – Jan. 2027' },
  { institution: 'Lycée Montalembert, Courbevoie', degree: 'Science Baccalaureate — Mathematics & Physics', period: 'Sept. 2020 – July 2023' },
  { institution: 'Collège Sainte Geneviève, Courbevoie', degree: 'Middle school', period: '2018 – 2020' },
  { institution: 'Lycée Lyautey, Casablanca', degree: 'Middle school', period: '2016 – 2018' },
];

const experience = [
  {
    role: 'CNM Agency — Co-founder',
    desc: 'Web creation agency building digital products for startups, SMEs, and entrepreneurs — from wireframe to production.',
    period: '2025 — Present',
    link: 'https://www.linkedin.com/company/cnm-agency/',
    linkIcon: 'linkedin',
  },
  {
    role: 'Saint-Louis Hospital (AP-HP) — Web Dev Intern',
    desc: 'Developed an online defibrillator simulation platform combining healthcare, education, and technology.',
    period: 'June – July 2025',
    link: 'https://github.com/Mariussgal/Defib_simulation',
    linkIcon: 'github',
  },
  {
    role: 'Les terrasses du clapas (Waiter and dishwasher)',
    desc: 'Took customer orders and provided attentive table service in a fast-paced environment. Managed high-pressure situations, ensuring smooth service and customer satisfaction.',
    period: 'July – August 2024',
  },
  {
    role: 'D-MAX (Moving company)',
    desc: 'Completed 50+ moves, efficient organisation and safe handling of heavy loads.',
    period: 'June – July 2022/23/24',
  },
  {
    role: 'Levallois entraide (Volunteering)',
    desc: 'Collected clothing, food, and essential supplies for humanitarian aid in Ukraine.',
    period: 'Oct. 2021 – June 2022',
  },
];

const languages = [
  { lang: 'French', level: 'Native', pct: 100 },
  { lang: 'English', level: 'Fluent', pct: 85 },
  { lang: 'Spanish', level: 'Beginner', pct: 25 },
];

const contacts = [
  { icon: MdMail, label: 'Email', href: 'mailto:marius.gal@esme.fr', color: '#3358d4' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/mariussgal', color: '#1e293b' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/in/mariusgal', color: '#0077b5' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/mariusgal', color: '#1da1f2' },
];

const Row = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col h-full">
    <p className="font-mono text-[12px] font-semibold text-[#8E91A0] uppercase tracking-wider mb-4">{title}</p>
    <div className="flex-1 rounded-[20px] border border-[#E5E9F2] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden">{children}</div>
  </div>
);

const About: NextPage = () => (
  <div className="flex flex-col min-h-full">
    {/* Hero */}
    <div className="w-full px-8 md:px-16 pt-8 pb-6 flex-shrink-0 z-10 bg-white border-b border-[#E5E9F2]">
      <div className="flex items-center gap-6">
        <div className="w-[80px] h-[80px] rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E5E9F2] overflow-hidden flex-shrink-0">
          <Image src="/headshot.jpg" alt="Marius Gal" width={80} height={80} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[36px] font-extrabold text-[#1C1E23] leading-tight tracking-tight">Marius Gal</h1>
          <p className="font-mono text-[12px] text-[#4B65FF] font-semibold tracking-widest uppercase mt-2">Generalist engineering student</p>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="w-full px-8 md:px-16 py-8 flex flex-col gap-8">

      {/* Education + Experience — 2-col */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Row title="Education">
          {education.map((ed, i) => (
            <motion.div key={ed.institution}
              initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`px-6 py-5 hover:bg-[#F5F6FA] transition-colors ${i < education.length - 1 ? 'border-b border-[#E5E9F2]' : ''}`}>
              <p className="text-[15px] font-semibold text-[#1C1E23]">{ed.institution}</p>
              <p className="text-[13px] font-medium text-[#4B4D59] mt-1 leading-snug">{ed.degree}</p>
              <p className="font-mono text-[11px] font-medium text-[#8E91A0] bg-[#F5F6FA] px-2 py-0.5 rounded-md inline-block mt-3">{ed.period}</p>
            </motion.div>
          ))}
        </Row>

        <Row title="Experience">
          {experience.map((exp, i) => (
            <div key={exp.role}
              className={`px-6 py-5 hover:bg-[#F5F6FA] transition-colors ${i < experience.length - 1 ? 'border-b border-[#E5E9F2]' : ''}`}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-[15px] font-semibold text-[#1C1E23] flex-1">{exp.role}</p>
                <span className="font-mono text-[11px] font-medium text-[#8E91A0] bg-[#F5F6FA] px-2 py-0.5 rounded-md flex-shrink-0">{exp.period}</span>
              </div>
              <p className="text-[13px] font-medium text-[#4B4D59] mt-1.5 leading-relaxed">{exp.desc}</p>
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B65FF] no-underline hover:text-[#3A54E5] transition-colors mt-3">
                  {exp.linkIcon === 'github' ? <FaGithub size={14} /> : <FaLinkedinIn size={14} />} View
                </a>
              )}
            </div>
          ))}
        </Row>
      </div>

      {/* Languages + Assets — 2-col */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Row title="Languages">
          <div className="flex flex-col justify-center h-full px-6 py-6 gap-4">
            {languages.map((l, i, arr) => (
              <div key={l.lang} className={`flex items-center gap-3 ${i < arr.length - 1 ? 'border-b border-[#E5E9F2] pb-4' : ''}`}>
                <div className="w-2 h-2 rounded-full bg-[#4B65FF] flex-shrink-0" />
                <span className="text-[15px] font-medium text-[#1C1E23] flex-1">{l.lang}</span>
                <span className="text-[13px] font-medium text-[#8E91A0] bg-[#F5F6FA] px-2.5 py-1 rounded-md">{l.level}</span>
              </div>
            ))}
          </div>
        </Row>

        <Row title="Assets">
          <div className="flex flex-col justify-center h-full px-6 py-6 gap-4">
            {['Team spirit', 'Adaptability and flexibility', 'Sense of organization'].map((asset, i, arr) => (
              <div key={asset} className={`flex items-center gap-3 ${i < arr.length - 1 ? 'border-b border-[#E5E9F2] pb-4' : ''}`}>
                <div className="w-2 h-2 rounded-full bg-[#4B65FF] flex-shrink-0" />
                <span className="text-[15px] font-medium text-[#1C1E23]">{asset}</span>
              </div>
            ))}
          </div>
        </Row>
      </div>

      {/* Hobbies — full width */}
      <div>
        <Row title="Hobbies">
          <div className="flex flex-col md:flex-row md:items-stretch h-full">
            {[
              { title: 'Rugby', desc: 'Espoirs Fédérale 1 level at the Courbevoie rugby club', date: '2012 - Present' },
              { title: 'Weight lifting', desc: 'Practicing as a supplement to improve my rugby skills', date: '2023 - Present' },
              { title: 'Running', desc: 'Completed the half Marathon of Madrid in 1h53', date: '2021' }
            ].map((hobby, i, arr) => (
              <div key={hobby.title} className={`flex flex-col justify-center p-6 flex-1 ${i < arr.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#E5E9F2]' : ''} hover:bg-[#F5F6FA] transition-colors`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[16px] font-semibold text-[#1C1E23]">{hobby.title}</span>
                  <span className="font-mono text-[11px] font-medium text-[#8E91A0] bg-[#F5F6FA] px-2 py-0.5 rounded-md flex-shrink-0">{hobby.date}</span>
                </div>
                <p className="text-[13px] font-medium text-[#4B4D59] leading-relaxed">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </Row>
      </div>

      {/* Skills */}
      <div>
        <p className="font-mono text-[12px] font-semibold text-[#8E91A0] uppercase tracking-wider mb-4">Skills</p>
        <div className="flex flex-wrap gap-2.5">
          {devSkills.map(({ label, Icon, color, bg }) => (
            <motion.span key={label}
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 text-[14px] font-medium px-3.5 py-2 rounded-[12px] shadow-sm transition-all"
              style={{ color: '#1C1E23', backgroundColor: '#FFFFFF', border: `1px solid ${color}30` }}>
              <span className="p-1 rounded-md flex items-center justify-center" style={{ backgroundColor: bg }}>
                 <Icon size={14} style={{ color }} />
              </span>
              {label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact">
        <p className="font-mono text-[12px] font-semibold text-[#8E91A0] uppercase tracking-wider mb-4 mt-4">Contact</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contacts.map(({ icon: Icon, label, href, color }) => (
            <a key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center justify-center gap-3 p-5 rounded-[20px] border border-[#E5E9F2] bg-white no-underline hover:bg-[#F5F6FA] hover:-translate-y-1 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: color + '15' }}>
                <Icon size={20} style={{ color }} />
              </div>
              <span className="text-[14px] font-medium text-[#1C1E23]">{label}</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default About;
