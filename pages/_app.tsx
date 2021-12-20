import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../components/layout';
import theme from '../libs/theme';

/**
 * WebsiteProps
 */
interface WebsiteProps {
  Component: any
  pageProps: any
  router: any
}

/**
 * Website <WebsiteProps>
 * @param Component
 * @param pageProps
 * @param router
 * @constructor
 */
const Website: FC<WebsiteProps> = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;