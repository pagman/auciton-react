import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  useParams
} from "react-router-dom";
import axios from "axios";
import "../config";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));





function UserDetailsPage() {
  const [list, setList] = React.useState([]);

  function loadUsers(data) {
    setList(data);
  }

  let { id } = useParams();

    function acceptHandler(x){
        console.log(x);
    
    }
    function denyHandler(x){
        console.log(x);
    
    }

    useEffect(() => {
      const res = axios
        .get("http://localhost:8080/users/", {
          headers: { token: "e6e4e4d7-c0bf-47be-b291-6fd87f1fbf26" },
        })
        .then((res) => loadUsers(res.data))
        .catch(console.log);
    });
  
    if (!list.length) return <div>Loading...</div>;
    console.log(list)
  
  return (
    <div className="center">
      
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>{list[list.length-id].id}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{list[list.length-id].name}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{list[list.length-id].surname}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{list[list.length-id].email}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{list[list.length-id].phone}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{list[list.length-id].location}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>{list[list.length-id].afm}</Item>
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
      
    </div>
  );
}

export default UserDetailsPage;
