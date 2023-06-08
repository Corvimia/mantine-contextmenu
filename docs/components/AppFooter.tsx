import { createStyles, Group, Text, useMantineColorScheme } from '@mantine/core';
import {
  AUTHOR_LINK,
  FOOTER_HEIGHT_ABOVE_NAVBAR_BREAKPOINT,
  FOOTER_HEIGHT_BELOW_NAVBAR_BREAKPOINT,
  MANTINE_DATATABLE_LINK,
  NAVBAR_BREAKPOINT,
  NAVBAR_WIDTH,
  NPM_LINK,
  REPO_LINK,
  SPONSOR_LINK,
} from '~/config';
import ExternalLink from './ExternalLink';

const useStyles = createStyles((theme) => {
  const shadowGradientAlpha = theme.colorScheme === 'dark' ? 0.2 : 0.015;
  return {
    root: {
      position: 'fixed',
      zIndex: -1,
      left: 0,
      right: 0,
      bottom: 0,
      height: FOOTER_HEIGHT_BELOW_NAVBAR_BREAKPOINT,
      background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
      padding: theme.spacing.sm,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing.xs,
      [`@media (min-width: ${theme.breakpoints[NAVBAR_BREAKPOINT]})`]: {
        marginLeft: NAVBAR_WIDTH,
        height: FOOTER_HEIGHT_ABOVE_NAVBAR_BREAKPOINT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        '&::before': {
          position: 'absolute',
          content: '""',
          top: 0,
          bottom: 0,
          left: 0,
          width: theme.spacing.sm,
          background: `linear-gradient(to right, ${theme.fn.rgba(theme.black, shadowGradientAlpha)}, ${theme.fn.rgba(
            theme.black,
            0
          )}), linear-gradient(to right, ${theme.fn.rgba(theme.black, shadowGradientAlpha)}, ${theme.fn.rgba(
            theme.black,
            0
          )} 30%)`,
        },
      },
    },
  };
});

export default function AppFooter() {
  const { colorScheme } = useMantineColorScheme();
  const badgeStyle = colorScheme === 'dark' ? 'flat' : 'social';
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <ExternalLink to={`${REPO_LINK}/blob/main/LICENSE`} rel="license">
        <img src={`https://img.shields.io/npm/l/mantine-contextmenu.svg?style=${badgeStyle}`} alt="MIT License" />
      </ExternalLink>
      <Text size="sm" align="center">
        Built by <ExternalLink to={AUTHOR_LINK}>Ionut-Cristian Florescu</ExternalLink>,<br />
        the author of <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine DataTable</ExternalLink>.
        <br />
        Please <ExternalLink to={SPONSOR_LINK}>sponsor my work</ExternalLink> if you find it useful.
      </Text>
      <Group spacing="xs">
        <ExternalLink to={REPO_LINK}>
          <img
            src={`https://img.shields.io/github/stars/icflorescu/mantine-contextmenu?style=${badgeStyle}`}
            alt="GitHub Stars"
          />
        </ExternalLink>
        <ExternalLink to={NPM_LINK}>
          <img src={`https://img.shields.io/npm/dm/mantine-contextmenu.svg?style=${badgeStyle}`} alt="NPM Downloads" />
        </ExternalLink>
      </Group>
    </div>
  );
}
