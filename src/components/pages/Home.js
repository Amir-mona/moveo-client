import React from "react";

import { Link } from "react-router-dom";

import "./Styles/home.css";

import { Card, Typography, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "yellowgreen",
  }));

  return (
    <div className="homeContainer">
      <Card className="homeCardContainer">
        <Typography sx={{ fontSize: "3rem", textAlign: "center" }} color="blue">
          Choose code block
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}></Box>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Item>
                <Link to={"/firstRoom"}>First Room</Link>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Link to="/secondRoom">Second Room</Link>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Link to="/thirdRoom">third Room</Link>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Link to="/fourRoom">four Room</Link>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
};

export default Home;
