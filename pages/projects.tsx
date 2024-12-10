import type { NextPage } from 'next';
import { Project } from '../ts/types';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Box, Text, Flex, Icon, Heading, Link, Circle, Grid } from '@chakra-ui/react';
import * as Icons from '../icons';
import { IoIosCheckmark } from 'react-icons/io';

const projects: NextPage = () => {

  const ercs = ["ERC-20", "ERC-721(A)", "ERC-1155", "ERC-2981", "Access Control", "PaymentSplitter"];
  const tools = ["Git - Github", "Slack", "Notion", "Figma"];
  const devSkills = ["Rust", "TypeScript", "JavaScript", "C#", "Nextjs", "React", "Node.js", "Python", "HTML", "Matlab", "Java", "Dart", "Flutter"];

  const cards: Project[] = [
    {
      name: 'Key-Value Commitments (KVaC) for Stateless Blockchains ',
      date: 'Sept. 2024 - Dec. 2024',
      description: 'Conducting a programming project as part of my independent study supervised by Professor Benedikt Bünz, I am implementing a key-value commitment scheme from Shashank Agrawal and Srinivasan Raghuraman in Rust, known as KVaC.',
      githubLink: 'https://github.com/jjeangal/rust-kvac',
      projectLink: 'https://eprint.iacr.org/2020/1161'
    },
    {
      name: 'Course Assistant @ NYU',
      date: 'Sept. - Dec. 2024',
      description: 'Preparing and giving technical lectures and solidity workshops for 60 undergraduates students taking the course “CSGY CS-UY 3943 9223 Introduction to Blockchain and Distributed Ledger Technology” taught by professor Ayesha Kiani.',
    },
    {
      name: 'Computer Security Grader @ NYU',
      date: 'Sept. - Dec. 2024',
      description: 'Grading the homework and technical projects of 95 undergraduates students taking the course “CSCI-UA.0480-​063 Special Topics: Introduction to Computer Security” led by professor Benedikt Bünz.',
      projectLink: 'https://cs.nyu.edu/~jcb/CSCI-UA.0480-063.html'
    },
    {
      name: 'Blockchain Core Engineer Intern @ Nethermind',
      date: 'May - Aug. 2024',
      description: 'Supported the transition of Verkle Trees cryptographic proof operations from C# to Rust for Netherminds Ethereum client, achieving 60-70% improvements in proof creation and verification times as part of the \'Verge\' Ethereum roadmap.',
      githubLink: 'https://github.com/NethermindEth/bandersnatch-sharp/commit/b1bb93709235283b9d9a4d5bf58f36c7a2cec1cd',
      projectLink: 'https://www.nethermind.io/verkle-trees'
    },
    {
      name: 'DAO Protocol with BLS Aggregate Signatures',
      date: 'Feb. - May 2024',
      description: 'Developed and benchmarked a DAO protocol leveraging BLS aggregate signature verification on Ethereum, achieving a 30% reduction in gas costs for transactions with over 38 signatures compared to ECDSA.',
      githubLink: 'https://github.com/jjeangal/bls-agg-dao',
      projectLink: 'https://github.com/jjeangal/bls-agg-dao/blob/main/DaoWithBLS.pdf'
    },
    {
      name: 'Co-founded Coal',
      date: 'Sept. 2023 - Mar. 2024',
      description: 'Coal is a cutting-edge web3 platform that streamlines digital rights management in the music industry, providing robust copyright violation detection.',
      githubLink: 'https://github.com/Coal-Organization/Coal-Dapp',
      projectLink: 'https://www.loom.com/share/8822c7ad16d24a70a4801c6418616f1b?sid=0f8b11de-06e5-4bef-903b-0f1a968b6970'
    },
    {
      name: 'Freelance Blockchain Developer @ Cheyni TV',
      date: 'Feb. - Mar. 2023',
      description: 'CHEYNI TV is a film streaming platform featuring NFTs and exclusive collectibles like backstages and special utilities. I developed a unique watch-to-earn model with smart contracts for the native Cheyni token and subscription system.',
      projectLink: 'https://www.cheyni.com/'
    },
    {
      name: 'Freelance Blockchain Developer @ KYCY Nextchain',
      date: 'Sept. 2022 - Jan. 2023',
      description: 'For the NFTouring project, I developed an NFT collection with a whitelist presale and enforced royalties. I wrote the smart contracts in Solidity, employing ERC721A and other secure protocols, and build a user-friendly minting dApp using Next.js and TypeScript.',
      githubLink: 'https://github.com/jjeangal/nftouring_mint_app',
      projectLink: 'https://nftouring-genesis-mint.vercel.app/'
    },
    {
      name: 'Software Engineer Intern @ Fundacion Chankuap',
      date: 'Nov. 2020 - Feb. 2021',
      description: 'Designed and implemented an ERP solution for the food and cosmetic supply chain of an Ecuadorian non-profit organization (cross-platform software application).',
      githubLink: 'https://github.com/jjeangal/chankuap_flutter',
      projectLink: 'https://chankuap.org/'
    },
    {
      name: 'Co-founded the Startup Iris',
      date: 'Feb. 2020 - Nov. 2021',
      description: 'Iris is a decentralized blockchain based news platform, promoting the publication of reliable and fact-checked articles.',
      githubLink: 'https://github.com/The-Iris-Team',
      projectLink: 'https://the-iris-team.github.io/'
    }
  ];

  return (
   "hello" 
  )
}

export default projects;