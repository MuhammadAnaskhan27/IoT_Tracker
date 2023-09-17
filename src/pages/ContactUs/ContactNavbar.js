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
        sx={{ height: "400px", width: "100%" }}
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
            paddingTop: isMobile ? "15px" : "50px",
            marginLeft: isMobile ? "20px" : "60px",
            fontSize: isMobile ? "25px" : "35px",
            fontWeight: "bold",
          }}
        >
          Contact Us
          <Typography
            sx={{
              marginTop: "10px",
              marginLeft: isMobile ? "5px" : "10px",
              wordSpacing: isMobile ? "1px" : "3px",
              lineHeight: isMobile ? "1.5" : "2",
            }}
          >
            A descriptive paragraph that tells clients <br />
            how good you are and proves that you are <br />
            the best choice that they've made. This <br />
            paragraph is also for those who are <br />
            looking out for a reliable car repair.
          </Typography>
        </Typography>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
