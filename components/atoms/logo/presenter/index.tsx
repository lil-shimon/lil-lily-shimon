import { FC } from 'react';
import { Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useStyles } from './styles';

/**
 * LogoPresenterProps
 */
interface LogoPresenterProps {
  imgSrc: string
}

/**
 * Logo Presenter
 * @param imgSrc
 * @constructor
 */
export const LogoPresenter: FC<LogoPresenterProps> = ({ imgSrc }) => {

  const classes = useStyles()

  return (
    <Link href={'/'}>
      <a>
        <span className={classes.logoBox}>
          <Image src={imgSrc} width={8} height={8} alt={"logo"} />
          <Text color={useColorModeValue('grey.800', 'whiteAlpha.900')}
                fontFamily={'M PLUS Rounded 1c'}
                fontWeight={'bold'}
                ml={3}>
            shimon
          </Text>
        </span>
      </a>
    </Link>
  );
};