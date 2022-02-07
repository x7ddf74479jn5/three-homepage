import { motion } from 'framer-motion';
import Head from 'next/head';

import { GridItemStyle } from '../grid-item';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

type Props = {
  children: React.ReactNode;
  title: string;
};

export const ArticleLayout = ({ children, title }: Props) => (
  <motion.article
    initial='hidden'
    animate='enter'
    exit='exit'
    variants={variants}
    transition={{ duration: '0.4', type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Pandashark</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
);
