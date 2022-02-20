import type { MicroCMSQueries } from 'microcms-js-sdk/dist/cjs/types';

import { client } from '@/lib/microcms';
import type { Post, Profile, Work } from '@/types';

export const fetchWorks = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getList<Work>({
      endpoint: 'works',
      queries: {
        depth: 3,
        ...queries,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error('取得に失敗しました。');
    }
    throw error;
  }
};

export const fetchWork = async (slug: string) => {
  try {
    const data = await client.getList<Work>({
      endpoint: 'works',
      queries: {
        depth: 3,
        filters: `slug[equals]${slug}`,
      },
    });
    return data.contents[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error('取得に失敗しました。');
    }
    throw error;
  }
};

export const fetchPosts = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getList<Post>({
      endpoint: 'posts',
      queries: {
        depth: 3,
        ...queries,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error('取得に失敗しました。');
    }
    throw error;
  }
};

export const fetchPost = async (id: string, queries?: MicroCMSQueries) => {
  try {
    const data = await client.get<Post>({
      endpoint: 'posts',
      contentId: id,
      queries: {
        depth: 3,
        ...queries,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error('取得に失敗しました。');
    }
    throw error;
  }
};

export const fetchProfile = async () => {
  try {
    const data = await client.getObject<Profile>({
      endpoint: 'profile',
    });
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error('取得に失敗しました。');
    }
    throw error;
  }
};
