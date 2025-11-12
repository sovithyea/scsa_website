// Home page with hero + intro
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Hero /> {/* big banner section */}
      <Box className="bottom-part">
        <Container maxWidth="md" sx={{ py: 6 }}>
          {/* Section title */}
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 900, textAlign: "center", letterSpacing: "-.02em" }}>
            Who Are We?
          </Typography>
          {/* Short blurb */}
          <Typography color="text.secondary" sx={{ textAlign: "center" }}>
            We’re the Swinburne Cambodian Student Association (SCSA) — a space to connect,
            share culture, and build friendships.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}
