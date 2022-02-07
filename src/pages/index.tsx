import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

import { BioSection, BioYear } from '@/components/bio';
import { ArticleLayout } from '@/components/layouts/article';
import { Paragraph } from '@/components/paragraph';
import { Section } from '@/components/section';

const Page: NextPage = () => {
  return (
    <ArticleLayout title='Home'>
      <Container>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign='center'
        >
          Hello, I&apos;m a front-end engineer in Japan!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Pandashark
            </Heading>
            <p>Frontend Engineer | Cook</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={'center'}>
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src='/images/pandashark_icon.webp'
              alt='Profile Image'
            />
          </Box>
        </Box>

        <Section delay='0.1'>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            喫茶店の調理職に従事する傍らフリーランスのフロントエンドエンジニアとして働いています。Reactを用いたフロントエンドの開発が得意です。
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works' passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay='0.2'>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2012</BioYear>
            新卒で大手外食チェーン店に入社
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            地元に戻り、喫茶店の調理職へ
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Web制作の仕事を開始
          </BioSection>
          <BioSection>
            <BioYear>Now</BioYear>
            フロントエンドエンジニア｜喫茶店の調理職
          </BioSection>
        </Section>

        <Section delay='0.3'>
          <Heading as='h3' variant='section-title'>
            I ♥
          </Heading>
          <Paragraph>Coffee, Tea, Sweets, Watching video game streamings</Paragraph>
        </Section>
        <Section delay='0,3'>
          <Heading as='h3' variant='section-title'>
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/x7ddf74479jn5' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub} />}>
                  Pandashark
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://twitter.com/pandashark6' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoTwitter} />}>
                  @pandashark6
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://www.instagram.com/pandashark_/' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>
                  @pandashark_
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align='center' my={4}>
            <NextLink href='/posts'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default Page;
