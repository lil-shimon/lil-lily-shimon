import { NavbarContainer } from './container';
import { FC } from 'react';

/**
 * NavbarProps
 */
export interface NavbarProps {
  path: any
}

/**
 * Navbar Component
 * @constructor
 */
export const NavbarComponent: FC<NavbarProps> = ({ path }) => {
  return <NavbarContainer path={path}/>
}