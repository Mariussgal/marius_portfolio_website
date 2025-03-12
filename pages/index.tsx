import type { NextPage } from 'next';
import Marquee from "react-fast-marquee";
import { useState,  } from 'react';
import { Box, Flex, VStack, Text, Button, useToast, Heading, Link, Image } from '@chakra-ui/react';
import { useAccount,  } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import FlippableNFTCard from '../components/fFlippableNFTcard';



const CONTRACT_ADDRESS = "0x76526BC283456aa2445634f22D30020290031d5D";
const CONTRACT_ABI = 
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "safeMint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const Home: NextPage = () => {
  const { isConnected, address } = useAccount();
  
  
  const toast = useToast();

  const [isMinting, setIsMinting] = useState(false);

  const mintNFT = async () => {
    if (!isConnected) {
      toast({
        title: "Erreur",
        description: "Veuillez vous connecter à votre portefeuille.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract("0x76526BC283456aa2445634f22D30020290031d5D", CONTRACT_ABI, signer)

    try {
      setIsMinting(true);
      console.log("Minting NFT...");
      const tx = await contract.safeMint(address, "https://ipfs.io/ipfs/bafkreiebxd7imb32wuqbtvrkf7kn6sws2b57xhdc6qdkvdijb4iqj6ilru");
      await tx.wait();
      console.log("Transaction minted:", tx.hash);
      toast({
        title: "Success",
        description: `NFT successfully minted! Verify on Etherscan: https://sepolia.etherscan.io/tx/${tx.hash}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsMinting(false);

    } catch (err: any) {
      console.error("Minting error:", err);
      console.log("Minting error:");
      if (err?.code === 4001 || err?.reason === "rejected") {
        toast({
          title: "Error",
          description: "Transaction rejected by the user.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (err?.message?.toLowerCase().includes("network")) {
        toast({
          title: "Error",
          description: "Network connection problem.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Error while minting the NFT.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      setIsMinting(false);
    }
  };

  
    return (
	<Flex flexDirection="column" height="90vh" width="100%" color="#DCD7C9">
	  <Flex flex={1} justifyContent="center" alignItems="center" px={6}>
		<Box
		width="45%"
		textAlign="center"
		display="flex"
		flexDirection="column"
		alignItems="center"
		>

		<Box
      	width={["100px", "120px", "150px"]} 
      	height={["100px", "120px", "150px"]} 
      	borderRadius="50%" 
      	overflow="hidden" 
      	display="flex"
      	alignItems="center"
      	justifyContent="center"
    	>
      		<Image
        	src={"/headshot.jpg"}
        	alt='Marius Gal'
        	objectFit="cover"
     		width="100%" 
        	height="100%" 
        	sx={{ filter: 'brightness(105%)' }}
      		/>
    	</Box>
		<VStack spacing={3} align="center">
		  <Text fontSize={['3xl', '4xl']} fontWeight="bold">
			Hi, I'm <Text as="span" color="blue.500">Marius</Text>
		  </Text>
		</VStack>
		<Text fontSize={['md', 'lg']} mt={6} maxW="700px">
		  A generalist engineering student passionate about Blockchain
		  technology and DeFi, looking out for new experiences in web3.0!
		</Text>
		<Text fontSize="sm" fontWeight="semibold" letterSpacing="wide" mt={6} display={["none", "block"]}>
		  BUILD - EXPLORE - SCALE
		</Text>
		</Box>

		<Box width="45%" h="90%" w="1px" bg="#DCD7C9" mx={6} my={4} />

		<Box
		width="45%"
		display="flex"
		justifyContent="center"
		alignItems="center"
		flexDirection="column"
		textAlign="center"
		>
		
		  <Heading size="lg">My business card NFT</Heading>
		  <FlippableNFTCard/>
			
		  <Text fontSize={['md', 'lg']} mb={6} mt={6} maxW="700px">
			Connect your wallet and mint my business card NFT to keep in touch
			with me!
		  </Text>
		
		<Flex wrap="wrap" gap={2} >
		<VStack spacing={3}>
		  
		  <ConnectButton />
		  {isConnected && (
			<Button
			mt={20}
			colorScheme="teal"
			onClick={mintNFT}
			isLoading={isMinting}
			loadingText="Minting..."
			bg="#3182CE"
			
			>
			Mint my business card NFT
			</Button>
		  )}
		</VStack>
		</Flex>
		</Box>
	  </Flex>

	  <Box
		display="flex"
		justifyContent="center"
		height="10%"
		width="100%"
		mb={5}
	  >
		<Box
		display="flex"
		flexDirection="row"
		alignItems="center"
		height="auto"
		border="1px solid #DCD7C9"
		boxSizing="border-box"
		borderRadius="10px"
		width="100%"
		>
		<Marquee
		  direction="right"
		  speed={50}
		  gradient={false}
		  pauseOnHover={true}
		  style={{ width: '100%' }}
		>
		  <Text m="10px auto" mr={5} transition="all .15s linear">
			Marius GAL &copy; {new Date().getFullYear()}
		  </Text>
		  <Text mr={5} transition="all .15s linear">
			GENERALIST ENGINEERING STUDENT
		  </Text>
		  <Text mr={5} transition="all .15s linear">
			BLOCKCHAIN & DeFi ENTHUSIAST
		  </Text>
		</Marquee>
		</Box>
	  </Box>
	</Flex>
  );
};

export default Home;

