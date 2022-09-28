import * as React from "react";
import { useEffect } from "react";
import BasicCard from "../components/Card";
import TablePagination from '@mui/material/TablePagination';
import axios from "axios";
import '../config';
const DUMMY_DATA = [
  {
    key:1,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },{
    key:2,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:3,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:4,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:5,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },{
    key:6,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:7,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:8,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:9,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },{
    key:10,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:11,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:12,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:13,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },{
    key:14,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:15,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:16,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:17,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  }
];

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
    const res = axios
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
