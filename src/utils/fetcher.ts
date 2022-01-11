export async function fetcher(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);

  return res.json();
}
