import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import fetchUsers from "../utils/fetchUsers";
import UserDetails from "../components/UserDetails/UserDetails.tsx";

interface User {
  id: number;
  valueInput?: string;
}

export default function UserProfile() {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  async function fetchData(inputValue: string) {
    try {
      const data = await fetchUsers(inputValue);
      setUser(data);
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
    fetchData(inputValue)
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
      </div>
    </>
  );
}
