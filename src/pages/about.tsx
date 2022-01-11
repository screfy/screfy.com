import { NextSeo } from 'next-seo';
import Page from '../components/Page';
import Section from '../components/Section';
import Link from '../components/Link';

export default function About(): JSX.Element {
  return (
    <Page>
      <NextSeo title="About" />

      <Section heading={{ as: 'h1', text: 'About' }}>
        <p>
          Hey again! I’m a huge fan of open-source projects and new bleeding-edge technologies and languages. I’ve
          learned a lot about web technologies and core programming.
        </p>
        <p>
          The source code of this website is available at{' '}
          <Link href="https://github.com/screfy/screfy.com">screfy/screfy.com</Link>.
        </p>
      </Section>
    </Page>
  );
}
