import { FC } from 'react';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

/**
 * ThemeToggleBtnPresenter Props
 */
interface ThemeToggleBtnPresenterProps {
  toggleColourMode: any
}

/**
 * ThemeToggleBtnPresenter
 * @param toggleColourMode
 * @constructor
 */
export const ThemeToggleBtnPresenter: FC<ThemeToggleBtnPresenterProps> = ({ toggleColourMode }) => {
  return (
    <IconButton aria-label={'Toggle theme'}
                colorScheme={useColorModeValue('purple', 'orange')}
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                onClick={toggleColourMode}>

    </IconButton>
  )
}