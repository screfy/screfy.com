import { ReactChild } from 'react';

interface Props {
  children: ReactChild | ReactChild[];
}

export default function Section({ children }: Props) {
  return <section className="flex flex-col space-y-4">{children}</section>;
}
