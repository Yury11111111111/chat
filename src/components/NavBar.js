import React, { useContext } from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

const NavBar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar position="static">
      <Toolbar variant="regular">
        <Grid container justifyContent="flex-end">
          {user ? (
            <Button
              onClick={() => {
                auth.signOut();
              }}
              variant="outlined"
            >
              Выйти
            </Button>
          ) : (
            <NavLink to={"/login "}>
              <Button variant="outlined">Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
