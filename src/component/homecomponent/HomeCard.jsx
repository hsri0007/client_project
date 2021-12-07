import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1507&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          Test Corp image
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccessAlarmIcon color="primary" />

        <span style={{ marginLeft: "10px" }}>3 min</span>
      </CardActions>
    </Card>
  );
}
