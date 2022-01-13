export interface RepositoryData {
  name: string;
  url: string;
  description?: string;
  stars: number;
}

export interface RepositoriesResponse {
  data: RepositoryData[];
}
