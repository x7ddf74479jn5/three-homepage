import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';

const NotFound: NextPage = () => {
  return (
    <Container>
      <Heading as='h1'>Not Found</Heading>
      <Text>The page you&apo;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align='center'>
        <NextLink href='/'>
          <Button colorScheme='teal'>Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
