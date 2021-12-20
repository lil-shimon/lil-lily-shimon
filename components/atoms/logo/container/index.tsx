import { LogoPresenter } from '../presenter';

/**
 * LogoContainer
 * @constructor
 */
export const LogoContainer = () => {

  const imgSrc = 'images/top-logo.png'
  return <LogoPresenter imgSrc={imgSrc} />;
};