// App shell (light-only) + routes
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";

// Single light MUI theme (no dark mode)
const theme = createTheme({ palette: { mode: "light" } });

export default function App() {
  useEffect(() => {
    // Ensure no leftover theme flags from old build
    localStorage.removeItem("theme"); // drop persisted theme key
    document.body.removeAttribute("data-theme"); // remove data-theme="dark"
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* normalize + light colors */}
      <Header /> {/* top navigation */}
      <Routes> {/* page routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer /> {/* footer */}
    </ThemeProvider>
  );
}
