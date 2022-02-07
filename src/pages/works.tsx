import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import foodBlogThumb from 'public/images/works/food-blog_screenshot.webp';
import myFavoriteGearThumb from 'public/images/works/my-favorite-gear_screenshot.webp';

import { WorkGridItem } from '@/components/grid-item';
import { ArticleLayout } from '@/components/layouts/article';
import { Section } from '@/components/section';

const Works: NextPage = () => {
  return (
    <ArticleLayout title='Works'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id='food-blog' title='Food Blog' thumbnail={foodBlogThumb}>
              Next.jsとmicroCMSで構築したレシピブログです。
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id='my-favorite-gear' title='My Favorite Gear' thumbnail={myFavoriteGearThumb}>
              自分のお気に入りのアイテムを8個選んでTwitterに投稿できます。
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
};

export default Works;
