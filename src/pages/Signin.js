import React, { useState } from "react"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
  username:'',
  password:''
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
              id="outli4561ned-required"
              name="name"
              type="text"
              onChange={handleInputChange}
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-56disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-sdffhpassword-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-sdfsdfg-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="asd-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlinedgdfssdf-search"
              label="Search field"
              type="search"
            />
            <TextField
              id="outlined-helperTasdasdext"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </div>
          <div className="center">
            <Button variant="outlined" type="submit" >Submit</Button>
          </div>
        </Box>
      </div>
      <div className="floatingDivLeft">
        <h1 style={{ textAlign: "center" }}>Log in</h1>
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
              id="username"
              name="username"
              type="text"
              onChange={handleInputChange}
              label="Username"
              defaultValue="Hello World"
            />
            <TextField
              id="password"
              name='password'
              onChange={handleInputChange}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>

          <div className="center">
            <Button variant="outlined" type="submit">Log in</Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default SigninPage;
