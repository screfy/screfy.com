import Page from '../components/Page';
import Section from '../components/Section';
import Link from '../components/Link';
import Tracks from '../components/Tracks';
import Heading from '../components/Heading';

export default function About() {
  return (
    <Page title="About">
      <Section>
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

      <Section>
        <Heading as="h2">Top Tracks</Heading>

        <p>
          Curious what I’m currently listening to? Below you can find an
          up-to-date collection of my favorite tracks.
        </p>

        <Tracks />
      </Section>
    </Page>
  );
}
