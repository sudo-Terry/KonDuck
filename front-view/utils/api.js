const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchData(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
}

