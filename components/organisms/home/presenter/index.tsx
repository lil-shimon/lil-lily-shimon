import { FC } from 'react';
import { Box, Container, Heading, Image } from '@chakra-ui/react';

interface HomePresenterProps {
  profileImg: string;
}

/**
 * HomePresenter
 * @constructor
 */
export const HomePresenter: FC<HomePresenterProps> = ({ profileImg }) => {
  return (
    <Container>
      <Box display={{ md: 'flex' }} my={100}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'} mb={10}>
            Kenta Shimosawa,
          </Heading>
          <p>
            Japan born, Saitama based Product manager, & developer.
          </p>
        </Box>

        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={'center'}>
          <Image borderColor={'whiteAlpha.800'} borderWidth={2} borderStyle={'solid'} maxWidth={'350px'}
                 display={'inline-block'} src={profileImg} alt={'Profile Image'} />
        </Box>
      </Box>
    </Container>
  );
};