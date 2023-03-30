import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/App.css";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./index";
import Loader from "./components/Loader";

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
