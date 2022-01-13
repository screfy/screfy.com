import { NextApiRequest, NextApiResponse } from 'next';
import { RepositoryData, RepositoriesResponse } from '../../types';
import { cache, CACHE_MAX_AGE } from '../../utils/cache';
import { getRepositories } from '../../utils/github';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoriesResponse | { error: string }>
): Promise<void> {
  let repositories = cache.get('repositories') as RepositoryData[] | undefined;

  if (!repositories) {
    repositories = await getRepositories();

    if (!repositories) {
      res.status(500).send({ error: 'internal server error' });

      return;
    }

    cache.set('repositories', repositories);
  }

  res.setHeader('Cache-Control', `public, s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${CACHE_MAX_AGE / 2}`);

  res.status(200).send({ data: repositories });
}
