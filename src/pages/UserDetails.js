import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DUMMY_DATA = [
  {
    key: 1,
    username: "Pagman13",
    name: "Panagiotis",
    lastName: "Mantas",
    email: "mantas.pan1@gmail.com",
    phone: "0306973247453",
    address: "Lakonias 20 Daphne",
    vat: "158854109",
  },
];


function UserDetailsPage() {
    function acceptHandler(x){
        console.log(x);
    
    }
    function denyHandler(x){
        console.log(x);
    
    }
  return (
    <div className="center">
      {DUMMY_DATA.map((item) => (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>{item.username}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{item.name}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{item.lastName}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{item.email}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{item.phone}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{item.address}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{item.vat}</Item>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
            item
            xs={6}
          >
            <Button onClick={() => acceptHandler("Accepted")} variant="contained">Accept</Button>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
            item
            xs={6}
          >
            <Button 
            onClick={() => denyHandler("Denied")}
              style={{
                backgroundColor: '#b2102f',
              }}
              variant="contained"
            >
              Deny
            </Button>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default UserDetailsPage;
