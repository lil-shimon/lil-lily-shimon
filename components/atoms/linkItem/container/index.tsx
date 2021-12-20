import { FC } from 'react';
import { LinkItemProps } from '../index';
import { LinkItemPresenter } from '../presenter';
import { useColorModeValue } from '@chakra-ui/react';

/**
 * LinkItemContainer
 * @param path
 * @param href
 * @param children
 * @constructor
 */
export const LinkItemContainer: FC<LinkItemProps> = ({ path, href, children }) => {

  /// 現在のURLと遷移先URLを比較
  const active = path === href;

  /// アクティブじゃない色定義
  const inactiveColour = useColorModeValue('gray200', 'whiteAlpha.900');

  /// LinkのbgColour
  const bgColour = active ? 'glassTeal' : undefined;

  /// Linkのcolour
  const linkColour = active ? '#202023' : inactiveColour;

  return <LinkItemPresenter href={href} children={children} bgColour={bgColour} linkColour={linkColour} />;
};