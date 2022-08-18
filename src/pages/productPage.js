import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductPage() {
  return (
    <div className="center">
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <center>
                {" "}
                <img className="shopImg"
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
              <Button margin='100' variant="contained">Buy now</Button>
              </div>
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
    </div>
  );
}
