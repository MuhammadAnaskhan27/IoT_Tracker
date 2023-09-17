import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import bannerImg from "../../assets/companybanner.png";
import "../../pages/Home/Home.css";
import backgroundImg from "../../assets/banner2.png";
import Navbar from "../../pages/Home/Navbar";
import Features from "./Features";
import Footer from "../../components/Footer";
import Reviews from "./Reviews";
import Globe from "../../assets/Path 34.png";
import Circuit from "../../assets/Group 32.png";
import Truck from "../../assets/Path 39.png";
import Customers from "../../assets/Group 33.png";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#282461",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <img className="banner-img" src={bannerImg} alt="" />
        </Container>
        <Container sx={{ marginTop: "20px" }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "white",
              fontSize: isMobile ? "22px" : "14px",
              paddingTop: isMobile ? "30px" : "0px",
            }}
          >
            Tracker & IoT is a leading company in the field of tracking.We work
            24/7 to help you manage your vehicle without any worries. <br />
            Whether you have a small fleet of vehicles or a huge armada of
            trucks, heavy vehicles, or other assets, Tracker & IoT will surely
            help you to <br />
            manage and maintain them as efficiently as possible.
          </Typography>
        </Container>

        <Box
          sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "140px",
            marginTop: "50px",
            paddingBottom: "20px",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "30px",
              flexDirection: isMobile ? "column" : "row",
              gap: "20px",
            }}
          >
            <Container
              sx={{
                backgroundColor: "white",
                height: "190px",
                width: "250px",
                borderRadius: "25px",
                padding: "20px",
              }}
            >
              <img
                style={{ height: "60px", marginLeft: "70px" }}
                src={Globe}
                alt=""
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "#282461",
                  fontWeight: "bold",
                }}
              >
                20+
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#29A7DC",
                  fontWeight: "bold",
                }}
              >
                Worldwide Partners
              </Typography>
            </Container>

            <Container
              sx={{
                backgroundColor: "white",
                height: "190px",
                width: "250px",
                borderRadius: "25px",
                padding: "20px",
              }}
            >
              <img
                style={{ height: "60px", marginLeft: "70px" }}
                src={Circuit}
                alt=""
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "#282461",
                  fontWeight: "bold",
                }}
              >
                100+
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#29A7DC",
                  fontWeight: "bold",
                }}
              >
                Devices Integrated
              </Typography>
            </Container>

            <Container
              sx={{
                backgroundColor: "white",
                height: "190px",
                width: "250px",
                borderRadius: "25px",
                padding: "20px",
              }}
            >
              <img
                src={Truck}
                style={{ height: "60px", marginLeft: "60px" }}
                alt=""
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "#282461",
                  fontWeight: "bold",
                }}
              >
                1000+
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#29A7DC",
                  fontWeight: "bold",
                }}
              >
                Connected Assets
              </Typography>
            </Container>

            <Container
              sx={{
                backgroundColor: "white",
                height: "190px",
                width: "250px",
                borderRadius: "25px",
                padding: "20px",
              }}
            >
              <img
                src={Customers}
                style={{ height: "60px", marginLeft: "65px" }}
                alt=""
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "#282461",
                  fontWeight: "bold",
                }}
              >
                500+
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#29A7DC",
                  fontWeight: "bold",
                }}
              >
                Satisfied Customers
              </Typography>
            </Container>
          </Container>
        </Box>
      </Box>

      <Features />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
