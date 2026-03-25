// Footer — Stay Connected + copyright
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import mark from "../Assets/scsa_logo_no_bg.png";

const BLUE = "#1E3EA0";

const SOCIALS = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/scsa_swinburne/",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 1.924 2.104.493 3.535-.023 5.377.072 7.233.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 2.032 5.129 1.431 1.431 3.273 1.947 5.129 2.032C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.129-2.032 1.431-1.431 1.947-3.273 2.032-5.129C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.856-.601-3.698-2.032-5.129C20.465.493 18.623-.023 16.767.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100094178261840",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@scsa_swinburne",
    color: "#010101",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@swinburne_cambodian_sa",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/scsa-swinburne",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    url: "https://t.me/+hf5RwSScFho0ZjI1",
    color: "#26A5E4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <Box component="footer">

      {/* ── Stay Connected ── */}
      <Box sx={{ background: `linear-gradient(135deg, ${BLUE} 0%, #162e80 100%)`, py: 7 }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 900, textAlign: "center", letterSpacing: "-.02em", color: "#fff" }}>
            Stay Connected
          </Typography>
          <Typography sx={{ textAlign: "center", mb: 4, color: "rgba(255,255,255,.75)", fontSize: "1rem" }}>
            Follow us for the latest updates, events, and content.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {SOCIALS.map((s) => (
              <Box
                key={s.label}
                component="a"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  background: "rgba(255,255,255,.12)",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,.2)",
                  borderRadius: 9999,
                  px: 2.2,
                  py: 1,
                  fontWeight: 600,
                  fontSize: ".93rem",
                  textDecoration: "none",
                  transition: "background .2s, transform .2s",
                  "&:hover": {
                    background: s.color,
                    borderColor: s.color,
                    transform: "translateY(-2px)",
                    textDecoration: "none",
                  },
                }}
              >
                {s.icon}
                {s.label}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Copyright bar ── */}
      <Box sx={{ backgroundColor: "#fff", borderTop: "1px solid rgba(0,0,0,.08)" }}>
        <Container maxWidth="md" sx={{ py: 3 }}>
          <Stack alignItems="center" spacing={1.5}>
            <Box component="img" src={mark} alt="SCSA mark" sx={{ height: { xs: 36, sm: 44 }, width: "auto" }} />
            <Divider sx={{ width: "100%" }} />
            <Typography variant="body2" color="text.secondary" align="center">
              © 2026 Swinburne Cambodian Student Association
            </Typography>
          </Stack>
        </Container>
      </Box>

    </Box>
  );
}