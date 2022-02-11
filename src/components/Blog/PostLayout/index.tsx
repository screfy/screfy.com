import { format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Calendar } from 'react-feather';
import { PostLayoutProps } from '../../../pages/blog/[slug]';
import Section from '../../Section';
import components from '../components';
import PostFooter from './PostFooter';

export default function PostLayout({
  body,
  publishedAt,
  slug,
  readingTime,
  wordCount
}: PostLayoutProps) {
  const Component = useMDXComponent(body.code);

  return (
    <Section>
      <div className="flex flex-col space-y-2 text-sm sm:flex-row sm:justify-between">
        <time className="flex items-center space-x-2" dateTime={publishedAt}>
          <Calendar size={16} />
          <span>{format(new Date(publishedAt), 'MMMM do, yyyy')}</span>
        </time>

        <p>
          {readingTime} · {wordCount} words
        </p>
      </div>

      <div className="prose w-full max-w-none dark:prose-dark">
        <Component components={components} />
      </div>

      <PostFooter slug={slug} />
    </Section>
  );
}
