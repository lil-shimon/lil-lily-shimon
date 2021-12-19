import { FC } from 'react';
import { NavbarPresenter } from '../presenter';
import { NavbarProps as NavbarContainerProps} from '../index';

/**
 * Navbar Container
 * @constructor
 */
export const NavbarContainer: FC<NavbarContainerProps> = ({ path }) => {
  return <NavbarPresenter path={path}/>
}