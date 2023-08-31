import {Box, Text, UnstyledButton, createStyles, px, type MantineColor} from '@mantine/core';
import {ContextMenuItemOptions, ContextMenuOptions} from './types';
import {WithRequiredProperty} from './utils';
import {ContextMenu} from "./ContextMenu";
import {Ref, RefObject, useEffect, useRef, useState} from "react";

const useStyles = createStyles((theme, {color}: { color?: MantineColor }) => {
  const verticalPadding = px(theme.spacing.sm) / 2;
  return {
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingTop: verticalPadding,
      paddingBottom: verticalPadding,
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
      color: color && theme.colors[color][6],
      transition: 'background .15s ease',
      '&[disabled]': {
        cursor: 'not-allowed',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
      '&:hover:not([disabled])': {
        background: theme.fn.rgba(
          color ? theme.colors[color][6] : theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
          color ? (theme.colorScheme === 'dark' ? 0.15 : 0.08) : 0.25
        ),
      },
      '&:active:not([disabled])': {
        background: theme.fn.rgba(
          color ? theme.colors[color][6] : theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
          color ? (theme.colorScheme === 'dark' ? 0.3 : 0.2) : 0.5
        ),
      },
    },
    icon: {
      fontSize: 0,
      marginRight: theme.spacing.xs,
    },
    title: {
      whiteSpace: 'nowrap',
    },
    chevron: {
      ":before": {
        borderStyle: 'solid',
        borderWidth: '0.1em 0.1em 0 0',
        content: '""',
        display: 'inline-block',
        height: '0.6em',
        position: 'relative',
        top: '0.4em',
        verticalAlign: 'top',
        width: '0.6em',
        left: '0.4em',
        transform: "rotate(45deg)",
      }
    }
  };
});

export function ContextMenuSubMenu({
                                     className,
                                     style,
                                     icon,
                                     title,
                                     color,
                                     submenu,
                                     subOptions,
                                     showSubMenu,
                                     onItemHover,
                                   }: WithRequiredProperty<Omit<ContextMenuItemOptions, 'key'>, 'title' | 'submenu'> & {
  subOptions?: ContextMenuOptions,
  showSubMenu: boolean,
  onItemHover: () => void;
}) {
  const {cx, classes} = useStyles({color});

  const [{x, y}, setCoordinate] = useState<{ x: number, y: number }>({x: 0, y: 0});
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const {width, x, y} = ref.current?.getBoundingClientRect() || {width: 0, x: 0, y: 0};
    if (x && y) {
      setCoordinate({x: x + width, y});
    }
  }, [ref]);

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      ref={ref}
      onMouseOver={onItemHover}
    >
      {icon && <Box className={classes.icon}>{icon}</Box>}
      <Text className={classes.title} size="sm">
        {title}
      </Text>
      <span className={classes.chevron}></span>
      {showSubMenu && <ContextMenu
          x={x}
          y={y}
          content={submenu}
          zIndex={subOptions?.zIndex}
          shadow={subOptions?.shadow}
          borderRadius={subOptions?.borderRadius}
          className={subOptions?.className}
          style={subOptions?.style}
          sx={subOptions?.sx}
          classNames={subOptions?.classNames}
          styles={subOptions?.styles}
          subOptions={subOptions}
          onHide={() => void 0}/>}
    </Box>
  );
}
