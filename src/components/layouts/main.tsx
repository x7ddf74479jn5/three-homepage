import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import type { Router } from 'next/router';

import { Footer } from '@/components/footer';
import { Goldfish } from '@/components/goldfish';
import { NavBar } from '@/components/navbar';
import NoSsr from '@/components/no-ssr';

type Props = { children: React.ReactNode; router: Router };

export const MainLayout = ({ children, router }: Props) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Pandashark's homepage" />
        <meta name='author' content='Pandashark' />
        <meta name='author' content='Pandashark' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='icon' href='favicon.svg' type='image/svg+xml' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pandashark6' />
        <meta name='twitter:creator' content='@pandashark6' />
        <meta name='twitter:image' content='/card.png' />
        <meta property='og:site_name' content="Pandashark's Homepage" />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/card.png' />
        <title>Pandashark- Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.md' pt='14'>
        <NoSsr>
          <Goldfish />
        </NoSsr>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};
