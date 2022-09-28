import * as React from "react";
import { useEffect } from "react";
import BasicCard from "../components/Card";
import TablePagination from '@mui/material/TablePagination';
import axios from "axios";
import '../config';

function HomePage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [list, setList] = React.useState([]);

  function loadAuctions(data) {
    setList(data);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/auctions/", {
        headers: { token: "5ad14b3a-68fd-45ed-8cc5-19ee0dd15f15" },
      })
      .then((res) => loadAuctions(res.data))
      .catch(console.log);
  });

  if (!list.length) return <div>Loading...</div>

  return (
    <center>
      <div>
        <div>{global.config.user.token}</div>
          {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <BasicCard
              key={item.id}
              header={item.buy_price + "€"}
              image={item.photos[0].URL}
              title={item.name.slice(0,50)}
              categories={item.categories[0].name}
              description={item.description.slice(0,50)}
              id = {item.id}
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

export default HomePage;
