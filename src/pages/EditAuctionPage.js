import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import "../config";


const defaultValues = {
  img: "",
  name: "",
  category: "",
  description: "",
  startbid: "",
  location: "",
  country: "",
  starts: "",
  ends: "",
};

function EditAuctionPage() {
  let { id } = useParams();
  const [formValues, setFormValues] = useState(defaultValues);
  const [list, setList] = React.useState();
  const [Error, setError] = React.useState(false);

  function loadAuctions(data) {
    setList(data);
    console.log(list);
    console.log("setting...");
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
    console.log(event);
    console.log(formValues);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-auction/" + id + "/", {})
      .then((res) => {
        loadAuctions(res.data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  if (!list) return <div>Loading...</div>;

  return (
    <div className="center">
      <div>
        <h1 style={{ textAlign: "center" }}>Edit Auction</h1>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="img"
              name="img"
              type="text"
              onChange={handleInputChange}
              defaultValue={list.photos[0].URL}
            />
            <TextField
              required
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              defaultValue={list.name}
            />
            <TextField
              required
              id="category"
              name="category"
              type="text"
              onChange={handleInputChange}
              defaultValue={list.categories[0].name}
            />
            <TextField
              required
              id="description"
              name="description"
              type="text"
              onChange={handleInputChange}
              defaultValue={list.description}
            />
            <TextField
              required
              id="startbid"
              name="startbid"
              type="number"
              onChange={handleInputChange}
              defaultValue={list.buy_price}
            />
            <TextField
              required
              id="location"
              name="location"
              type="text"
              onChange={handleInputChange}
              defaultValue={list.location}
            />
            <TextField
              required
              id="country"
              name="country"
              type="text"
              onChange={handleInputChange}
              defaultValue={list.country}
            />
            <TextField
              required
              id="starts"
              name="starts"
              label="Start Time"
              type="datetime-local"
              onChange={handleInputChange}
              defaultValue={list.start}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              id="ends"
              name="ends"
              label="End Time"
              type="datetime-local"
              onChange={handleInputChange}
              defaultValue={list.ends}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <center>
            <Button disabled={false} variant="outlined" type="submit">
              Submit
            </Button>
            {Error ? <Alert severity="error">Unable to change</Alert> : null}
          </center>
        </Box>
      </div>
    </div>
  );
}

export default EditAuctionPage;
