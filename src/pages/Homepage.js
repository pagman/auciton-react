import * as React from "react";
import { useEffect } from "react";
import BasicCard from "../components/Card";
import TablePagination from "@mui/material/TablePagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import axios from "axios";
import "../config";
import { maxWidth } from "@mui/system";

function HomePage({ value }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [list, setList] = React.useState([]);
  const [category, setCategory] = React.useState(["Laptop", "Electronics"]);

  const handleCategory = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  function loadAuctions(data) {
    setList(data);
  }
  if (value) {
    console.log(value);
  } else {
    console.log("no value");
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
        headers: { token: "93a078aa-e967-46c0-a312-c61d92adff88" },
        params: {
          skip: page * rowsPerPage,
          limit: page * rowsPerPage + rowsPerPage,
        },
      })
      .then((res) => loadAuctions(res.data))
      .catch(console.log);
  }, []);

  if (!list.length) return <div>Loading...</div>;

  return (
    <center>
      <div>
        <div>{global.config.user.token}</div>
        <div className="center">
          {" "}
          <Box sx={{ minWidth: 120, maxWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleCategory}
              >
                {category.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        {list
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item) => (
            <BasicCard
              key={item.id}
              header={item.buy_price + "€"}
              image={item.photos[0].URL}
              title={item.name.slice(0, 50)}
              categories={item.categories[0].name}
              description={item.description.slice(0, 50)}
              id={item.id}
            />
          ))}
      </div>
      <TablePagination
        component="div"
        count={parseInt(list[0].id)}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </center>
  );
}

export default HomePage;
