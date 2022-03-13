import type { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse, MicroCMSObjectContent } from 'microcms-js-sdk';

type WorkImage = {
  title: string;
  src: MicroCMSImage;
};

type Link = {
  url: string;
  accountId: string;
};

export type WorkBase = {
  name: string;
  slug: string;
  description: string;
  summary: string;
  thumbnail: MicroCMSImage;
  period: string;
  url: string;
  stack: string;
  images?: WorkImage[];
};

export type PostBase = {
  title: string;
  slug: string;
  description: string;
  url: string;
  media: string;
  thumbnail: MicroCMSImage;
};

export type ProfileBase = {
  name: string;
  email: string;
  avatar: MicroCMSImage;
  occupation: string;
  introduction: string;
  favorites: string;
  github: Link;
  twitter: Link;
  instagram: Link;
  homepage: Link;
  portfolio: Link;
};

export type Work = WorkBase & MicroCMSListContent;
export type Post = PostBase & MicroCMSListContent;
export type Profile = ProfileBase & MicroCMSObjectContent;

export type WorkResponse = MicroCMSListResponse<WorkBase>;
export type PostResponse = MicroCMSListResponse<PostBase>;
