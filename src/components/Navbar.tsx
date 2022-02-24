import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    HStack,
    Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { ReactNode, useEffect } from 'react'
import { useMoralis } from "react-moralis"
import avatarImage from '../../public/username.svg'
import { SearchForm } from './SearchForm';

interface navbarInterface{ 

}

interface navLinkInterface{
    href: string, 
    path?: string, 
    target?: string,
    children: string
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { authenticate, isAuthenticated, user, logout} = useMoralis();

    useEffect(() => {
        console.log("get user info: ", user)
    }, [user])

    return (
    <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={8} alignItems={'center'}>
                <Box>Logo</Box>
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
                <Button onClick={onOpen}>Search</Button>
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
                
                <SearchForm onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
                </Stack>
            </Flex>
            </Flex>
        </Box>
        </>
    );    
}