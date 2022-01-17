import { NextSeo } from 'next-seo';
import Docker from '../components/icons/Docker';
import NodeJS from '../components/icons/NodeJS';
import PostgreSQL from '../components/icons/PostgreSQL';
import React from '../components/icons/React';
import TailwindCSS from '../components/icons/TailwindCSS';
import TypeScript from '../components/icons/TypeScript';
import GraphQL from '../components/icons/GraphQL';
import NextJS from '../components/icons/NextJS';
import Page from '../components/Page';
import Section from '../components/Section';
import Technology, { TechnologyProps } from '../components/Technology';

const TECHNOLOGIES: TechnologyProps[] = [
  {
    name: 'TypeScript',
    description: 'TypeScript is a strongly typed programming language that builds on JavaScript.',
    icon: <TypeScript />,
    color: '#007ACC',
  },
  {
    name: 'Node.js',
    description: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.`,
    icon: <NodeJS />,
    color: '#026E00',
  },
  {
    name: 'GraphQL',
    description: 'A query language for APIs and a runtime for fulfilling those queries with your existing data.',
    icon: <GraphQL />,
    color: '#e10098',
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    icon: <React />,
    color: '#232340',
  },
  {
    name: 'Next.js',
    description: 'Next.js gives you the best developer experience with all the features you need for production.',
    icon: <NextJS />,
    color: '#0070f3',
  },
  {
    name: 'TailwindCSS',
    description: 'Rapidly build modern websites without ever leaving your HTML.',
    icon: <TailwindCSS />,
    color: '#06AAC6',
  },
  {
    name: 'Docker',
    description: 'Docker takes away repetitive and mundane configuration tasks.',
    icon: <Docker />,
    color: '#2496ED',
  },
  {
    name: 'PostgreSQL',
    description: `The world's most advanced open-source relational database.`,
    icon: <PostgreSQL />,
    color: '#336791',
  },
];

export default function Technologies() {
  return (
    <Page>
      <NextSeo title="Technologies" />

      <Section heading={{ as: 'h1', text: 'Technologies' }}>
        <p>
          I highly leverage new bleeding-edge technologies and languages to stay on top of the game. I really love
          working with containerstation, especially Docker - the most powerful tool for development and production
          environments.
        </p>

        <div className="flex flex-col space-y-4">
          {TECHNOLOGIES.map((technology) => (
            <Technology key={technology.name} {...technology} />
          ))}
        </div>
      </Section>
    </Page>
  );
}
