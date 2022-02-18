import React, { useEffect, useState } from "react";
import UserItem from "../UserItem";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const FetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };
  useEffect(() => {
    FetchUsers();
  },[]);
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {users.map((user) => (
        <UserItem  user= {user}  key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
