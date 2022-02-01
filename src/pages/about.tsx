import { NextSeo } from 'next-seo';
import Page from '../components/Page';
import Section from '../components/Section';
import Link from '../components/Link';
import Tracks from '../components/Tracks';

export default function About() {
  return (
    <Page>
      <NextSeo title="About" />

      <Section heading={{ as: 'h1', text: 'About' }}>
        <p>
          Hey again! As I said, I’m a huge fan of open-source projects and new
          bleeding-edge technologies and languages. I’ve learned a lot about web
          technologies and core programming.
        </p>
        <p>
          The source code of this website is available at{' '}
          <Link href="https://github.com/screfy/screfy.com">
            screfy/screfy.com
          </Link>
          .
        </p>
      </Section>

      <Section heading={{ as: 'h2', text: 'Top Tracks' }}>
        <p>
          Curious what I’m currently listening to? Below you can find an
          up-to-date collection of my favorite tracks.
        </p>

        <Tracks />
      </Section>
    </Page>
  );
}
