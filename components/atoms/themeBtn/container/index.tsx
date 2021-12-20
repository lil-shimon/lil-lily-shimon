import { ThemeToggleBtnPresenter } from '../presenter';
import { useColorMode } from '@chakra-ui/react';

/**
 * ThemeToggleBtnContainer
 * @constructor
 */
export const ThemeToggleBtnContainer = () => {

  const { toggleColorMode } = useColorMode()

  return <ThemeToggleBtnPresenter toggleColourMode={toggleColorMode}/>
}