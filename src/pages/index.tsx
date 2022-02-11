import Page from '../components/Page';
import Section from '../components/Section';
import Link from '../components/Link';
import Repositories from '../components/Repositories';
import Projects from '../components/Projects';
import Heading from '../components/Heading';
import { InferGetStaticPropsType } from 'next';
import { allProjectDocuments } from '../../.contentlayer/data';
import { compareDesc } from 'date-fns';

export default function Home({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title="Hey, I’m screfy" seo={{ title: 'Home' }}>
      <Section>
        <p>
          I’m a fullstack web developer and open-source enthusiast. I’m most
          interested in web and serverless technologies, DevOps practices, and I
          care about performant, accessible code.
        </p>
      </Section>

      <Section>
        <Heading as="h2">Projects</Heading>

        <Projects projects={projects} />
      </Section>

      <Section>
        <Heading as="h3">OSS</Heading>

        <p>
          Below are some of my open-source projects I’ve worked on. You can find
          most of my work on my{' '}
          <Link href="https://github.com/screfy">GitHub</Link>.
        </p>

        <Repositories />
      </Section>
    </Page>
  );
}

export const getStaticProps = async () => {
  const projects = allProjectDocuments.sort((a, b) =>
    compareDesc(new Date(a.startedAt), new Date(b.startedAt))
  );

  return {
    props: { projects }
  };
};
