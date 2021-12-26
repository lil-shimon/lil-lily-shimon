import { FC } from 'react';
import { Box, Container, Heading, Image } from '@chakra-ui/react';

interface HomePresenterProps {
  profileImg: string
}

/**
 * HomePresenter
 * @constructor
 */
export const HomePresenter: FC<HomePresenterProps> = ({ profileImg }) => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'red'} p={3} mb={6} align={'center'}>
        Thanks for visiting. I&apos;m working as a full-stack developer.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Lil shimon
          </Heading>
          <p>
            SoftWare directer in 3 months of graduate (Front-End / Server-Side / Mobile)
          </p>
        </Box>

        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={'center'}>
          <Image borderColor={'whiteAlpha.800'} borderWidth={2} borderStyle={'solid'} maxWidth={'100px'}
                 display={'inline-block'} borderRadius={'full'} src={profileImg} alt={'Profile Image'} />
        </Box>
      </Box>
    </Container>
  );
};