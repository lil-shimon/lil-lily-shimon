import { FC, ReactNode } from 'react';
import { LinkItemContainer } from './container';

/**
 * LinkItem Props
 */
export interface LinkItemProps {
  href: string,
  path: string,
  children: ReactNode
}

/**
 * LinkItemComponent
 * @param href
 * @param path
 * @param children
 * @constructor
 */
export const LinkItemComponent: FC<LinkItemProps> = ({ href, path, children}) => {
  return <LinkItemContainer href={href} path={path} children={children} />
}