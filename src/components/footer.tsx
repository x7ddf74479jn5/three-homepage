import { Box, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box align='center' opacity={0.4} fontSize='sm'>
      <Text>&copy; {new Date().getFullYear()} Pandashark. All Rights Reserved.</Text>
      <Text>
        Thanks a lot, <Link href='https://www.craftz.dog/'>@craftdog</Link>
      </Text>
    </Box>
  );
};
