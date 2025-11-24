// Simple light header with active nav + search
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

// assets
import bannerLight from "../Assets/scsa_logo.png";

export default function Header() {
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

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

  // search submit handler – uses browser's find on current page
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = query.trim();
    if (!term) return;

    if (typeof window.find === "function") {
      const found = window.find(term);
      if (!found) {
        // optionally show something else instead of alert
        // alert("No matches found");
        console.log("No matches found for:", term);
      }
    } else {
      console.log("window.find not supported in this browser");
    }
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
            <Box
              component={Link}
              to="/"
              aria-label="Go to Home"
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <img
                src={bannerLight}
                alt="SCSA Logo"
                style={{ height: 56, display: "block", cursor: "pointer" }}
              />
            </Box>

            {/* Search bar */}
            <Box
              sx={{
                ml: 3,
                flexGrow: 1,
                maxWidth: 280,
              }}
            >
              <form onSubmit={handleSearchSubmit}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search this page..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  InputProps={{
                    sx: {
                      borderRadius: "999px",
                      backgroundColor: "#f3f4f6",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ fontSize: 20, color: "#6b7280" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </Box>

            {/* Right-side nav buttons */}
            <Box
              sx={{
                ml: "auto",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Button component={Link} to="/" sx={navSx("/")}>
                Home
              </Button>
              <Button component={Link} to="/aboutus" sx={navSx("/aboutus")}>
                About Us
              </Button>
              <Button component={Link} to="/events" sx={navSx("/events")}>
                Events
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer so content doesn't hide under fixed header */}
      <Toolbar sx={{ minHeight: 80 }} />
    </>
  );
}

