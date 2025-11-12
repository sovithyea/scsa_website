import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>About Us</Typography>
      <Typography color="text.secondary">
        Short blurb about SCSA, committee intros, mission, and how to join. (Fill in later.)
      </Typography>
    </Container>
  );
}
