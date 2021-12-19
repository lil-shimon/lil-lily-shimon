import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useColorModeValue, Link as ChakraLink, Box, Container, Flex, Heading } from '@chakra-ui/react';
import { NavbarProps as NavbarPresenterProps } from '../index';
import { LogoComponent } from '../../../atoms/logo';

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
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'} >
            <LogoComponent />
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};