import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import UserCard from "../components/userCard";
import axios from "axios";
import "../config";

const DUMMY_DATA = [
  {
    key: 1,
    username: "name1 lastname1",
  },
  {
    key: 2,
    username: "name2 lastname2",
  },
  {
    key: 3,
    username: "name3 lastname4",
  },
  {
    key: 4,
    username: "name4 lastname5",
  },
  {
    key: 5,
    username: "name5 lastname5",
  },
  {
    key: 6,
    username: "name6 lastname6",
  },
  {
    key: 7,
    username: "name7 lastname7",
  },
  {
    key: 8,
    username: "name8 lastname8",
  },
  {
    key: 9,
    username: "name9 lastname9",
  },
  {
    key: 10,
    username: "name10 lastname10",
  },
  {
    key: 11,
    username: "name11 lastname11",
  },
  {
    key: 12,
    username: "name12 lastname12",
  },
  {
    key: 13,
    username: "name13 lastname13",
  },
  {
    key: 14,
    username: "name14 lastname14",
  },
];

const initialList = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
];

var DATA = [];

function AllUsersPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const [list, setList] = React.useState(initialList)

  function handleAdd(data) {
    setList(data)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 50));
    setPage(0);
  };

  const res = axios
    .get("http://localhost:8080/users/", {
      headers: { token: "e6e4e4d7-c0bf-47be-b291-6fd87f1fbf26" },
    })
    .then(res => handleAdd(res.data))
    .catch(console.log);

  return (
    <center>
      <div className="center">
        <div>All users page</div>
        {list.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ).map((item) => (
          <UserCard key={item.id} username={item.username} />
        ))}
      </div>
      <TablePagination
        component="div"
        count={DUMMY_DATA.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </center>
  );
}

export default AllUsersPage;
