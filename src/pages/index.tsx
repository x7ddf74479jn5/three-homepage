import { ChevronRightIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { NextPage } from "next";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

import { BioSection, BioYear } from "@/components/bio";
import { ArticleLayout } from "@/components/layouts/article";
import { Paragraph } from "@/components/paragraph";
import { Section } from "@/components/section";
import { fetchProfile } from "@/lib/fetcher";
import type { Profile } from "@/types";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<Props> = ({ profile }) => {
  return (
    <ArticleLayout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a front-end engineer in Japan!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {profile.name}
            </Heading>
            <p>{profile.occupation}</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={"center"}>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src={profile.avatar.url}
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>{profile.introduction}</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My products
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay="0.2">
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2012</BioYear>
            新卒で大手外食レストラン企業に入社
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
            フロントエンドエンジニア | 喫茶店で料理作ってる人
          </BioSection>
        </Section>

        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>{profile.favorites}</Paragraph>
        </Section>
        <Section delay="0,3">
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href={profile.github.url} target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  {profile.github.accountId}
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={profile.twitter.url} target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                  {profile.twitter.accountId}
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={profile.instagram.url} target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                  {profile.instagram.accountId}
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

type StaticProps = {
  profile: Profile;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const profile = await fetchProfile();
    return {
      props: {
        profile,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
    return {
      notFound: true,
    };
  }
};

export default Page;
