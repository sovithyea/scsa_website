// Light footer (centered logo + centered copyright)
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import mark from "../Assets/scsa_logo_no_bg.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8, // space above footer
        backgroundColor: "#fff", // light background
        borderTop: "1px solid rgba(0,0,0,.08)", // subtle top border
      }}
    >
      <Container maxWidth="md" sx={{ py: 4 }}> {/* centered content wrapper */}
        <Stack alignItems="center" spacing={1.5}> {/* vertical center stack */}
          <Box
            component="img"
            src={mark}
            alt="SCSA mark"
            sx={{
              height: { xs: 40, sm: 52 }, // responsive logo height
              width: "auto", // keep aspect
              display: "block", // prevent inline gap
            }}
          />
          <Divider sx={{ width: "100%", my: 0.5 }} /> {/* thin divider */}
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            © 2026 Swinburne Cambodian Student Association 
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
