import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";

const theme = createTheme({ palette: { mode: "light" } });

function RouteTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const map = { "/": "Home", "/aboutus": "About Us", "/events": "Events" };
    const page = map[pathname] ?? "SCSA";
    document.title = `${page} | SCSA`;
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    localStorage.removeItem("theme");
    document.body.removeAttribute("data-theme");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteTitle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}