import React from "react";
import AboutBar from "../AboutUs/AboutBar";
import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import Ceo from "../../assets/Group 94.png";
import Footer from "../../components/Footer";
const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices

  return (
    <>
      <AboutBar />
      <Box
        sx={{ marginTop: isMobile ? "50px" : "200px", paddingBottom: "60px" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            color: "#282461",
            fontWeight: "bold",
          }}
        >
          CEO MESSAGE
        </Typography>

        <Container
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
        >
          <Container sx={{ paddingTop: "35px" }}>
            <Typography sx={{ color: "#5A5A5A" }}>
              Indeed it is a matter of great satisfaction that by the grace of{" "}
              <br />
              Almighty Allah (SWT), Tracker & IOT over a period of time has{" "}
              <br />
              shown tremendous progress in the field of vehicle tracking. <br />
              Induction of verity of state of the art tracking devices, chosen{" "}
              <br />
              from all over the world has put the Tracker & IOT on the roads of{" "}
              <br />
              technologically advanced vehicle tracking system. <br />
            </Typography>
            <Typography sx={{ paddingTop: "15px", color: "#5A5A5A" }}>
              Today we are more focused, streamlined, and more committed <br />
              than ever to true innovation. We are proud to be part of the{" "}
              <br />
              technology revolutionizing era providing our clients with the most{" "}
              <br />
              innovative and creative solutions in this field.
            </Typography>
            <Typography sx={{ paddingTop: "15px", color: "#5A5A5A" }}>
              Our 24/7 hours efficient customer services has certainly fetched{" "}
              <br />
              maximum attention and sympathies of our valued customers <br />
              towards Tracker & IOT,
            </Typography>
            <Typography sx={{ paddingTop: "15px", color: "#5A5A5A" }}>
              Thousands of vehicles on the panel of Tracker & IOT speak <br />
              volumes about the trust and satisfaction of our valued clients on{" "}
              <br />
              the overall efficiency of this prestigious organization
            </Typography>
            <Typography sx={{ paddingTop: "15px", color: "#5A5A5A" }}>
              We bow our heads before Almighty Allah (SWT) to bless us with{" "}
              <br />
              enough wisdom and strength to make Tracker & IOT more and <br />
              more progressive Ameen.
            </Typography>
            <Typography sx={{ paddingTop: "15px", color: "#5A5A5A" }}>
              I along with the entire team invites you to the world of Tracker &{" "}
              <br />
              IOT. I also hope and wish a prosperous future for Tracker & IOT.
            </Typography>
            <Typography sx={{ paddingTop: "20px", color: "#5A5A5A" }}>
              Sincerely.
            </Typography>
          </Container>
          <Container sx={{ paddingTop: "30px" }}>
            <img style={{ width: "100%", height: "620px" }} src={Ceo} alt="" />
          </Container>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default About;
