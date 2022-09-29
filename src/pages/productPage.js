import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
import { listSubheaderClasses, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import "../config";

const defaultValues = {
  bid: 0.0,
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

  const handleMessage = () => {
    navigate('/chat');
  };


  let { id } = useParams();
  const [formValues, setFormValues] = useState(defaultValues);
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [LatLng, setLatLng] = React.useState([0.0, 0.0]);
  const [winner, setWinner] = React.useState(false);
  const navigate = useNavigate();

  function loadAuctions(data) {
    setList(data);
    console.log(list);
    console.log(list.bids);
  }

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
    axios
      .get("http://localhost:8080/get-auction/" + id + "/", {})
      .then((res) => {
        loadAuctions(res.data);
        setLatLng([
          parseFloat(res.data.latitude),
          parseFloat(res.data.longtitude),
        ]);
      })
      .catch(console.log);

    axios
      .get("http://localhost:8080/auction-winner/" + id + "/", {
        headers: { token: global.config.user.token },
      })
      .then((res) => {
        console.log(res.data);
        setWinner(res.data.is_auction_winner);
        console.log(winner)
      })
      .catch(console.log);
  }, [open]);

  if (!list) return <div>Loading...</div>;

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
                  src="https://i.ebayimg.com/images/g/pxcAAOSwis1hwW4V/s-l500.jpg"
                  alt="new"
                />
                {winner===true?<Button
                      disabled={false}
                      variant="contained"
                      onClick={handleMessage}
                    >
                      Message Seller
                    </Button>:null}
              </center>
            </Grid>
            <Grid item xs={6}>
              <h2>{list.name}</h2>
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
                    label={list.currently}
                  />
                  <AlertDialog
                    inactive={false}
                    bidValue={formValues.bid}
                    auction_id={id}
                  />
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
        {list.description}
      </container>
      <container>
        <br></br>
        
        <br></br>
        <MapContainer
          className="leaflet-container"
          center={LatLng}
          zoom={0}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={LatLng}>
            <Popup>
              <span>
                This is where the product is <br /> located.
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
            {list.bids &&
              list.bids.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.bidder_id}
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
