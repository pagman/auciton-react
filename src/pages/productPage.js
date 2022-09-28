import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AlertDialog from "../components/dialog";
import BuyNowDialog from "../components/buynowdialog";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const defaultValues = {
  bid: "",
};

function createData(userID, time, amount) {
  return { userID, time, amount };
}

const rows = [
  createData("danobody", "Dec-10-01 08:25:26)", 6.5),
  createData("daeveryone", "Dec-10-01 08:1:26)", 7.2),
  createData("danoone", "Dec-10-01 08:26:21)", 8.9),
];

export default function ProductPage() {
  let { id } = useParams();
  const [formValues, setFormValues] = useState(defaultValues);
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    console.log(formValues);
  };
  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);
  return (
    <div className="center">
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <center>
                {" "}
                <img
                  className="shopImg"
                  src="https://m.media-amazon.com/images/I/61QZ72APrOL._UL1000_.jpg"
                  alt="new"
                />
              </center>
            </Grid>
            <Grid item xs={6}>
              <div className="vertical-center">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </div>
              <div className="center">
                <Box
                  onSubmit={handleSubmit}
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    required
                    id="bid"
                    name="bid"
                    type="number"
                    onChange={handleInputChange}
                    label="Bid"
                  />
                  <AlertDialog inactive={false} bidValue={formValues} />
                </Box>
              </div>
              <div className="center">
                <Box
                  onSubmit={handleSubmit}
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h2" component="h2">
                    {7} €
                  </Typography>
                  <BuyNowDialog inactive={false} bidValue={7} />
                </Box>
              </div>
              <div className="center"></div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <container>
        <br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </container>
      <container>
        <br></br>
        <br></br>
        <MapContainer
          className="leaflet-container"
          center={[51.505, -0.09]}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </container>
      <container>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userID}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </container>
    </div>
  );
}
