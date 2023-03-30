import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from "../index";

const AppRouter = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    user ? navigate("/chat") : navigate("/login");
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
