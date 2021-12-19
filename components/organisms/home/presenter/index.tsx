import { Box, Container, Heading } from '@chakra-ui/react';

/**
 * HomePresenter
 * @constructor
 */
export const HomePresenter = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'red'} p={3} mb={6} align={'center'}>
        Thanks for visiting. I&apos;m working as a full-stack developer.
      </Box>
      <Box display={{ md: "flex"}}>
        <Box flexGrow={1}>
           <Heading as={"h2"} variant={"page-title"}>
             Lil shimon
           </Heading>
          <p>
            SoftWare directer in 3 months of graduate (Front-End / Server-Side / Mobile)
          </p>
        </Box>
      </Box>
    </Container>
  );
};