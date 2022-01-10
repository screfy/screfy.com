import cheerio from 'cheerio';
import LRUCache from 'lru-cache';
import { NextApiRequest, NextApiResponse } from 'next';

interface RepositoryData {
  author: string;
  name: string;
  url: string;
  description?: string;
  stars: number;
}

export interface Response {
  data: RepositoryData[];
  cache: boolean;
}

const DEFAULT_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_URL = 'https://github.com';

// Cache repositories for 24 hours:
const cache = new LRUCache<'repositories', RepositoryData[]>({ max: 1024 * 1024, maxAge: 86400 * 100 });

async function getRepositories(): Promise<RepositoryData[] | undefined> {
  const res = await fetch(`${GITHUB_URL}/${DEFAULT_USERNAME}`, {
    method: 'GET',
    headers: { 'User-Agent': 'ScrefyBot (+https://screfy.com)' },
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
    const author = $('.owner').text().trim() || DEFAULT_USERNAME;
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
  res: NextApiResponse<Response | { error: string }>
): Promise<void> {
  let repositories = cache.get('repositories');
  const fromCache = !!repositories;

  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (!repositories) {
    repositories = await getRepositories();

    if (!repositories) {
      res.status(500).send({ error: 'internal server error' });

      return;
    }

    cache.set('repositories', repositories);
  }

  res.status(200).send({ data: repositories, cache: fromCache });
}
