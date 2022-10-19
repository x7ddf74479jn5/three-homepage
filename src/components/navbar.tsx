import { HamburgerIcon } from "@chakra-ui/icons";
import type { LinkProps } from "@chakra-ui/react";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { IoLogoGithub } from "react-icons/io5";

import { Logo } from "@/components/logo";
import { ThemeToggleButton } from "@/components/theme-toggle-button";

type LinkItemProps = { href: string; path: string } & LinkProps & Omit<ComponentPropsWithoutRef<"a">, "href">;

const LinkItem = ({ href, path, children, ...props }: LinkItemProps) => {
  const isActive = path == href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href} passHref>
      <Link p={2} bg={isActive ? "grassTeal" : undefined} color={isActive ? "#202023" : inactiveColor} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

type NavbarProps = {
  path: string;
};

export const NavBar = (props: NavbarProps) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "202023")}
      style={{ backdropFilter: "blur(10ox)" }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justifyContent="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h2" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto " }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="https://pandashark-uses.vercel.app/" path={path}>
            Uses
          </LinkItem>
          <LinkItem
            href="https://github.com/x7ddf74479jn5/three-homepage"
            path={path}
            isExternal
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" ara-label="Options"></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/x7ddf74479jn5/three-homepage">
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
