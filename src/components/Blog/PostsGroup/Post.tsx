import { format } from 'date-fns';
import Link from 'next/link';
import { PostProps } from '../../../pages/blog';
import Heading from '../../Heading';

export default function Post({
  title,
  slug,
  publishedAt,
  readingTime,
}: PostProps) {
  return (
    <li>
      <Link key={slug} href={`/blog/${slug}`} passHref>
        <a className="flex items-center justify-between transition-transform hover:scale-[1.01]">
          <div className="flex items-center">
            <time className="mr-8 min-w-[4rem]" dateTime={publishedAt}>
              {format(new Date(publishedAt), 'MMM dd')}
            </time>

            <Heading as="h5" text={title} />
          </div>

          <p className="hidden sm:block">{readingTime}</p>
        </a>
      </Link>
    </li>
  );
}
