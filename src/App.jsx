import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./index.css";
import "./components/components.css"

import NavBar from "./components/NavBar";
import * as Main from "./pages/MainPage.jsx";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Main.Home />
      <Main.About />
      <Main.Projects />
      <Main.Contact />
      <Footer />
    </>
  );
}
