import { useState } from "react";
import Button from "../components/Button/Button.jsx";
import Input from "../components/Input/Input.jsx";
function FetchUser() {
  const [user, setUser] = useState<string>("Pri");
  return (
    <>
    {user}
    <br></br>
      <Input label="Github User" />
      <Button title="Submit" />
    </>
  );
}

export default FetchUser;

