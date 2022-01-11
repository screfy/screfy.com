import useSWR from 'swr';
import { RepositoryResponse } from '../types';
import { fetcher } from '../utils/fetcher';
import Repository from './Repository';
import RepositorySkeleton from './Repository/RepositorySkeleton';

export default function Repositories(): JSX.Element {
  const { data } = useSWR<RepositoryResponse>('/api/repositories', fetcher);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 auto-cols-max">
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
