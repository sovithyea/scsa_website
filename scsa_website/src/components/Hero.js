// Hero section with pill title + group photo
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import groupPic from "../Assets/group_pic.png";

export default function Hero() {
  return (
    <Box className="hero">
      {/* Small welcome label */}
      <Typography className="hero-welcome" variant="h3" align="center">
        WELCOME TO
      </Typography>

      {/* Big pill title */}
      <div className="hero-title">
        <span className="hero-pill">
          <b>SCSA SWINBURNE</b>
        </span>
      </div>

      {/* Group photo with glow */}
      <div className="hero-photo">
        <img src={groupPic} alt="SCSA Committee group" />
        <div className="hero-glow" />
      </div>
    </Box>
  );
}
