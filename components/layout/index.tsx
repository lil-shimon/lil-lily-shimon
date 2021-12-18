import { FC } from 'react';
import { LayoutContainer } from './container';

/// TODO: change type
/**
 * Layout Props
 */
export interface LayoutProps {
  children: any;
  router: any
}

/**
 * Layout Component
 * @param children
 * @param router
 * @constructor
 */
export const Layout: FC<LayoutProps> = ({ children, router }) => {
  return <LayoutContainer router={router} children={children} />;
};