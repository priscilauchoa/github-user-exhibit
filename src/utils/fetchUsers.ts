interface User {
    id: number;
    valueInput?: string;
  }
  
  async function fetchUsers(valueInput): Promise<User[]> {
    const response = await fetch(`https://api.github.com/users/${valueInput}`);
    const data = await response.json();
    return data;
  }



  export default fetchUsers;