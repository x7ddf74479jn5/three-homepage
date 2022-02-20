import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import NextLink from 'next/link';

type GridItemProps = {
  href: string;
  title: string;
  thumbnail: ImageProps['src'];
};

export const GridItem = ({ href, title, thumbnail }: GridItemProps) => {
  const dimensions = { width: '1280', height: '720' };
  const imageSrc = `${thumbnail}?${new URLSearchParams(dimensions).toString()};`;
  const blurImageSrc = `${imageSrc}&q=0`;

  return (
    <Box w='100%' align='center'>
      <LinkBox cursor='pointer'>
        <Image
          src={imageSrc}
          alt={title}
          className='grid-item-thumbnail'
          placeholder='blur'
          blurDataURL={blurImageSrc}
          loading='lazy'
          width={dimensions.width}
          height={dimensions.height}
        />
        <LinkOverlay href={href} target='_blank'>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
};

type WorkGridItemProps = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: ImageProps['src'];
};

export const WorkGridItem = ({ children, title, id, thumbnail }: WorkGridItemProps) => {
  const dimensions = { width: '1280', height: '720' };
  const imageSrc = `${thumbnail}?${new URLSearchParams(dimensions).toString()};`;
  const blurImageSrc = `${imageSrc}&q=0`;

  return (
    <Box w='100%' align='center'>
      <NextLink href={`/works/${id}`}>
        <LinkBox cursor='pointer'>
          <Image
            src={imageSrc}
            alt={title}
            className='grid-item-thumbnail'
            placeholder='blur'
            blurDataURL={blurImageSrc}
            loading='lazy'
            width={dimensions.width}
            height={dimensions.height}
          />
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
};

export const GridItemStyle = () => (
  <Global
    styles={`
  .grid-item-thumbnail{
    border-radius:12px;
  }
  `}
  />
);
