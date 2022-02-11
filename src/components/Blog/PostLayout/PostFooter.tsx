import { ReactChild } from 'react';
import { BASE_URL, GIT_REPO_OWNER, GIT_REPO_SLUG } from '../../../constants';

function PostFooterLink({
  href,
  children
}: {
  href: string;
  children: ReactChild;
}) {
  return (
    <a
      className="transition-colors hover:text-gray-600 dark:hover:text-gray-200"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function PostFooter({ slug }: { slug: string }) {
  return (
    <div className="flex justify-end space-x-2 text-sm">
      <PostFooterLink
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${BASE_URL}/blog/${slug} by @screfy_`
        )}`}
      >
        Share on Twitter
      </PostFooterLink>

      <span>·</span>

      <PostFooterLink
        href={`https://github.com/${GIT_REPO_OWNER}/${GIT_REPO_SLUG}/edit/main/data/posts/${slug}.mdx`}
      >
        Edit on GitHub
      </PostFooterLink>
    </div>
  );
}
