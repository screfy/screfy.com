import Heading, { HeadingProps } from './Heading';
import { ReactChild } from 'react';

interface Props {
  heading: HeadingProps;
  children: ReactChild | ReactChild[];
}

export default function Section({ heading, children }: Props) {
  return (
    <section className="flex flex-col space-y-4">
      <Heading {...heading} />
      {children}
    </section>
  );
}
