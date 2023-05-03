import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TableWithPagination } from "../Components/Table";

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

//   const columns = [
//     {
//       name: "ID",
//       selector: (row) => row.id,
//     },
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Age",
//       selector: (row) => row.age,
//       sortable: true,
//     },
//     {
//       name: "Mobile",
//       selector: (row) => row.mobile,
//       sortable: true,
//     },
//     {
//       name: "Address",
//       selector: (row) => row.address,
//     },
//     {
//       name: "Govt ID",
//       selector: (row) => row.govtId,
//       sortable: true,
//     },
//     {
//       name: "Gaurdian details",
//       selector: (row) => row.guardian_name,
//     },
//     {
//       name: "Nationality",
//       selector: (row) => row.nationality,
//     },
//   ];

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
      {/* <DataTable columns={columns} data={users} pagination fixedHeader /> */}
      <TableWithPagination users={users} />
    </div>
  );
};

export { Dashboard };
