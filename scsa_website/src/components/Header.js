// Simple light header with active nav
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// assets 
import bannerLight from "../Assets/scsa_banner_no_bg.png";

export default function Header() {
  const { pathname } = useLocation(); // read current route

  // style for nav items (active vs inactive)
  const navSx = (to) => ({
    color: pathname === to ? "#000" : "#4B5563",
    fontWeight: pathname === to ? 800 : 600,
    px: 1.25,
    borderRadius: 1,
    "&:hover": { backgroundColor: "rgba(0,0,0,.06)" },
  });

  // light app bar styling
  const barSx = {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0 2px 10px rgba(0,0,0,.12)",
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={barSx}>
        <Toolbar sx={{ minHeight: 80, px: 3 }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 1200,
              mx: "auto",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Logo that links to Home */}
            <Box component={Link} to="/" aria-label="Go to Home" sx={{ display: "inline-flex", alignItems: "center" }}>
              <img src={bannerLight} alt="SCSA Logo" style={{ height: 56, display: "block", cursor: "pointer" }} />
            </Box>

            {/* Right-side nav buttons */}
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1.5 }}>
              <Button component={Link} to="/" sx={navSx("/")}>Home</Button>
              <Button component={Link} to="/aboutus" sx={navSx("/aboutus")}>About Us</Button>
              <Button component={Link} to="/events" sx={navSx("/events")}>Events</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer so content doesn't hide under fixed header */}
      <Toolbar sx={{ minHeight: 80 }} />
    </>
  );
}
