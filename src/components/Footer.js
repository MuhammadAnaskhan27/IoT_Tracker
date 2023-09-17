import React from "react";
import Box from "@mui/material/Box";
import Logo from "../../src/assets/tracker-logo-2.png";
import { Container, Typography, useMediaQuery } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices

  return (
    <>
      <Box sx={{ backgroundColor: "#282461", paddingTop: "30px" }}>
        <img style={{ marginLeft:isMobile?"30px":'70px' }} src={Logo} alt="" />

        <Box
          sx={{
            paddingBottom: "20px",
            display: "flex",
            paddingTop: "10px",
            justifyContent: "space-evenly",
            flexDirection: isMobile ? "column" : "row",
            gap: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                paddingLeft: isMobile ? "15px" : "0px",
              }}
            >
              The Premier & Leading Tracker <br /> Company In Pakitan.
            </Typography>
          </Box>

          <Box>
            <Container sx={{ display: "flex", paddingBottom: "10px" }}>
              <FaGreaterThan
                style={{ paddingTop: "3px", color: "#29A7DC", height: "20px" }}
              />
              <Link style={{ textDecoration: "none" }} to="/">
                <Typography
                  sx={{ color: "white", fontSize: "18px", paddingLeft: "10px" }}
                >
                  Home
                </Typography>
              </Link>
            </Container>
            <Container sx={{ display: "flex", paddingBottom: "10px" }}>
              <FaGreaterThan
                style={{ paddingTop: "3px", color: "#29A7DC", height: "20px" }}
              />
              <Link style={{ textDecoration: "none" }} to="/services">
                <Typography
                  sx={{ color: "white", fontSize: "18px", paddingLeft: "10px" }}
                >
                  Services
                </Typography>
              </Link>
            </Container>
            <Container sx={{ display: "flex", paddingBottom: "10px" }}>
              <FaGreaterThan
                style={{ paddingTop: "3px", color: "#29A7DC", height: "20px" }}
              />
              <Link style={{ textDecoration: "none" }} to="/about">
                <Typography
                  sx={{ color: "white", fontSize: "18px", paddingLeft: "10px" }}
                >
                  About Us
                </Typography>
              </Link>
            </Container>
            <Container sx={{ display: "flex" }}>
              <FaGreaterThan
                style={{ paddingTop: "3px", color: "#29A7DC", height: "20px" }}
              />
              <Link style={{ textDecoration: "none" }} to="/contact">
                <Typography
                  sx={{ color: "white", fontSize: "18px", paddingLeft: "10px" }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Container>
          </Box>

          <Box>
            <Container sx={{ display: "flex" }}>
              <LocationOnIcon
                sx={{
                  color: "#29A7DC",
                  position: "relative",
                  right: isMobile ? "5px" : "0px",
                  paddingTop: isMobile ? "2px" : "3px",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  paddingLeft: isMobile ? "0px" : "10px",
                  fontSize: "20px",
                }}
              >
                45-C, Street 14,D.H.A Phase 2,Karachi.
              </Typography>
            </Container>

            <Container sx={{ display: "flex", paddingTop: "25px" }}>
              <SettingsCellIcon
                sx={{
                  color: "#29A7DC",
                  position: "relative",
                  right: isMobile ? "4px" : "0px",
                  paddingTop: isMobile ? "3px" : "3px",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  paddingLeft: isMobile ? "0px" : "10px",
                  fontSize: "20px",
                }}
              >
                021 36101457, 021 38282230
              </Typography>
            </Container>

            <Container sx={{ display: "flex", paddingTop: "25px" }}>
              <MailIcon
                sx={{
                  color: "#29A7DC",
                  paddingTop: isMobile ? "3px" : "3px",
                  position: "relative",
                  right: isMobile ? "4px" : "0px",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  paddingLeft: isMobile ? "2px" : "10px",
                }}
              >
                info@tracker-iot.com
              </Typography>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
