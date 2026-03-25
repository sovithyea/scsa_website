// Home page — Hero + Who Are We + Mission/Values + Events Preview
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Hero from "../components/Hero";

const BLUE = "#1E3EA0";
const RED  = "#CC2222";

const EVENTS = [];
const VALUES = [];

const tagColor = { Social: RED, Cultural: "#7C3AED", Academic: BLUE };

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>

      {/* ── Hero ── */}
      <Hero />

      {/* ── Who Are We ── */}
      <Box sx={{ background: "#fff", py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 900, textAlign: "center", letterSpacing: "-.02em" }}>
            Who Are We?
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: "center", fontSize: "1.05rem", lineHeight: 1.75 }}>
            We're the <strong>Swinburne Cambodian Student Association (SCSA)</strong> — a space to
            connect, share culture, and build lasting friendships. Whether you're new to Melbourne or
            a local Cambodian student, you belong here.
          </Typography>
        </Container>
      </Box>

      {/* ── Mission / Values ── */}
      {VALUES.length > 0 && (
        <Box sx={{ background: "#f7f9fc", py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ mb: 1, fontWeight: 900, textAlign: "center", letterSpacing: "-.02em" }}>
              What We Stand For
            </Typography>
            <Typography color="text.secondary" sx={{ textAlign: "center", mb: 5, fontSize: "1rem" }}>
              Three pillars that guide everything we do.
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {VALUES.map((v) => (
                <Grid item xs={12} sm={4} key={v.title}>
                  <Box sx={{ background: "#fff", borderRadius: 3, p: 3.5, textAlign: "center", boxShadow: "0 2px 16px rgba(0,0,0,.07)", height: "100%", transition: "transform .2s, box-shadow .2s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 28px rgba(0,0,0,.12)" } }}>
                    <Typography sx={{ fontSize: "2.4rem", mb: 1 }}>{v.emoji}</Typography>
                    <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1, color: BLUE }}>{v.title}</Typography>
                    <Typography color="text.secondary" sx={{ fontSize: ".93rem", lineHeight: 1.65 }}>{v.text}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* ── Upcoming Events Preview ── */}
      <Box sx={{ background: "#fff", py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 900, textAlign: "center", letterSpacing: "-.02em" }}>
            Upcoming Events
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: "center", mb: 5, fontSize: "1rem" }}>
            Here's what's coming up — stay tuned for more details.
          </Typography>
          <Grid container spacing={3}>
            {EVENTS.map((ev) => (
              <Grid item xs={12} sm={4} key={ev.id}>
                <Box sx={{ border: "1.5px solid rgba(0,0,0,.08)", borderRadius: 3, p: 3, height: "100%", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 28px rgba(0,0,0,.1)" } }}>
                  <Box sx={{ display: "inline-block", mb: 1.5, px: 1.5, py: 0.4, borderRadius: 9999, background: tagColor[ev.tag] ?? BLUE, color: "#fff", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".04em", alignSelf: "flex-start" }}>
                    {ev.tag}
                  </Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.5 }}>{ev.title}</Typography>
                  <Typography sx={{ fontSize: ".82rem", color: BLUE, fontWeight: 600, mb: 1.5 }}>{ev.date}</Typography>
                  <Typography color="text.secondary" sx={{ fontSize: ".9rem", lineHeight: 1.65, flexGrow: 1 }}>{ev.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button component={Link} to="/events" variant="contained" sx={{ backgroundColor: BLUE, color: "#fff", fontWeight: 700, px: 4, py: 1.3, borderRadius: 9999, textTransform: "none", fontSize: "1rem", "&:hover": { backgroundColor: "#162e80" } }}>
              See All Events →
            </Button>
          </Box>
        </Container>
      </Box>

    </Container>
  );
}