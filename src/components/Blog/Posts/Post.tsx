import { format } from 'date-fns';
import Link from 'next/link';
import { Article } from '../../../../.contentlayer/types';
import Heading from '../../Heading';

export default function Post({ title, slug, publishedAt, readingTime }: Article) {
  return (
    <Link key={slug} href={`/blog/${slug}`} passHref>
      <a className="flex items-center justify-between hover:scale-[1.01] transition-transform">
        <div className="flex items-center">
          <time className="min-w-[4rem] mr-8" dateTime={publishedAt}>
            {format(new Date(publishedAt), 'MMM dd')}
          </time>

          <Heading as="h5" text={title} />
        </div>

        <p className="hidden sm:block">{readingTime}</p>
      </a>
    </Link>
  );
}
