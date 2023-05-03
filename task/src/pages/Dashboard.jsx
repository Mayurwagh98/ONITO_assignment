import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Dashboard = () => {
  let [users, setUsers] = useState([]);
  let [search, setSearch] = useState("");
  let getUsers = async () => {
    await axios
      .get(`http://localhost:8080/user?q=${search}`)
      .then((res) => {
        console.log(res.data);

        setUsers(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getUsers();
  }, [search]);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Govt Issue ID",
      selector: (row) => row.govtId,
      sortable: true,
    },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Search........."
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "30%", borderRadius: "10px" }}
        />
      </div>
      <DataTable
        columns={columns}
        data={users}
        pagination
        selectableRows
        fixedHeader
      />
    </div>
  );
};

export { Dashboard };
