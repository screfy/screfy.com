import Image, { ImageProps } from 'next/image';

function RoundedImage(props: ImageProps) {
  return (
    <Image
      className="rounded-lg"
      alt={props.alt}
      title={props.alt}
      {...props}
    />
  );
}

function CenteredImage(props: ImageProps) {
  return (
    <div className="flex justify-center">
      <RoundedImage {...props} />
    </div>
  );
}

const components = { RoundedImage, CenteredImage };

export default components;
