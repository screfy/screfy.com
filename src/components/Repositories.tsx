import useSWR from 'swr';
import { RepositoriesResponse } from '../types';
import { fetcher } from '../utils/fetcher';
import Repository from './Repository';
import RepositorySkeleton from './Repository/RepositorySkeleton';

export default function Repositories() {
  const { data } = useSWR<RepositoriesResponse>('/api/repositories', fetcher);

  return (
    <div className="grid auto-cols-max grid-cols-1 gap-3 lg:grid-cols-2">
      {data?.data ? (
        data.data.map((repository) => <Repository key={repository.name} {...repository} />)
      ) : (
        <>
          <RepositorySkeleton />
          <RepositorySkeleton />
        </>
      )}
    </div>
  );
}
