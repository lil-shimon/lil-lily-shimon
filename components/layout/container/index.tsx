import { FC } from 'react';
import { LayoutProps as LayoutPropsContainer } from '../index';
import { LayoutPresenter } from '../presenter';

/**
 * Layout Container
 * @param router
 * @param children
 * @constructor
 */
export const LayoutContainer: FC<LayoutPropsContainer> = ({ router, children}) => {
  return (
    <LayoutPresenter router={router} children={children} />
  )
}