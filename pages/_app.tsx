import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../components/layout';

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
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;