import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import useSWR from 'swr'
import Link from '../components/Link'
import Page from '../components/Page'
import Project, { ProjectProps } from '../components/Project'
import Repository from '../components/Repository'
import Section from '../components/Section'
import zenvers from '../../public/projects/zenvers.webp'
import { Response } from './api/oss'
import ProjectSkeleton from '../components/Project/ProjectSkeleton'

const PROJECTS: ProjectProps[] = [
  {
    name: 'Zenvers',
    role: 'Founder & Developer',
    description: 'Something is coming...',
    image: zenvers,
    url: 'https://zenvers.com',
  },
]

export default function Projects(): JSX.Element {
  const { data } = useSWR<Response>(`${process.env.NEXT_PUBLIC_URL}/api/oss`, (url) =>
    fetch(url).then((res) => res.json())
  )

  return (
    <Page>
      <NextSeo title="Projects" />

      <Section heading={{ as: 'h1', text: 'Projects' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 auto-cols-max">
          {PROJECTS.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </Section>

      <Section heading={{ as: 'h2', text: 'OSS' }}>
        <p>
          Below are some of my open-source projects I’ve worked on. You can find most of my work on my{' '}
          <Link href="https://github.com/screfy">GitHub</Link>.
        </p>

        <div>
          {data !== undefined ? (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-2 auto-cols-max"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween', ease: 'anticipate', duration: 0.35 }}
            >
              {data.data.map((repository) => (
                <Repository key={repository.name} {...repository} />
              ))}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 auto-cols-max">
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          )}
        </div>
      </Section>
    </Page>
  )
}
