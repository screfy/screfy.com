import cheerio from 'cheerio';
import { RepositoryData } from '../types';

const GITHUB_URL = 'https://github.com';

export async function getRepositories(): Promise<RepositoryData[] | undefined> {
  const res = await fetch(`${GITHUB_URL}/screfy`, {
    method: 'GET'
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

    repositories.push({ name, url, description, stars });
  });

  return repositories;
}
