import { pick } from 'contentlayer/client';
import { compareDesc } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import { allArticles } from '../../../.contentlayer/data';
import Page from '../../components/Page';
import Section from '../../components/Section';
import PostsGroup from '../../components/Blog/PostsGroup';
import { groupBy } from '../../utils/groupBy';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export type PostsGroupProps = Props['groups'][number];
export type PostProps = PostsGroupProps['posts'][number];

export default function Blog({ groups }: Props) {
  return (
    <Page title="Blog">
      <Section>
        <p>
          A space for exploring my mind. Here, I share everything that I know
          about TypeScript, React, serverless technologies, and DevOps
          practices.
        </p>

        <>
          {groups.map(({ year, posts }) => (
            <PostsGroup key={year} year={year} posts={posts} />
          ))}
        </>
      </Section>
    </Page>
  );
}

export const getStaticProps = async () => {
  const groupedPosts = groupBy(allArticles, ({ publishedAt }) =>
    new Date(publishedAt).getFullYear()
  );

  const groups = Object.keys(groupedPosts)
    .map((year) => ({
      year,
      posts: groupedPosts[+year]
        // Sort posts by published date:
        .sort((a, b) =>
          compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
        )
        // Reduce JSON payload size by picking only needed props:
        .map((post) =>
          pick(post, ['title', 'slug', 'publishedAt', 'readingTime'])
        ),
    }))
    // Sort groups by years:
    .sort((a, b) => compareDesc(new Date(a.year), new Date(b.year)));

  return {
    props: {
      groups,
    },
  };
};
