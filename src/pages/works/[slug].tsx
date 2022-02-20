import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import type { ParsedUrlQuery } from 'node:querystring';

import { ArticleLayout } from '@/components/layouts/article';
import { Paragraph } from '@/components/paragraph';
import { Meta, Title, WorkImage } from '@/components/work';
import { fetchWork, fetchWorks } from '@/lib/fetcher';
import { Work } from '@/types';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Work: NextPage<Props> = ({ work }) => {
  const { name, year, description, url, stack, thumbnail } = work;

  return (
    <ArticleLayout title={name}>
      <Container>
        <Title>
          {name} <Badge>{year}</Badge>
        </Title>
        <Paragraph>{description}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link</Meta>
            <Link href={url}>
              {url} <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{stack}</span>
          </ListItem>
        </List>
        <WorkImage src={thumbnail.url} alt={name} />
      </Container>
    </ArticleLayout>
  );
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await fetchWorks();
  const paths = data.contents.map((work) => {
    return { params: { slug: work.slug } };
  });

  return { paths, fallback: 'blocking' };
};

type StaticProps = {
  work: Work;
};

export const getStaticProps: GetStaticProps<StaticProps, Params> = async ({ params }) => {
  if (!params?.slug) {
    throw new Error('Slug is undefined');
  }

  try {
    const work = await fetchWork(params.slug);

    if (!work) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        work,
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

export default Work;
