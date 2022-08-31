import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

function AddAuctionPage() {
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
        <h1 style={{ textAlign: "center" }}>Add Product</h1>
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
              label="Image Url"
            />
            <TextField
              required
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              label="Name"
            />
            <TextField
              required
              id="category"
              name="category"
              type="text"
              onChange={handleInputChange}
              label="Category"
            />
            <TextField
              required
              id="email"
              name="email"
              type="text"
              onChange={handleInputChange}
              label="Email"
            />
            <TextField
              required
              id="description"
              name="description"
              type="text"
              onChange={handleInputChange}
              label="Description"
            />
            <TextField
              required
              id="startbid"
              name="startbid"
              type="number"
              onChange={handleInputChange}
              label="Starting price"
            />
            <TextField
              required
              id="location"
              name="location"
              type="text"
              onChange={handleInputChange}
              label="Location"
            />
            <TextField
              required
              id="country"
              name="country"
              type="text"
              onChange={handleInputChange}
              label="Country"
            />
            <TextField
            required
              id="starts"
              name="starts"
              label="Start Time"
              type="datetime-local"
              onChange={handleInputChange}
              defaultValue="2022-08-31T10:30"
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
              defaultValue="2022-08-31T10:30"
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

export default AddAuctionPage;
