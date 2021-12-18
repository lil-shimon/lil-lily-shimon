import { Box, Container } from '@chakra-ui/react';

/**
 * HomePresenter
 * @constructor
 */
export const HomePresenter = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'red'}>
        Thanks for visiting. I&apos;m working as a full-stack developer.
      </Box>
    </Container>
  );
}