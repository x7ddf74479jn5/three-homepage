import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';

import { ArticleLayout } from '@/components/layouts/article';
import { Paragraph } from '@/components/paragraph';
import { Meta, Title, WorkImage } from '@/components/work';

const FoodBlog = () => {
  return (
    <ArticleLayout title='Food Blog'>
      <Container>
        <Title>
          Food Blog <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Next.jsとmicroCMSで作ったレシピブログのサンプルです。要件として非エンジニアの方がCMSから入稿とサイトの基本設定の変更ができることを想定しています。markdownだけでなくMDXにも対応しているため拡張性があります。Core
          Web Vitalsを意識したSEO、構造化データ定義、PWA、RSSなどメディアサイトとして十分な機能を実装しています。
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link</Meta>
            <Link href='https://food-blog-chi.vercel.app/'>
              https://food-blog-chi.vercel.app/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, microCMS, MDX, Tailwind CSS</span>
          </ListItem>
        </List>
        <WorkImage src='/images/works/food-blog_screenshot.webp' alt='Food Blog'></WorkImage>
      </Container>
    </ArticleLayout>
  );
};

export default FoodBlog;
