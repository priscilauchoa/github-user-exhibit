async function fetchGithubData<T>(userLogin: string): Promise<T> {
  const response = await fetch(`https://api.github.com/users/${userLogin}`);
  const data = await response.json();
  return data;
}

export default fetchGithubData;
