import React from "react";
import Container from "@mui/material/Container";
import { Typography, Box, useMediaQuery } from "@mui/material";
import Footer from "../../components/Footer";
import ServiceBar from "./ServiceBar";

const Services = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices
  return (
    <>
      <ServiceBar />
      <Box
        sx={{
          marginTop: "20px",
          margin: isMobile ? "20px" : "100px",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Container
          sx={{
            height: isMobile ? "100%" : "100%",
            border: "1px solid grey",
            borderRadius: "25px",
            marginBottom: "30px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#282461",
              fontSize: isMobile ? "25px" : "30px",
              fontWeight: "bold",
            }}
          >
            Vehicle Tracking
          </Typography>
          <Typography
            sx={{
              color: "#5A5A5A",
              paddingTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Tracker & IoT offer the widest coverage across Pakistan, in
            real-time. Track your car/vehicle accross iOs, Android and the Web.
            We provide complete solutions, include both Software and Hardware
            solutions for real-time GPS and monitoring.
          </Typography>
        </Container>

        <Container
          sx={{
            height: isMobile ? "100%" : "100%",
            border: "1px solid grey",
            borderRadius: "25px",
            marginBottom: "30px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#282461",
              fontSize: isMobile ? "22px" : "30px",
              fontWeight: "bold",
            }}
          >
            Fleet Management
          </Typography>
          <Typography
            sx={{
              color: "#5A5A5A",
              paddingTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            We provide Fleet Management Solution with Latest Mobile Applications
            and Web Tracking. GPS tracking and fleet management solutions that
            significantly help increase productivity, cut costs, improve safety
            and service. With our Fleet tracking solutions,you will receive up
            to date Information on all vour vehicles across the Pakistan.
          </Typography>
        </Container>

        <Container
          sx={{
            padding: "20px",
            height: isMobile ? "100%" : "100%",
            border: "1px solid grey",
            borderRadius: "25px",
            marginBottom: "30px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#282461",
              fontSize: isMobile ? "22px" : "30px",
              fontWeight: "bold",
            }}
          >
            Software Development
          </Typography>
          <Typography
            sx={{
              color: "#5A5A5A",
              paddingTop: "10px",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            We believe that leveraging effective software solutions for business
            is critical in a competitive market.With the right software,you can
            streamline work loads,improve business productivity,reduce costs,and
            solve numerous business challenges. Custom business software that is
            expertly developed for your needs is something that can make the
            difference between taking a leap forward or falling behind your
            competitors.
          </Typography>
        </Container>

        <Container
          sx={{
            padding: "20px",
            height: isMobile ? "100%" : "100%",
            border: "1px solid grey",
            borderRadius: "25px",
            marginBottom: "30px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#282461",
              fontSize: isMobile ? "22px" : "30px",
              fontWeight: "bold",
            }}
          >
            Web Development
          </Typography>
          <Typography
            sx={{
              color: "#5A5A5A",
              paddingTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            We provides custom web development services. Web development is our
            core competency and we have an established approach to working with
            customers around the globe. If you need a website that achieves your
            business goals, we can design, build, test, and ensure it works
            perfectly on all devices.
          </Typography>
        </Container>

        <Container
          sx={{
            padding: "20px",
            height: isMobile ? "100%" : "100%",
            border: "1px solid grey",
            borderRadius: "25px",
            marginBottom: "30px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#282461",
              fontSize: isMobile ? "22px" : "30px",
              fontWeight: "bold",
            }}
          >
            Application Development
          </Typography>
          <Typography
            sx={{
              color: "#5A5A5A",
              paddingTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Demand associated with various mobile apps is escalating
            consistently in almost every type of business. For this, our Mobile
            App Development team acts as an accelerator to design and develop
            innovative apps. We provide IOS and Android app development
            services. Our mobile team develops sophisticated back-end systems,
            and creates stunning user friendly front-end interfaces.
          </Typography>
        </Container>

        <Box
          sx={{
            margin: isMobile ? "0px" : "50px",
            width: isMobile ? "300px" : "100%",
            position: "relative",
            right: isMobile ? "0px" : "50px",
            left: isMobile ? "10px" : "",
          }}
        >
          <Container
            sx={{
              border: "5px solid #282461",
              marginTop: "50px",
              backgroundColor: "#2BAAE1",
              width: isMobile ? "100%" : "100%",
              height: isMobile ? "100%" : "100%",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: isMobile ? "15px" : "35px",
                color: "white",
                margin: isMobile ? "10px" : "30px",
                fontWeight: "bold",
              }}
            >
              FEEL FREE TO CALL 24/7
            </Typography>
            <Container
              sx={{
                display: "flex",
                paddingBottom: "30px",
                flexDirection: isMobile ? "column" : "row",
                gap: "20px",
              }}
            >
              <Container
                sx={{
                  border: "2px solid #282461",
                  borderRadius: "15px",
                  width: isMobile ? "100%" : "250px",
                  height: "40px",
                  backgroundColor: "white",
                  position: "relative",
                  left: isMobile ? "0px" : "80px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "5px",
                    color: "#282461",
                    fontWeight: "bold",
                  }}
                >
                  021-36101457
                </Typography>
              </Container>

              <Container
                sx={{
                  border: "2px solid #282461",
                  borderRadius: "15px",
                  width: isMobile ? "100%" : "250px",
                  height: "40px",
                  backgroundColor: "white",
                  position: "relative",
                  right: isMobile ? "0px" : "80px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "5px",
                    color: "#282461",
                    fontWeight: "bold",
                  }}
                >
                  021-38282230
                </Typography>
              </Container>
            </Container>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Services;
