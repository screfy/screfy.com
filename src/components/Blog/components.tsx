import Image, { ImageProps } from 'next/image';

export function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" alt={props.alt} title={props.alt} {...props} />;
}

export function CenteredImage(props: ImageProps) {
  return (
    <div className="flex justify-center">
      <RoundedImage {...props} />
    </div>
  );
}
