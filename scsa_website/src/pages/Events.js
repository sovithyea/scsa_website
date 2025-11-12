import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Events() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Events</Typography>
      <Typography color="text.secondary">
        Upcoming + past events will go here. Keep it simple (cards or list).
      </Typography>
    </Container>
  );
}
