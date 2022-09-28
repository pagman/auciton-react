import * as React from "react";
import { useEffect } from "react";
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

var DATA = [];

function AllUsersPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const [list, setList] = React.useState([]);

  function loadUsers(data) {
    setList(data);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 50));
    setPage(0);
  };

  useEffect(() => {
    const res = axios
      .get("http://localhost:8080/users/", {
        headers: { token: global.config.user.token },
      })
      .then((res) => loadUsers(res.data))
      .catch(console.log);
  });

  if (!list.length) return <div>Loading...</div>;

  return (
    <center>
      <div className="center">
        <div>All users page</div>
        {list
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item) => (
            <UserCard
              key={item.id}
              id={item.id}
              username={item.username}
              validated = {item.validated}
            />
          ))}
      </div>
      <TablePagination
        component="div"
        count={list.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </center>
  );
}

export default AllUsersPage;
