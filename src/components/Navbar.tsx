import {
    Box,
    Flex,
    Link,
    Button,
    Image,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text,
    HStack
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { ReactNode, useEffect } from 'react'
import { useMoralis } from "react-moralis"
import avatarLogo from '../../public/logo.png'
import avatarLogoDark from '../../public/logo-black.png'
import { SearchForm } from './SearchForm';
import Web3 from 'web3';
import abi from '../../box_abi.json';
import {AbiItem} from 'web3-utils';
import Web3Modal from "web3modal";
import { CreateForm } from './CreateForm';

interface navbarInterface{ 

}

type LinkObject = {
    Title: string,
    Link: string
}

const Links: LinkObject[] = [
    {
        Title: "Home",
        Link: "/"
    },
    {
        Title: "Marketplace",
        Link: "/marketplace"
    },
    {
        Title: "Your collection",
        Link: "/collection"
    },
    {
        Title: 'Create NFT',
        Link: "/create_nft"
    }
];

const NavLink = ({ children, href }: { children: ReactNode, href: string}) => (

    <NextLink href={href}>
        <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
        </Link>
    </NextLink>
);

export const Navbar: React.FC<navbarInterface> = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { 
        isOpen: isOpenCreateModal, 
        onOpen: onOpenCreateModal, 
        onClose: onCloseCreateModal 
    } = useDisclosure()
    const { 
        isOpen: isOpenSearchModal, 
        onOpen: onOpenSearchModal, 
        onClose: onCloseSearchModal 
    } = useDisclosure()
    const { authenticate, isAuthenticated, user, logout} = useMoralis();
    useEffect(() => {
        console.log("get user info: ", user)
    }, [user])

    return (
        <Flex position="sticky" top={0} zIndex={1} >
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} width="100%">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={8} alignItems={'center'}>
                <Image src={colorMode == 'light' ? avatarLogoDark.src : avatarLogo.src} alt="" maxWidth="20%"/>
                <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                    <NavLink key={link.Title} href={link.Link}>{link.Title}</NavLink>
                ))}
                </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                    <Button onClick={onOpenCreateModal}>Create</Button>
                    <Button onClick={onOpenSearchModal}>Search</Button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    { !isAuthenticated ? 
                        <Button colorScheme='blue' onClick={() =>{console.log("login");  authenticate()}}>
                                Login
                        </Button>
                        : <>
                            <Text align="center">{user?.attributes.ethAddress}</Text>
                            <Button colorScheme='blue' onClick={() =>{console.log("logout");  logout()}}>
                                logout
                            </Button>
                            {/* <Menu>
                                <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={avatarImage.src}
                                />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                <br />
                                <Center>
                                    <Avatar
                                    size={'2xl'}
                                    src={avatarImage.src}
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>{user?.attributes.ethAddress}</p>
                                </Center>
                                <br />
                                    <MenuDivider />
                                    <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </Menu> */}
                        </>
                        
                    }
                    <CreateForm onOpen={onOpenCreateModal} isOpen={isOpenCreateModal} onClose={onCloseCreateModal}/>
                    <SearchForm onOpen={onOpenSearchModal} isOpen={isOpenSearchModal} onClose={onCloseSearchModal}/>
                </Stack>
            </Flex>
            </Flex>
        </Box>
        </Flex>
    );    
}