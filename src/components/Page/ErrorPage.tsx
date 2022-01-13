import { NextSeo } from 'next-seo';
import { ReactChild } from 'react';
import Page from '.';
import Section from '../Section';

interface Props {
  statusCode: number | string;
  children?: ReactChild | ReactChild[];
}

export default function ErrorPage({ statusCode, children }: Props) {
  return (
    <Page>
      <NextSeo title={`Error ${statusCode}`} noindex nofollow />

      <Section heading={{ as: 'h1', text: `${statusCode}` }}>
        {children === undefined ? <p>Something went wrong.</p> : children}
      </Section>
    </Page>
  );
}
