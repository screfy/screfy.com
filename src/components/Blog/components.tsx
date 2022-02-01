import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import { ReactChild } from 'react';
import { useMounted } from '../../hooks/useMounted';
import Bars from '../Spotify/Bars';

interface MdxImageProps extends ImageProps {
  rounded?: boolean;
}

function MdxImage({ rounded = true, alt, ...props }: MdxImageProps) {
  return (
    <Image
      className={rounded ? 'rounded-lg' : undefined}
      alt={alt}
      title={alt}
      {...props}
    />
  );
}

function MdxImageWithTheme({
  light,
  dark,
  ...props
}: MdxImageProps & { light: string; dark: string }) {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  // After mounting, we have access to the theme:
  return <MdxImage {...props} src={resolvedTheme === 'dark' ? dark : light} />;
}

function MdxCenter({ children }: { children: ReactChild }) {
  return <div className="flex justify-center">{children}</div>;
}

function SpotifyAnimationExample() {
  return (
    <div className="-my-6 flex items-center space-x-2">
      <Bars />
      <p className="font-medium text-gray-600 dark:text-white">Vicarious</p>
      <span>–</span>
      <p>TOOL</p>
    </div>
  );
}

const components = {
  MdxImage,
  MdxImageWithTheme,
  MdxCenter,
  SpotifyAnimationExample,
};

export default components;
