import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

type Props = {
  children: React.ReactNode;
  delay?: string | undefined;
};

export const Section = ({ children, delay = '0' }: Props) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0.8', delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
};
