import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Page from '../../components/Page';
import { allPostDocuments } from '../../../.contentlayer/data';
import { PostDocument } from '../../../.contentlayer/types';
import { pick } from 'contentlayer/client';
import PostLayout from '../../components/Blog/PostLayout';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export type PostLayoutProps = Props['post'];

export default function BlogPost({ post }: Props) {
  return (
    <Page title={post.title} seo={{ description: post.summary }}>
      <PostLayout {...post} />
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPostDocuments.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const post = pick(
    allPostDocuments.find(({ slug }) => slug === params?.slug) as PostDocument,
    [
      'title',
      'body',
      'summary',
      'publishedAt',
      'slug',
      'readingTime',
      'wordCount',
    ]
  );

  return {
    props: {
      post: post,
    },
  };
};
