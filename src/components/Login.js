import { Box, Container, Grid, Button } from "@material-ui/core";
import React, { useContext } from "react";
import "../style/Login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Context } from "../index.js";

const Login = () => {
  const { auth } = useContext(Context);

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
    });
  };

  return (
    <Container>
      <Grid container className="login" alignItems="center">
        <Grid className="login__box" direction="column">
          <Box p={10}>
            <Button variant="outlined" onClick={login}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
