import { ChevronRightIcon } from '@chakra-ui/icons';
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => (
  <Box>
    <NextLink href='/works'>
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

type WorkImageProps = {
  src: string;
  alt: string;
};

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
);

type MetaProps = {
  children: React.ReactNode;
};

export const Meta = ({ children }: MetaProps) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
);
