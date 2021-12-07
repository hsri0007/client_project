import { Grid, Pagination, Typography } from "@mui/material";
import React from "react";
import HomeCard from "./HomeCard";

const Homeallpages = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item container xs={9} spacing={2}>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
          <Grid item xs={3}>
            <HomeCard />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom component="div">
            What is Team Training?
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ margin: "10px 0px" }}>
        <Grid item xs={4}>
          <Typography variant="body2" gutterBottom>
            Showing 28 to 30 entries
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Pagination count={10} color="primary" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homeallpages;
