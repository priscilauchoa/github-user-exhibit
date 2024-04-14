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
  const [user, setUser] = useState<User[]>([]);
  const [repos, setRepos] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isUserDetailsVisible, setisUserDetailsVisible] = useState<boolean>(false);

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
    setisUserDetailsVisible(true);
  }

  const handleOnClickRepos = () => {
    fetchRepo(`${user.login}/repos`)
    console.log("repos",repos)
  }
  // console.log('repo',repos)

  return (
    <>
      <div>
        <Input label="User" onChange={handleOnChange} />
        <Button onClick={handleOnClick} title="Search" />
        {isUserDetailsVisible && <UserDetails src={user.avatar_url} name={user.name} login={user.login} error={error} />}
        {isUserDetailsVisible && <Button onClick={handleOnClickRepos} title="See Repositories"/>}
        {repos && <p>{repos.id}</p>}
      </div>
    </>
  );
}
