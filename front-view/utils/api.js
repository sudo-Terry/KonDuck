const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchData(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  const data = await res.json();
  return data;
}
