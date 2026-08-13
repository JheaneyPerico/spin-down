const API = "/api";

export async function getLeaderboards(search = "") {
  const url = search
    ? `${API}/leaderboards?search=${search}`
    : `${API}/leaderboards`;

  const response = await fetch(url);

  return response.json();
}


export async function getLeaderboard(slug: string) {
  const response = await fetch(
    `${API}/leaderboards/${slug}`
  );

  return response.json();
}