// App shell (light-only) + dynamic <title>
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

// light theme
const theme = createTheme({ palette: { mode: "light" } });

// updates document.title when route changes
function RouteTitle() {
  const { pathname } = useLocation(); // current path
  useEffect(() => {
    const map = { "/": "Home", "/aboutus": "About Us", "/events": "Events" }; // page names
    const page = map[pathname] ?? "SCSA";
    document.title = `${page} | SCSA`; // e.g., "About Us | SCSA"
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    localStorage.removeItem("theme"); // clear legacy theme
    document.body.removeAttribute("data-theme");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteTitle /> {/* dynamic title */}
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