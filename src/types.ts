export interface RepositoryData {
  name: string;
  url: string;
  description?: string;
  stars: number;
}

export interface RepositoriesResponse {
  data: RepositoryData[];
}

export interface TrackData {
  name: string;
  url: string;
  album: string;
  artist: string;
  duration: string;
  image: string;
}

export interface TracksResponse {
  data: TrackData[];
}
