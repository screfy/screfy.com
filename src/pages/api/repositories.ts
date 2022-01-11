import cheerio from 'cheerio';
import LRUCache from 'lru-cache';
import { NextApiRequest, NextApiResponse } from 'next';
import { RepositoryData, RepositoryResponse } from '../../types';

const GITHUB_URL = 'https://github.com';
const MAX_AGE = 86400000;

// Cache repositories for 24 hours:
const cache = new LRUCache<'repositories', RepositoryData[]>({ max: 1024 * 1024, maxAge: MAX_AGE });

async function getRepositories(): Promise<RepositoryData[] | undefined> {
  const res = await fetch(`${GITHUB_URL}/screfy`, {
    method: 'GET',
    headers: { 'User-Agent': 'screfy-fetcher (+https://screfy.com)' },
  });

  if (!res.ok) {
    return;
  }

  const $ = cheerio.load(await res.text());
  const pinned = $('.pinned-item-list-item.public');

  if (pinned.length === 0) {
    return;
  }

  const repositories: RepositoryData[] = [];

  pinned.each((i, e) => {
    const $ = cheerio.load(e);
    const author = $('.owner').text().trim() || 'screfy';
    const name = $('.repo').text().trim();
    const url = `${GITHUB_URL}/${author}/${name}`;
    const description = $('.pinned-item-desc').text().trim() || undefined;
    const parsedStars = parseInt($('a[href$="/stargazers"]').text().trim());
    const stars = isNaN(parsedStars) ? 0 : parsedStars;

    repositories.push({ author, name, url, description, stars });
  });

  return repositories;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoryResponse | { error: string }>
): Promise<void> {
  let repositories = cache.get('repositories');

  if (!repositories) {
    repositories = await getRepositories();

    if (!repositories) {
      res.status(500).send({ error: 'internal server error' });

      return;
    }

    cache.set('repositories', repositories);
  }

  res.setHeader('Cache-Control', `public, s-maxage=${MAX_AGE}, stale-while-revalidate=${MAX_AGE / 2}`);

  res.status(200).send({ data: repositories });
}
