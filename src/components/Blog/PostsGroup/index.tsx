import { PostsGroupProps } from '../../../pages/blog';
import Heading from '../../Heading';
import Post from './Post';

export default function PostsGroup({ year, posts }: PostsGroupProps) {
  return (
    <section className="flex flex-col space-y-3">
      <Heading as="h4" text={year} />

      <ul className="flex flex-col space-y-2">
        {posts.map((post) => (
          <Post key={post.slug} {...post}></Post>
        ))}
      </ul>
    </section>
  );
}
