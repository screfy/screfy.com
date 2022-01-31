import { Fragment } from 'react';
import { PickedPostProps } from '../../../pages/blog';
import Heading from '../../Heading';
import Post from './Post';

export default function Posts({ posts }: { posts: PickedPostProps[] }) {
  let year = 0;

  return (
    <div className="flex flex-col space-y-2">
      {posts.map((post) => {
        const currentYear = new Date(post.publishedAt).getFullYear();

        let printYear: boolean;

        if (currentYear !== year) {
          printYear = true;
          year = currentYear;
        } else {
          printYear = false;
        }

        return (
          <Fragment key={post.slug}>
            {printYear && (
              <div className="pt-4 first:pt-0">
                <Heading as="h4" text={`${currentYear}`} />
              </div>
            )}

            <Post {...post} />
          </Fragment>
        );
      })}
    </div>
  );
}
