import { Box, Container, Grid, Button, Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import "../style/Login.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { Context } from "../index.js";

const Login = () => {
  const { auth } = useContext(Context);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
    });
  };

  const githubLogin = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((result) => {
        const user = result.user;
      })
      .catch((err) =>
        console.log(
          "Ваш Github имеет одинаковую почту с одним из ваших аккаутов"
        )
      );
  };

  return (
    <Container>
      <Grid container className="login" alignItems="center">
        <Grid className="login__box" direction="column">
          <Box p={10}>
            <div className="login__text">Войти с помощью</div>
            <Button
              variant="outlined"
              onClick={googleLogin}
              className="login__button"
            >
              Google
              <Avatar src="https://blogger.googleusercontent.com/img/a/AVvXsEhSO0si0-CSlSxoPKy4fWhZen95WdLlkfMEJNX5OST4TTOaIsh4HRm37qRilB3sn7FiDNZo8UQ-4LwLJqfuCGHVAwQrlYXcZoRkj7C3emK1i8BEsWg7pJEM9reIPtPenNZ3ILnyl2yvqSBPWTHwvc9IbziAa67DOooWNENIngSZXUjmpo6aBkK2WYpf1Q" />
            </Button>
            <Button
              variant="outlined"
              onClick={githubLogin}
              className="login__button"
            >
              GitHub{" "}
              <Avatar src="https://w7.pngwing.com/pngs/157/119/png-transparent-github-computer-icons-github.png" />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
