export interface RepositoryData {
  author: string;
  name: string;
  url: string;
  description?: string;
  stars: number;
}

export interface RepositoryResponse {
  data: RepositoryData[];
}
