import * as React from "react";
import EditCard from "../components/EditCard";
import TablePagination from "@mui/material/TablePagination";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const DUMMY_DATA = [
  {
    key: 1,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 2,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 3,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 4,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 5,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 6,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 7,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 8,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 9,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 10,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 11,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 12,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 13,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 14,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 15,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 16,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
  {
    key: 17,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  },
];

function MyAccountPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <center>
      <div>
        <div>My Account</div>
        {DUMMY_DATA.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ).map((item) => (
          <EditCard
            key={item.key}
            header={item.header}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
          />
        ))}
        <Link style={{ textDecoration: "none" }} to="/addauction">
          <Fab className="fab" color="secondary" aria-label="edit">
            <AddIcon />
          </Fab>
        </Link>
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

export default MyAccountPage;
