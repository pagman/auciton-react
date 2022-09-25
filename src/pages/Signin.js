import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "../config";

const defaultValues = {
  name: "",
  lastName: 0,
  email: "",
  newUsername: "",
  newPassword: "",
  newRepeatPassword: "",
  phone: "",
  address: "",
  vat: "",
  username: "",
  password: "",
  country: "",
};

function SigninPage() {
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
    axios
      .post("http://localhost:8080/users/", {
        username: formValues.newUsername,
        password: formValues.newPassword,
        email: formValues.email,
        name: formValues.name,
        surname: formValues.lastName,
        phone: formValues.phone,
        location: formValues.address,
        country: formValues.country,
        afm: formValues.vat,
        role: "user",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const handleSignIn = (event) => {
    global.config.user.role = "aa";
    event.preventDefault();
    // console.log(formValues);
    console.log(formValues.name);
    axios
      .post("http://localhost:8080/login/", {
        username: formValues.username,
        password: formValues.password,
      })
      .then((response) => {
        console.log(response.data.role, response.data.token);
        global.config.user.token = response.data.token;
        global.config.user.role = response.data.role;
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="center">
      <div className="floatingDivLeft">
        <h1 style={{ textAlign: "center" }}>Sign up</h1>
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
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              label="Name"
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              type="text"
              onChange={handleInputChange}
              label="Last name"
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
              id="newUsername"
              name="newUsername"
              type="text"
              onChange={handleInputChange}
              label="Username"
            />
            <TextField
              required
              id="newPassword"
              name="newPassword"
              onChange={handleInputChange}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              required
              id="newRepeatPassword"
              name="newRepeatPassword"
              onChange={handleInputChange}
              label="Repeat password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              required
              id="phone"
              name="phone"
              type="number"
              onChange={handleInputChange}
              label="Phone"
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
              id="address"
              name="address"
              type="text"
              onChange={handleInputChange}
              label="Adress"
            />
            <TextField
              required
              id="vat"
              name="vat"
              type="text"
              onChange={handleInputChange}
              label="VAT"
            />
          </div>
          <div className="center">
            <Button disabled={false} variant="outlined" type="submit">
              Submit
            </Button>
          </div>
        </Box>
      </div>
      <div className="floatingDivLeft">
        <h1 style={{ textAlign: "center" }}>Log in</h1>
        <Box
          onSubmit={handleSignIn}
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
              id="username"
              name="username"
              type="text"
              onChange={handleInputChange}
              label="Username"
            />
            <TextField
              required
              id="password"
              name="password"
              onChange={handleInputChange}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="center">
            <Button variant="outlined" type="submit">
              Log in
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default SigninPage;
