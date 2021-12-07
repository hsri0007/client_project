import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomepageTabs from "./Tabs/homepagetabs";

const Homepage = () => {
  return (
    <Box style={{ width: "95%", margin: "auto", paddingTop: "20px" }}>
      <Typography variant="h4" gutterBottom component="div">
        Team Training
      </Typography>
      <HomepageTabs />
    </Box>
  );
};

export default Homepage;
