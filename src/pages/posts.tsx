import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import thumbGithub from 'public/images/no_image.webp';

import { GridItem } from '@/components/grid-item';
import { ArticleLayout } from '@/components/layouts/article';
import { Section } from '@/components/section';

const Posts: NextPage = () => (
  <ArticleLayout title='Posts'>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay='0.1'>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title='Github' thumbnail={thumbGithub} href='https://github.com/x7ddf74479jn5'>
            GitHub Link
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </ArticleLayout>
);

export default Posts;
