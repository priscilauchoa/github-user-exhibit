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
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isUserDetailsVisible, setisUserDetailsVisible] = useState<boolean>(false);

  async function fetchData(inputValue: string) {
    try {
      const data = await fetchUsers(inputValue);
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  // set the input value to a variable state
  const handleOnChange = (value) => {
    setInputValue(value)
  }

  // call fetch data on onclick passing the input value as parameter 
  const handleOnClick = () => {
    fetchData(inputValue)
    setisUserDetailsVisible(true);
  }


  return (
    <>
      <div>
        <Input label="User" onChange={handleOnChange} />
        <Button onClick={handleOnClick} title="Search" />
        {isUserDetailsVisible && <UserDetails src={user.avatar_url} name={user.name} login={user.login} error={error} />}
      </div>
    </>
  );
}
