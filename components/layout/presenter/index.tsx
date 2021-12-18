import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { LayoutProps as LayoutPresenterProps } from '../index';

/**
 * LayoutPresenter
 * @param children
 * @constructor
 */
export const LayoutPresenter: FC<LayoutPresenterProps> = ({ children }) => {
  return (
    <Box as={'main'} pb={8}>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <title>Lil shimon - HomePage</title>
      </Head>

      <Container maxW={'container.md'} pt={14}>
        {children}
      </Container>
    </Box>
  );
};