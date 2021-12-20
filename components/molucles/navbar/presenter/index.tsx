import { FC, ReactNode } from 'react';
import Link from 'next/link';
import {
  useColorModeValue,
  Link as ChakraLink,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton, IconButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import { NavbarProps as NavbarPresenterProps } from '../index';
import { LogoComponent } from '../../../atoms/logo';
import { HamburgerIcon } from '@chakra-ui/icons';

/**
 * LinkItem Presenter Props
 */
interface LinkItemPresenterProps {
  href: string,
  path: string,
  children: ReactNode
}

/**
 * LinkItem Presenter
 * @param href
 * @param path
 * @param children
 * @constructor
 */
const LinkItemPresenter: FC<LinkItemPresenterProps> = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColour = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link href={href}>
      <ChakraLink p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColour}>
        {children}
      </ChakraLink>
    </Link>
  );
};

/**
 * Navbar Presenter
 * @constructor
 */
export const NavbarPresenter: FC<NavbarPresenterProps> = ({ path }) => {

  console.log('path', path);

  return (
    <Box position={'fixed'} as={'nav'} w={'100%'} bg={useColorModeValue('#ffffff40', '#20202380')}
         style={{ backdropFilter: 'blur(10px)' }} zIndex={1}>
      <Container display={'flex'} p={2} maxW={'container.md'} wrap={'wrap'} align={'center'} justify={'space-between'}>
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <LogoComponent />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto ' }}
          alignItems={'center'}
          flexGlow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItemPresenter href={'/works'} path={path}>
            Works
          </LinkItemPresenter>
          <LinkItemPresenter href={'/posts'} path={path}>
            Posts
          </LinkItemPresenter>
        </Stack>

        <Box flex={1} align={'right'}>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }} />
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant={'outline'} aria-label={'Options'} />
              <MenuList>
                <Link href={'/'} passHref>
                  <MenuItem>About</MenuItem>
                </Link>
                <Link href={'/works'} passHref>
                  <MenuItem>Works</MenuItem>
                </Link>
                <Link href={'/posts'} passHref>
                  <MenuItem>Posts</MenuItem>
                </Link>
                <Link href={'https://github.com/lil-shimon'} passHref>
                  <MenuItem>View Source</MenuItem>
                </Link>
              </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};