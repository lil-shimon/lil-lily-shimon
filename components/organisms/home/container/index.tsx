import { FC } from 'react';
import { HomePresenter } from '../presenter';

/**
 * HomeContainer
 * @constructor
 */
export const HomeContainer: FC = () => {

  /// TODO: square image
  const profileImg = 'images/profileImg.jpg';

  return <HomePresenter profileImg={profileImg} />;
};