import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { GridItem } from '@/components/grid-item';
import { ArticleLayout } from '@/components/layouts/article';
import { Section } from '@/components/section';
import { fetchPosts } from '@/lib/fetcher';
import type { Post } from '@/types';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Posts: NextPage<Props> = ({ posts }) => {
  return (
    <ArticleLayout title='Posts'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay='0.1'>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {posts.map(({ id, title, thumbnail, url }) => (
              <GridItem key={id} title={title} thumbnail={thumbnail.url} href={url} />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

type StaticProps = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const postListRes = await fetchPosts({ orders: '-createdAt' });
    return {
      props: {
        posts: postListRes.contents,
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

export default Posts;
