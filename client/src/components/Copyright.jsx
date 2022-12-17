import React from "react";
import { Link, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Minor Project 2022-2023
      </Link>{" "}
    </Typography>
  );
}
