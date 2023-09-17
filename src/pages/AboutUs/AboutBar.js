import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/tracker-logo-2.png";
import { NavLink } from "react-router-dom";
import "../../pages/Services/ServiceBar.css";
import "../../pages/ContactUs/ContactNavbar.css";
import "../AboutUs/AboutBar.css";
import Settings from "../../assets/Path 18.png";
import Certified from "../../assets/Group 12.png";
import Monitoring from "../../assets/Path 1.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const pages = ["Home", "Services", "About", "Contact"];
function ResponsiveAppBar() {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          height: isMobile ? "1460px" : "820px",
          width: isMobile ? "100%" : "100%",
        }}
        className="container-bg"
      >
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            noWrap
            component="div"
            color="black"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img style={{height:'50px',paddingLeft:'30px',paddingTop:'10px'}} src={Logo} alt="" />
          </Typography>

          {/*Drawer - small screen  */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* Menu triple bar */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{ width: isMobile ? "1000px" : "" }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "black" : "#29A7DC",
                          textDecoration: "none",
                        };
                      }}
                      to={`/${page}`}
                    >
                      {page}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
              <Button
                variant="outlined"
                sx={{
                  margin: "10px",
                  borderRadius: "25px",
                  border: "1px solid #29A7DC",
                  color: "#29A7DC",
                }}
              >
                Login
              </Button>
            </Menu>
          </Box>

          {/* LOGO - small screen */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={Logo} alt="" />
          </Typography>

          {/* ABOUT, PROJECTS, CONTACT - full screen */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#29A7DC",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "white" : "#29A7DC",
                      textDecoration: "none",
                    };
                  }}
                  to={`/${page}`}
                >
                  {page}
                </NavLink>
              </Button>
            ))}
            <Button
              variant="outlined"
              sx={{
                margin: "10px",
                borderRadius: "25px",
                border: "1px solid #29A7DC",
                color: "#29A7DC",
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
        <Typography
          sx={{
            paddingTop: isMobile ? "10px" : "50px",
            marginLeft: isMobile ? "20px" : "60px",
            fontSize: isMobile ? "25px" : "35px",
            fontWeight: "bold",
          }}
        >
          About Us
          <Typography
            sx={{
              marginTop: "10px",
              marginLeft: isMobile ? "0px" : "5px",
              wordSpacing: isMobile ? "1px" : "3px",
              lineHeight: isMobile ? "1.5" : "2",
              fontSize: isMobile ? "12px" : "",
            }}
          >
            Tracker & IoT is an emerging company with a tremendous experienced
            team. Tracker & lot has a scalable GPS tracking <br />
            management platform to help you track and maintain your vehicles and
            assets. Our GPS tracking solutions enable <br />
            companies to identify and address the concerns that come with
            managing their vehicles and movable assets. Tracker & loT's <br />
            state-of-the-art telematics provides App & web-based solutions to
            enhance productivity with smart information gathering <br />
            and real-time data feeds, all with the goal of improving workforce
            performance and behavior. <br />
            Best of all, these services are all easily Integrated into your
            fleet with the help of our talented team of knowledgeable <br />
            support staff. <br />
            Our World Class Tracking System is highly expedient especially among
            Corporate Segment and Individuals as they are quite <br />
            efficient. Tracker & lot is proud to say that we have made vehicle
            tracking a lot more easier than ever before. We've <br />
            ascertained our self as the pioneer in the Industry of Tracking and
            Navigation Technology worldwide by introducing most <br />
            innovative and state of the art technology in Tracking Service
            Industry. <br />
            Tracker & lot offers an easy to learn and manage tracking platform
            that assists fleet managers in creating more efficient <br />
            operations. Tracker & loT's cost effective solutions provide visual
            vehicle location systems, engine diagnostics for better <br />
            vehicle maintenance, economical routing for lower fuel consumption
            and easy speed and mileage management. Our goal is <br />
            to give fleet managers the knowledge needed to reduce operating
            expenses and maximize productivity.
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            margin: isMobile ? "0px" : "50px",
            flexDirection: isMobile ? "column" : "row",
            gap: "30px",
          }}
        >
          <Container
            style={{
              clipPath:
                "polygon(75% 0%, 100% 50%, 75% 100%, 0 100%, 15% 50%, 0% 0%)",
            }}
            sx={{
              height: "250px",
              width: isMobile ? "300px" : "400px",
              backgroundColor: "#2BAAE1",
              flex: "1",
              marginTop: isMobile ? "20px" : "0px",
            }}
          >
            <img
              style={{
                margin: isMobile ? "30px" : "50px",
                paddingLeft: "50px",
                height: "80px",
                marginBottom: isMobile ? "5px" : "15px",
              }}
              src={Settings}
              alt=""
            />
            <Typography
              sx={{
                paddingRight: "20px",
                textAlign: "center",
                color: "#282461",
                fontSize: "20px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              Free Installation
            </Typography>
          </Container>

          <Container
            style={{
              clipPath:
                "polygon(75% 0%, 100% 50%, 75% 100%, 0 100%, 15% 50%, 0% 0%)",
            }}
            sx={{
              height: "250px",
              width: isMobile ? "300px" : "400px",
              border: "1px solid black",
              backgroundColor: "#2BAAE1",
              flex: "1",
            }}
          >
            <img
              style={{
                margin: isMobile ? "30px" : "50px",
                paddingLeft: "50px",
                height: "80px",
                marginBottom: isMobile ? "5px" : "15px",
              }}
              src={Certified}
              alt=""
            />
            <Typography
              sx={{
                paddingRight: "20px",
                textAlign: "center",
                color: "#282461",
                fontSize: "20px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              Certified Hardware
            </Typography>
          </Container>

          <Container
            style={{
              clipPath:
                "polygon(75% 0%, 100% 50%, 75% 100%, 0 100%, 15% 50%, 0% 0%)",
            }}
            sx={{
              height: "250px",
              width: isMobile ? "300px" : "400px",
              border: "1px solid black",
              backgroundColor: "#2BAAE1",
              flex: "1",
            }}
          >
            <img
              style={{
                margin: isMobile ? "30px" : "50px",
                paddingLeft: "50px",
                height: "80px",
                marginBottom: isMobile ? "5px" : "15px",
              }}
              src={Monitoring}
              alt=""
            />
            <Typography
              sx={{
                textAlign: "center",
                color: "#282461",
                fontSize: "20px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              24/7 Control Room <br /> Monitoring
            </Typography>
          </Container>
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
