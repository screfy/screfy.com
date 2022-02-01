import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Page from '../../components/Page';
import Section from '../../components/Section';
import { Calendar } from 'react-feather';
import { format } from 'date-fns';
import components from '../../components/Blog/components';
import { allPostDocuments } from '../../../.contentlayer/data';
import { PostDocument } from '../../../.contentlayer/types';

export default function BlogPost({
  post: { title, body, summary, publishedAt, readingTime, wordCount },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(body.code);

  return (
    <Page title={title} seo={{ description: summary }}>
      <Section>
        <div className="flex flex-col space-y-2 text-sm sm:flex-row sm:justify-between">
          <time className="flex items-center space-x-2" dateTime={publishedAt}>
            <Calendar size={16} />
            <span>{format(new Date(publishedAt), 'MMMM do, yyyy')}</span>
          </time>

          <p>
            {readingTime} • {wordCount} words
          </p>
        </div>

        <div className="prose w-full max-w-none dark:prose-dark">
          <Component components={components} />
        </div>
      </Section>
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
  const post = allPostDocuments.find(({ slug }) => slug === params?.slug);

  return {
    props: {
      post: post as PostDocument,
    },
  };
};
