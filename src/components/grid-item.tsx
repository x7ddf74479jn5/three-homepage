import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import NextLink from 'next/link';

type GridItemProps = {
  children: React.ReactNode;
  href: string;
  title: string;
  thumbnail: ImageProps['src'];
};

export const GridItem = ({ children, href, title, thumbnail }: GridItemProps) => (
  <Box w='100%' align='center'>
    <LinkBox cursor='pointer'>
      <Image src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blur' loading='lazy' />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

type WorkGridItemProps = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: ImageProps['src'];
};

export const WorkGridItem = ({ children, title, id, thumbnail }: WorkGridItemProps) => (
  <Box w='100%' align='center'>
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor='pointer'>
        <Image src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blur' loading='lazy' />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
  .grid-item-thumbnail{
    border-radius:12px;
  }
  `}
  />
);
