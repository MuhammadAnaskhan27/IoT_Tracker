import React from "react";
import ContactNavbar from "./ContactNavbar";
import Box from "@mui/material/Box";
import { Container, TextField, Typography } from "@mui/material";
import Map from "../../assets/Mask Group 3.png";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import Footer from "../../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices

  return (
    <>
      <ContactNavbar />
      <Box
        sx={{
          height: isMobile ? "920px" : "820px",
          backgroundColor: "#92D3EF",
          p: isMobile ? 2 : 10,
        }}
      >
        <Container
          sx={{
            height: isMobile ? "900px" : "800px",
            backgroundColor: "white",
            borderRadius: "25px",
            width: isMobile ? "100%" : "100%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: isMobile ? "20px" : "35px",
              fontWeight: "bold",
              paddingTop: "40px",
              color: "#282461",
            }}
          >
            GET STARTED
          </Typography>

          <Container
            sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
          >
            <Container
              sx={{ position: "relative", right: isMobile ? "25px" : "40px" }}
            >
              <Typography
                sx={{
                  color: "#282461",
                  marginTop: "20px",
                  paddingBottom: "5px",
                  paddingLeft: isMobile ? "0px" : "10px",
                  position:'relative',
                  left:isMobile?'5px':'0px'
                
                }}
              >
                Name *
              </Typography>
              <TextField
                variant="outlined"
                sx={{
                  width: isMobile ? "120%" : "110%",
                  backgroundColor: "#F5F5F5",
                }}
              />
            </Container>
            <Container>
              <Typography
                sx={{
                  color: "#282461",
                  marginTop: "20px",
                  paddingBottom: "5px",
                  paddingLeft: isMobile ? "0px" : "0px",
                  position:'relative',
                  right:isMobile?'20px':'0px'
                }}
              >
                Contact Number *
              </Typography>
              <TextField
                variant="outlined"
                sx={{ width: isMobile?'118%':"110%", backgroundColor: "#F5F5F5",position:'relative',right:isMobile?'20px':'0px' }}
              />
            </Container>
          </Container>
          <Container>
            <Typography
              sx={{
                color: "#282461",
                marginTop: "20px",
                paddingBottom: "5px",
                paddingLeft: isMobile ? "0px" : "0px",
              }}
            >
              Email *
            </Typography>
            <TextField
              variant="outlined"
              sx={{
                position: "relative",
                right: isMobile ? "20px" : "40px",
                width: isMobile ? "105%" : "103.5%",
                backgroundColor: "#F5F5F5",
                marginLeft: isMobile ? "15px" : "25px",
              }}
            />
          </Container>
          <Container>
            <Typography
              sx={{
                color: "#282461",
                marginTop: "20px",
                paddingBottom: "5px",
                paddingLeft: isMobile ? "0px" : "0px",
              }}
            >
              Message *
            </Typography>
            <TextField
              multiline
              rows={14}
              variant="outlined"
              sx={{
                width: isMobile ? "105%" : "103.5%",
                backgroundColor: "#F5F5F5",
                marginLeft: isMobile ? "15px" : "25px",
                position: "relative",
                right: isMobile ? "20px" : "40px",
              }}
            />
          </Container>
          <Container sx={{ margin: "30px" }}>
            <Button
              variant="contained"
              sx={{
                width: isMobile ? "50%" : "25%",
                position: "relative",
                left: isMobile ? "50px" : "350px",
                backgroundColor: "#29A7DC",
                ":hover": {
                  backgroundColor: "#29A7DC",
                },
              }}
            >
              Submit
            </Button>
          </Container>
        </Container>
      </Box>

      <Box sx={{ marginTop: "80px" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "40px",
          }}
        >
          <Container>
            <Typography
              sx={{
                fontSize: "30px",
                color: "#282461",
                fontWeight: "bold",
                paddingLeft: "20px",
              }}
            >
              Tracker & IOT Pvt Ltd.
            </Typography>

            <Container sx={{ display: "flex", paddingTop: "20px" }}>
              <LocationOnIcon sx={{ color: "#29A7DC" }} />
              <Typography
                sx={{
                  color: "grey",
                  paddingLeft: "10px",
                  fontWeight: "bold",
                  wordSpacing: "2px",
                }}
              >
                45-C, Street 14,D.H.A Phase 2, Karachi.
              </Typography>
            </Container>

            <Container sx={{ display: "flex", paddingTop: "25px" }}>
              <SettingsCellIcon sx={{ color: "#29A7DC" }} />
              <Typography
                sx={{ color: "grey", paddingLeft: "10px", fontWeight: "bold" }}
              >
                021 36101457, 021 38282230
              </Typography>
            </Container>

            <Container sx={{ display: "flex", paddingTop: "25px" }}>
              <MailIcon sx={{ color: "#29A7DC" }} />
              <Typography
                sx={{ color: "grey", paddingLeft: "10px", fontWeight: "bold" }}
              >
                info@tracker-iot.com
              </Typography>
            </Container>
          </Container>

          <Container sx={{ paddingBottom: "50px" }}>
            <img
              style={{ width: isMobile ? "100%" : "600px", height: "350px" }}
              src={Map}
              alt=""
            />
          </Container>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
