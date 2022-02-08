import { Box, Link } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box align='center' opacity={0.4} fontSize='sm'>
      &copy; {new Date().getFullYear()} Pandashark. All Rights Reserved. Thanks a lot,{' '}
      <Link href='https://www.craftz.dog/'>@craftdog</Link>
    </Box>
  );
};
