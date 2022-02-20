import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { WorkGridItem } from '@/components/grid-item';
import { ArticleLayout } from '@/components/layouts/article';
import { Section } from '@/components/section';
import { fetchWorks } from '@/lib/fetcher';
import type { Work } from '@/types';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Works: NextPage<Props> = ({ works }) => {
  return (
    <ArticleLayout title='Works'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {works.map(({ id, summary, name, slug, thumbnail }) => (
            <Section key={id}>
              <WorkGridItem id={slug} title={name} thumbnail={thumbnail.url}>
                {summary}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
};

type StaticProps = {
  works: Work[];
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const data = await fetchWorks({ orders: '-cratedAt' });
    return {
      props: {
        works: data.contents,
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

export default Works;
