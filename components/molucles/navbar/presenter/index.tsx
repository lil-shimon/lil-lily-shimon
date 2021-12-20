import { FC } from 'react';
import Link from 'next/link';
import {
  useColorModeValue,
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
import { ThemeToggleBtnComponent } from '../../../atoms/themeBtn';
import { LinkItemComponent } from '../../../atoms/linkItem';

/**
 * Navbar Presenter
 * @constructor
 */
export const NavbarPresenter: FC<NavbarPresenterProps> = ({ path }) => {

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
          <LinkItemComponent href={'/works'} path={path}>
            Works
          </LinkItemComponent>
          <LinkItemComponent href={'/posts'} path={path}>
            Posts
          </LinkItemComponent>
        </Stack>

        <Box flex={1} align={'right'}>
          <ThemeToggleBtnComponent />
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