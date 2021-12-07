import { Button, Divider, Grid, Pagination, Typography } from "@mui/material";
import React from "react";
import DropDownComponent from "../dropdowncustom/dropdowncustom";
import HomeCard from "./HomeCard";
import SearchIcon from "@mui/icons-material/Search";

const Homeallpages = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item container xs={9} spacing={2}>
          <Grid
            item
            container
            xs={12}
            spacing={2}
            style={{ marginBottom: "20px" }}
          >
            <Grid item xs={2.5}>
              <DropDownComponent title="Skill" />
            </Grid>
            <Grid item xs={2.5}>
              <DropDownComponent title="Duration" />
            </Grid>
            <Grid item xs={2.5}>
              <DropDownComponent title="Scope" />
            </Grid>
            <Grid item xs={2.5}>
              <DropDownComponent title="Intent" />
            </Grid>
            <Grid item xs={2}>
              <Button
                style={{ height: "100%" }}
                variant="outlined"
                size="large"
                endIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Divider />
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
