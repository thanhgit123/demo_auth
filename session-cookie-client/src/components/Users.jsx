import React, { useEffect, useState } from "react";
import tokenAxios from "../config/tokenAxios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const handleGetAllUsers = async () => {
    try {
      const response = await tokenAxios("/api/users");
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    handleGetAllUsers();
  }, []);
  return <div>Users</div>;
}
