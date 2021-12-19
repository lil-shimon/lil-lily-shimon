import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { LayoutProps as LayoutPresenterProps } from '../index';
import { NavbarComponent } from '../../molucles/navbar';

/**
 * LayoutPresenter
 * @param children
 * @param router
 * @constructor
 */
export const LayoutPresenter: FC<LayoutPresenterProps> = ({ children, router }) => {
  return (
    <Box as={'main'} pb={8}>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <title>Lil shimon - HomePage</title>
      </Head>

      <NavbarComponent path={router.asPath}/>

      <Container maxW={'container.md'} pt={14}>
        {children}
      </Container>
    </Box>
  );
};