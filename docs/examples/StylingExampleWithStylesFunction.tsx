import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

// example-start
export default function StylingExampleWithStylesFunction() {
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[5];
  const { src } = image.file;
  // example-resume

  return (
    <Picture
      // example-skip component props
      image={image}
      // example-resume
      onContextMenu={showContextMenu(
        [
          // example-skip context menu items
          {
            key: 'copy',
            icon: <IconCopy size={16} />,
            onClick: () => copyImageToClipboard(src),
          },
          {
            key: 'download',
            icon: <IconDownload size={16} />,
            onClick: () => downloadImage(src),
          },
          // example-resume
        ],
        {
          styles: (theme) => ({
            root: { border: `1px solid ${theme.colors.red[6]}` },
            item: { color: theme.colors.red[6] },
          }),
        }
      )}
    />
  );
}
// example-end
