import axios from "axios";
import React, { useEffect, useState } from "react";
import { TableWithPagination } from "../Components/Table";

const Dashboard = () => {
  let [users, setUsers] = useState([]);
  let [search, setSearch] = useState("");
  let getUsers = async () => {
    await axios
      // .get(`http://localhost:8080/user?q=${search}`)
      .get(`https://onito-backend-jwvv.onrender.com/user?q=${search}`)
      .then((res) => {
        console.log(res.data);

        setUsers(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getUsers();
  }, [search]);

  return (
    <div>
      <h2 style={{ textDecoration: "underline", fontFamily: "sans-serif" }}>
        Dashboard
      </h2>
      <div>
        <input
          type="text"
          placeholder="Search........."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "30%",
            borderRadius: "10px",
            margin: "10px 0 0 0",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        />
      </div>

      <TableWithPagination users={users} />
    </div>
  );
};

export { Dashboard };
