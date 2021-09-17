import { NextSeo } from 'next-seo'
import Docker from '../components/icons/Docker'
import NodeJS from '../components/icons/NodeJS'
import PostgreSQL from '../components/icons/PostgreSQL'
import React from '../components/icons/React'
import TailwindCSS from '../components/icons/TailwindCSS'
import TypeScript from '../components/icons/TypeScript'
import Page from '../components/Page'
import Section from '../components/Section'
import Technology, { TechnologyProps } from '../components/Technology'

const TECHNOLOGIES: TechnologyProps[] = [
  {
    name: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language which builds on JavaScript giving you better tooling at any scale.',
    icon: <TypeScript />,
    color: '#007ACC',
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    icon: <React />,
    color: '#232340',
  },
  {
    name: 'Node.js',
    description: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.`,
    icon: <NodeJS />,
    color: '#026E00',
  },
  {
    name: 'TailwindCSS',
    description: 'Rapidly build modern websites without ever leaving your HTML.',
    icon: <TailwindCSS />,
    color: '#06AAC6',
  },
  {
    name: 'Docker',
    description: 'Docker helps developers bring their ideas to life by conquering the complexity of app development.',
    icon: <Docker />,
    color: '#2496ED',
  },
  {
    name: 'PostgreSQL',
    description: `The world's most advanced open-source relational database.`,
    icon: <PostgreSQL />,
    color: '#336791',
  },
]

export default function Technologies(): JSX.Element {
  return (
    <Page>
      <NextSeo title="Technologies" />

      <Section heading={{ as: 'h1', text: 'Technologies' }}>
        <p>
          I use a wide range of technologies to create a something new. You can find a list of my most-used technologies
          below.
        </p>

        <div className="flex flex-col space-y-4">
          {TECHNOLOGIES.map((technology) => (
            <Technology key={technology.name} {...technology} />
          ))}
        </div>
      </Section>
    </Page>
  )
}
