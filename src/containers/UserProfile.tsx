import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import fetchGithubData from "../utils/fetchGithubData.ts";
import UserDetails from "../components/UserDetails/UserDetails.tsx";

interface User {
  id: number;
  valueInput?: string;
}

export default function UserProfile() {
  const [user, setUser] = useState<User>();
  const [repos, setRepos] = useState<User>();
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  async function fetchUser(inputValue: string) {
    try {
      const data = await fetchGithubData(inputValue);
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
  }

  async function fetchRepo(inputValue: string) {
    try {
      const data = await fetchGithubData(inputValue);
      setRepos(data);
    } catch (error) {
      setError(error.message);
    }
  }

  // set the input value to a variable state
  const handleOnChange = (value) => {
    setInputValue(value)
  }

  // call fetch data on onclick passing the input value as parameter 
  const handleOnClick = () => {
    fetchUser(inputValue)
  }

  const handleOnClickRepos = () => {
    fetchRepo(`${user.login}/repos`)
    console.log("repos",repos)
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <Input label="User" onChange={handleOnChange} />
        <Button onClick={handleOnClick} title="Search" />
        {user && <UserDetails src={user.avatar_url} name={user.name} login={user.login} error={error} />}
        {user && <Button onClick={handleOnClickRepos} title="See Repositories"/>}
        {repos && <p>{repos.id}</p>}
      </div>
    </>
  );
}
