import React from "react";
import { Container, Grid } from "@material-ui/core";
import "../style/Loader.css";

const Loader = () => {
  return (
    <Container>
      <Grid container className="loader">
        <div className="lds-dual-ring"></div>
      </Grid>
    </Container>
  );
};

export default Loader;
