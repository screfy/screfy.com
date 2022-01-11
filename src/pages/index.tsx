import Page from '../components/Page';
import Section from '../components/Section';
import Link from '../components/Link';
import Repositories from '../components/Repositories';
import Projects from '../components/Projects';

export default function Home(): JSX.Element {
  return (
    <Page>
      <Section heading={{ as: 'h1', text: 'Hey, I’m screfy' }}>
        <p>
          I’m a fullstack web developer and open-source enthusiast. I’m most interested in web and serverless
          technologies, DevOps practices, and I care about performant, accessible code.
        </p>
      </Section>

      <Section heading={{ as: 'h2', text: 'Projects' }}>
        <Projects />
      </Section>

      <Section heading={{ as: 'h3', text: 'OSS' }}>
        <p>
          Below are some of my open-source projects I’ve worked on. You can find most of my work on my{' '}
          <Link href="https://github.com/screfy">GitHub</Link>.
        </p>

        <Repositories />
      </Section>
    </Page>
  );
}
