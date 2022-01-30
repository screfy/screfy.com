import { compareDesc } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { allArticles } from '../../../.contentlayer/data';
import Page from '../../components/Page';
import Posts from '../../components/Blog/Posts';
import Section from '../../components/Section';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <NextSeo title="Blog" />

      <Section heading={{ as: 'h1', text: 'Blog' }}>
        <p>
          A space for exploring my mind. Here, I share everything that I know about TypeScript, React, serverless
          technologies, and DevOps practices.
        </p>

        <Posts posts={posts} />
      </Section>
    </Page>
  );
}

export const getStaticProps = async () => {
  // Sort posts by published at:
  const posts = allArticles.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

  return {
    props: {
      posts,
    },
  };
};
