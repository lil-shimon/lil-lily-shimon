import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useColorModeValue, Link as ChakraLink, Box } from '@chakra-ui/react';

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
export const NavbarPresenter: FC = () => {
  return (
    <Box position={'fixed'} as={'nav'} w={'100%'} bg={useColorModeValue('#ffffff40', '#20202380')}
         style={{ backdropFilter: 'blur(10px)' }} zIndex={1}>
      Navbar
    </Box>
  );
};