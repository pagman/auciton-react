import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const DUMMY_DATA = [
  {
    key: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    name: "product sample",
    category: "Clothing",
    description: "a paragraph or sth like that tha is big",
    startbid: 7,
    location: "Athens",
    country: "Greece",
    starts: "2022-08-31T10:30",
    ends: "2022-08-31T10:30"
  },]

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
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

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
              defaultValue={DUMMY_DATA[0].img}
            />
            <TextField
              required
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              defaultValue={DUMMY_DATA[0].name}
            />
            <TextField
              required
              id="category"
              name="category"
              type="text"
              onChange={handleInputChange}
              defaultValue={DUMMY_DATA[0].category}
            />
            <TextField
              required
              id="description"
              name="description"
              type="text"
              onChange={handleInputChange}
              defaultValue={DUMMY_DATA[0].description}
            />
            <TextField
              required
              id="startbid"
              name="startbid"
              type="number"
              onChange={handleInputChange}
              defaultValue={DUMMY_DATA[0].startbid}
            />
            <TextField
              required
              id="location"
              name="location"
              type="text"
              onChange={handleInputChange}
              defaultValue={DUMMY_DATA[0].location}
            />
            <TextField
              required
              id="country"
              name="country"
              type="text"
              onChange={handleInputChange}
              defaultValue={DUMMY_DATA[0].country}
            />
            <TextField
            required
              id="starts"
              name="starts"
              label="Start Time"
              type="datetime-local"
              onChange={handleInputChange}
              defaultValue={DUMMY_DATA[0].starts}
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
              defaultValue={DUMMY_DATA[0].ends}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <center>
          <Button disabled={false} variant="outlined" type="submit">
            Submit
          </Button>
        </center>
        </Box>
        
      </div>
    </div>
  );
}

export default EditAuctionPage;
