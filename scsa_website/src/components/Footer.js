// Clean SCSA footer bar (white, with social links)

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // TikTok placeholder
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link"; // Linktree placeholder

import scsaLogo from "../Assets/scsa_logo_no_bg.png"; // adjust if needed

// Social media links
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/scsa-swinburne/",   
  tiktok: "https://www.tiktok.com/@scsa_swinburne",         
  instagram: "https://www.instagram.com/scsa_swinburne/",
  youtube: "https://www.youtube.com/@swinburne_cambodian_sa",
  linktree: "https://linktr.ee/scsa_swinburne",
};

export default function Footer() {

  return (
    <AppBar
      component="footer"
      position="static"
      elevation={0}
      sx={{
        mt: 8,
        backgroundColor: "#ffffff",
        color: "#111111",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Toolbar disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            py: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          {/* Left: SCSA logo + name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <img
              src={scsaLogo}
              alt="SCSA logo"
              style={{ height: 32, display: "block" }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
              }}
            >
              Swinburne Cambodian Student Association
            </Typography>
          </Box>

          {/* Middle: copyright */}
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            Copyright © 2026 SCSA Swinburne. All rights reserved.
          </Typography>

          {/* Right: socials */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* LinkedIn */}
            <IconButton
              size="small"
              color="inherit"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            {/* TikTok (MusicNote icon as placeholder) */}
            <IconButton
              size="small"
              color="inherit"
              href={socialLinks.tiktok}
              target="_blank"
              rel="noreferrer"
            >
              <MusicNoteIcon fontSize="small" />
            </IconButton>

            {/* Instagram */}
            <IconButton
              size="small"
              color="inherit"
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>

            {/* YouTube */}
            <IconButton
              size="small"
              color="inherit"
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>

            {/* Linktree */}
            <IconButton
              size="small"
              color="inherit"
              href={socialLinks.linktree}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
