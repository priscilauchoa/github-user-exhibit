import { useState } from "react";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import fetchGithubData from "../../utils/fetchGithubData.ts";
import UserDetails from "../../components/UserDetails/UserDetails.tsx";
import UserRepos from "../../components/UserRepos/UserRepos.tsx";
import { Repo } from "../../interface.ts";

interface User {
  id: number;
  userLogin?: string;
  login: string;
  avatar_url: string;
  name: string;
}

export default function UserProfile() {
  const [user, setUser] = useState<User | undefined>();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  async function fetchUser(inputValue: string) {
    try {
      const data = await fetchGithubData<User>(inputValue);
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
  }

  async function fetchRepo(userLogin: string) {
    try {
      const reposData = await fetchGithubData<Repo[]>(userLogin);
      setRepos(reposData);

    } catch (error) {
      setError(error.message);
    }
  }

  // set the input value to a variable state
  const handleOnChange = (value: string) => {
    setInputValue(value)
  }

  // call fetch data on onclick passing the input value as parameter 
  const handleOnClick = () => {
    fetchUser(inputValue)
  }

  const handleOnClickRepos = () => {
    if (!user) return
    fetchRepo(`${user.login}/repos`);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div>
        <Input label="User" onChange={handleOnChange} />
        <Button onClick={handleOnClick} title="Search" />
        {user && <UserDetails src={user.avatar_url} name={user.name} login={user.login} />}
        {user && <Button onClick={handleOnClickRepos} title="See Repositories" />}
        {repos.length > 0 && <UserRepos repos={repos} />}
      </div>
    </>
  );
}
