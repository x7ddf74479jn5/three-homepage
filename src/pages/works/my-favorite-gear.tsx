import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';

import { ArticleLayout } from '@/components/layouts/article';
import { Paragraph } from '@/components/paragraph';
import { Meta, Title, WorkImage } from '@/components/work';

const FoodBlog = () => {
  return (
    <ArticleLayout title='My Favorite Gear'>
      <Container>
        <Title>
          My Favorite Gear <Badge>2021</Badge>
        </Title>
        <Paragraph>
          自分のお気に入りのアイテムを8つ選んでTwitterに投稿できます。Twitter・アプリケーション・商品サイト（楽天・Amazon）間のスムーズな導線を構築しています。ご利用にはTwitterアカウントが必要です。
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link</Meta>
            <Link href='https://my-favorite-gear.firebaseapp.com/'>
              https://my-favorite-gear.firebaseapp.com/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Firebase Material-UI, Twitter API, Rakuten API</span>
          </ListItem>
        </List>
        <WorkImage src='/images/works/my-favorite-gear_screenshot.webp' alt='My Favorite Gear'></WorkImage>
      </Container>
    </ArticleLayout>
  );
};

export default FoodBlog;
