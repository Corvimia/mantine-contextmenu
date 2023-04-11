import { Button, Container, createStyles, Group, Text, Title } from '@mantine/core';
import { IconBulb, IconLifebuoy, IconRocket, IconScale, IconSettings } from '@tabler/icons-react';
import Link from 'next/link';
import GitHubIcon from '~/components/GitHubIcon';
import HomePageFeature from '~/components/HomePageFeature';
import { REPO_LINK } from '~/config';
import { getFirstExamplePagePath } from '~/lib/page';

const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: 640,
  },
  title: {
    marginBottom: '.75em',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      marginTop: '.33em',
      lineHeight: 1.1,
      fontSize: 52,
    },
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 60,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      marginTop: '.66em',
    },
  },
  gradientText: {
    background: theme.fn.gradient({ from: theme.colors.blue[6], to: theme.colors.cyan[6] }),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  image: {
    overflow: 'hidden',
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    position: 'relative',
  },
  imageRightShadow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 10,
    background: `linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)`,
  },
  subtitle: {
    margin: '1em 0 2em',
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8],
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      fontSize: 20,
    },
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 24,
    },
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg,
    columnGap: `calc(${theme.spacing.lg} * 2)`,
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: `calc(${theme.spacing.lg} * 2)`,
    },
  },
  buttons: {
    margin: '2em 0 0',
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      gap: theme.spacing.xl,
      margin: '3em 0 1em',
    },
  },
  button: {
    width: '100%',
    '@media (min-width: 420px)': {
      width: `calc(50% - ${theme.spacing.md} / 2)`,
    },
    '@media (min-width: 560px)': {
      width: 'auto',
    },
  },
  buttonLabel: {
    marginTop: 2,
  },
  examplesButton: {
    '@media (min-width: 420px)': {
      width: '100%',
    },
    '@media (min-width: 560px)': {
      width: 'initial',
    },
  },
}));

export default function Page() {
  const { classes, cx } = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Title className={classes.title} order={2}>
          A context menu
          <br />
          for your Mantine
          <br />
          <span className={classes.gradientText}>applications.</span>
        </Title>
        <div className={classes.image}>
          <img
            src={`${process.env.BASE_PATH}/mantine-contextmenu.png`}
            alt="Dark mode support"
            title="Dark mode support"
          />
          <div className={classes.imageRightShadow} />
        </div>
        <Text className={classes.subtitle}>
          Mantine ContextMenu brings right-click functionality to your user interfaces.
        </Text>
        <div className={classes.features}>
          <HomePageFeature icon={IconSettings} title="Lightweight yet customizable">
            Features a succinct API, respects the Mantine dark mode and can be easily customized by providing your own
            content instead of using the default generated menu items
          </HomePageFeature>
          <HomePageFeature icon={IconLifebuoy} title="Typescript based">
            The entire codebase is written in TypeScript, options are well typed and documented with JSDoc, so you can
            build type safe applications with confidence
          </HomePageFeature>
          <HomePageFeature icon={IconScale} title="Free and open-source">
            This package is released under the MIT license, same as Mantine, so you can freely build fantastic data-rich
            applications with it
          </HomePageFeature>
          <HomePageFeature icon={IconRocket} title="Use anywhere">
            You can use it in any modern React framework supported by Mantine, such as Next.js, Vite, Create React App,
            Remix or Gatsby
          </HomePageFeature>
        </div>
        <Group className={classes.buttons}>
          <Button
            classNames={{ root: classes.button, label: classes.buttonLabel }}
            size="md"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            leftIcon={<IconRocket />}
            component={Link}
            href="/getting-started"
          >
            Get started
          </Button>
          <Button
            classNames={{ root: classes.button, label: classes.buttonLabel }}
            size="md"
            variant="gradient"
            gradient={{ from: 'gray.6', to: 'gray.5' }}
            leftIcon={<GitHubIcon size={20} />}
            component="a"
            href={REPO_LINK}
            target="_blank"
          >
            View code
          </Button>
          <Button
            classNames={{ root: cx(classes.button, classes.examplesButton), label: classes.buttonLabel }}
            size="md"
            variant="gradient"
            gradient={{ from: 'green.7', to: 'green.6' }}
            leftIcon={<IconBulb />}
            component={Link}
            href={getFirstExamplePagePath()}
          >
            Learn by example
          </Button>
        </Group>
      </div>
    </Container>
  );
}
