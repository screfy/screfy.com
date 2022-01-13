function pad(num: number) {
  const str = `00${num}`;

  return str.slice(-2);
}

export function formatDuration(duration: number) {
  const durationInSeconds = duration / 1000;
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor((durationInSeconds % 3600) % 60);

  return `${pad(minutes)}:${pad(seconds)}`;
}
