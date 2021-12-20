import { FC } from 'react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { LinkItemProps } from '../index';
import { PartiallyPartial } from '../../../../libs/type';

/**
 * LinkItemPresenterProps
 */
interface LinkItemPresenterInterface extends LinkItemProps {
  bgColour?: string
  linkColour: string
}

/**
 * LinkItemPresenterProps
 * href {string}
 * children {ReactElement}
 * linkColour {string}
 * bgColour {string | undefined}
 */
type LinkItemPresenterProps = PartiallyPartial<LinkItemPresenterInterface, 'path'>

/**
 * LinkItem Presenter
 * @param href
 * @param path
 * @param children
 * @constructor
 */
export const LinkItemPresenter: FC<LinkItemPresenterProps> = ({ href, children, linkColour, bgColour }) => {

  return (
    <Link href={href}>
      <ChakraLink p={2} bg={bgColour} color={linkColour}>
        {children}
      </ChakraLink>
    </Link>
  );
};
