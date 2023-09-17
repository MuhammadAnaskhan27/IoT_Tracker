import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import React from "react";
import deviceImg from "../../assets/tracker-screen.png";

const Features = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices

  return (
    <>
      <Box
        sx={{
          margin: isMobile ? "30px" : "50px",
          border: isMobile ? "1px solid black" : "none",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#282461",
            paddingTop: isMobile ? "10px" : "",
          }}
        >
          FEATURES
        </Typography>

        <Box
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
        >
          {/* first column */}
          <Container sx={{}}>
            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Real Time Live Tracking
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              View exact location of the vehicle 24 × 7 anytime anywhere via web
              application or android/IOS mobile app.
            </Typography>

            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Live Dashboard View
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Stay aware all the time about what your driver is doing and how he
              is behaving. By using this feature, fleet managers will be able to
              see live view on each of their vehicle's location, driver status,
              geo- <br /> fencing and traffic updates.
            </Typography>

            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Vehicle Arrival Alert
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Keep schedule running smoothly by receiving confirmation whenever
              a vehicle arrives at its destination. Know exactly <br /> when the
              vehicle arrived at a specific destination and how long it stayed
              there.
            </Typography>

            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Hard Braking & Acceleration
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              When someone drives roughly and do hard breaking or hard
              accelerator, owner gets notified.
            </Typography>

            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Speed Alert
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Find out instantly when a driver has exceeded a certain speed.
            </Typography>

            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Anti-Theft Sensor
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Notification alert when someone try to <br /> even touch the
              hidden device.
            </Typography>
          </Container>

          {/* second column */}
          <Container>
            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Start/Stop
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Keep an eye on times when vehicles are <br /> not active and keep
              track of how many <br /> miles the vehicle covered between each{" "}
              <br /> start and stop.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "2px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Replay Route
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Replay map that allows users to see a <br />
              "bread crumb" trail of a vehicle's route. <br />
              Fleet managers can see the exact path the driver took and the
              approximate speed of the vehicle.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "35px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Fuel Monitoring
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Fuel monitoring feature allows owners/ <br /> fleet managers to
              get real-time updates on <br /> their mobiles about the level of
              fuel and <br /> consumption made by different drivers and <br />{" "}
              vehicles according to their distance <br /> traveled and fuel
              consumed.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "5px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Accident Crash Detection
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Get alerted when car hits somewhere <br /> hardly or crash into a
              ditch.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "33px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Voice Surveillance
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Listen all voices in vehicle with real-time voice monitoring
            </Typography>

            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Temperature & Humidity Sensors
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Monitor temperature & humidity in vehicle and get alerts when
              high.
            </Typography>
          </Container>

          {/* third column */}
          <Container>
            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Speed Dashboard
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Collect individual instances of speeding <br /> into a report that
              clarifies how your <br /> vehicles are being handled on the road.
            </Typography>

            <Typography
              sx={{ marginTop: "15px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Geo Fencing
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              System will send notification to user when vehicle cross
              predefined city boundaries. User can get custom defined boundaries{" "}
              <br /> like home, office, college, University etc.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "15px" : "55px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Route Deviation
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              With a geo-fence enabled GPS solution, owners/fleet managers can
              get instant <br /> alert via SMS or email whenever a driver <br />{" "}
              goes to a wrong direction or deviates from <br /> the pre-defined
              routes.
            </Typography>

            <Typography
              sx={{ marginTop: "24px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Engine Kill
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Option to remotely turn off the engine if <br /> user feels
              unauthorized usage. Engine cannot be started until user send the{" "}
              <br /> resume command.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "0px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Safety Alarms
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Warning alerts when someone try to <br /> tamper battery or
              device.
            </Typography>

            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Vehicle Activity Report
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              A comprehensive summary of daily activity <br />
              - combines all information into a single <br /> report
            </Typography>
          </Container>

          {/* fourth column */}
          <Container>
            <Typography
              sx={{ marginTop: "20px", color: "#29A7DC", fontWeight: "bold" }}
            >
              Frequent Live Updates
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              To keep you and customers constantly informed of the location of
              your assets, you can receive GPS updates as frequently as every
              fifteen minutes.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "2px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Idle Time Alert
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Receive an alert whenever a vehicle is left idling for more than a
              specified amount of time. Monitor what date and time a vehicle
              began idling, as well as the location and duration of the event.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "30px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Low Battery Alarm
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              System may also detect low battery and <br /> will send a low
              battery warning when the device's battery goes under 20%.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "57px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Distance Summary Report
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Total Distance Travelled Report on daily/ weekly/monthly basis
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "35px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              Towing Detection
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              Alert the owner when someone try to tow vehicle in ignition off
              state.
            </Typography>

            <Typography
              sx={{
                marginTop: isMobile ? "10px" : "25px",
                color: "#29A7DC",
                fontWeight: "bold",
              }}
            >
              SMS/Email Integration
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#282461" }}>
              All the notifications may be sent through SMS/Email to users'
              registered phone numbers/email addresses.
            </Typography>
          </Container>
        </Box>
      </Box>

      <Box sx={{ marginTop: "50px", backgroundColor: "#282461" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            paddingTop: "20px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Most advanced and intuitive telematic solution
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              width: isMobile ? "100%" : "75%",
            }}
            height="370px"
            src={deviceImg}
            alt=""
          />
        </Container>
      </Box>
    </>
  );
};

export default Features;
