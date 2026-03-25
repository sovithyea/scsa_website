// Simple light header with active nav + mobile hamburger menu
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

import bannerLight from "../Assets/scsa_banner_no_bg.png";

const NAV = [
  { label: "Home",     to: "/" },
  { label: "About Us", to: "/aboutus" },
  { label: "Events",   to: "/events" },
];

export default function Header() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:700px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navSx = (to) => ({
    color: pathname === to ? "#000" : "#4B5563",
    fontWeight: pathname === to ? 800 : 600,
    px: 1.25,
    borderRadius: 1,
    textTransform: "none",
    "&:hover": { backgroundColor: "rgba(0,0,0,.06)" },
  });

  const barSx = {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0 2px 10px rgba(0,0,0,.12)",
  };

  // Hamburger icon (3 lines)
  const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={barSx}>
        <Toolbar sx={{ minHeight: 80, px: 3 }}>
          <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", display: "flex", alignItems: "center", gap: 2 }}>

            {/* Logo */}
            <Box component={Link} to="/" aria-label="Go to Home" sx={{ display: "inline-flex", alignItems: "center" }}>
              <img src={bannerLight} alt="SCSA Logo" style={{ height: 56, display: "block", cursor: "pointer" }} />
            </Box>

            {/* Desktop nav */}
            {!isMobile && (
              <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1.5 }}>
                {NAV.map((n) => (
                  <Button key={n.to} component={Link} to={n.to} sx={navSx(n.to)}>
                    {n.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <Box sx={{ ml: "auto" }}>
                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open menu"
                  sx={{ color: "#000" }}
                >
                  <HamburgerIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240 } }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <img src={bannerLight} alt="SCSA" style={{ height: 40 }} />
        </Box>
        <Divider />
        <List>
          {NAV.map((n) => (
            <ListItem key={n.to} disablePadding>
              <ListItemButton
                component={Link}
                to={n.to}
                onClick={() => setDrawerOpen(false)}
                selected={pathname === n.to}
                sx={{
                  fontWeight: pathname === n.to ? 800 : 500,
                  "&.Mui-selected": { backgroundColor: "rgba(30,62,160,.08)" },
                }}
              >
                <ListItemText
                  primary={n.label}
                  primaryTypographyProps={{
                    fontWeight: pathname === n.to ? 800 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer so content doesn't hide under fixed header */}
      <Toolbar sx={{ minHeight: 80 }} />
    </>
  );
}
