import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';

import { theme } from '@/lib/theme';

type Props = {
  cookies: string;
  children: React.ReactNode;
};

export const Chakra = ({ cookies, children }: Props) => {
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
};
