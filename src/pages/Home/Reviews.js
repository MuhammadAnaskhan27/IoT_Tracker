// import { Typography,Box, Container ,Skeleton} from '@mui/material'
// import React from 'react'

// const Reviews = () => {
//   return (
//     <>
//     <Box sx={{marginTop:'50px'}} >
//       <Typography sx={{textAlign:'center',fontSize:"30px",fontWeight:'bold',color:'#282461',marginBottom:'30px'}}>
//         Customer's Reviews
//       </Typography>

//       <Container sx={{border:'1px solid black',height:'300px',width:'70%',marginBottom:"80px",}}>
//         <Container sx={{display:'flex'}}>
//       <Skeleton variant="circular" width={100} height={100} sx={{backgroundColor:'white',border:'3px solid #29A7DC',marginTop:'20px',marginLeft:'50px'}} />
//       <Typography sx={{marginTop:"50px",marginLeft:'20px',fontSize:'25px',fontWeight:'bold',color:'#282461'}} >
//         Ali Asfand
//         <Typography sx={{fontWeight:'bold',color:'black'}}>
//           Principal, Fervour Schooling System.
//         </Typography>
//       </Typography>
//             </Container>
//         <Typography sx={{textAlign:'center',margin:'30px',fontSize:'14px',color:'grey'}}>
//           "Business more Dynamic,Efficient,Safer and Smarter, Connecting Assets for Real-Time- <br />
//           Tracking, Easily monitor and manage all your sites and activites from a central <br />
//           Reasons for choosing vehicle tracking system is Fleet Management Solution"
//         </Typography>
//       </Container>
//     </Box>
//     </>
//   )
// }

// export default Reviews

import {
  Typography,
  Box,
  Container,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const Reviews = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Media query for mobile devices

  return (
    <>
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#282461",
            marginBottom: "30px",
          }}
        >
          Customer's Reviews
        </Typography>

        <Container
          sx={{
            border: isMobile ? "none" : "1px solid black",
            height: "auto", // Remove fixed height for responsiveness
            width: "100%", // Adjust width for full-width responsiveness
            marginBottom: "80px",
            padding: "20px", // Add some padding for spacing
            "@media (max-width: 600px)": {
              padding: "10px", // Reduce padding for small screens
            },
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column", // Stack elements on mobile
              alignItems: "center", // Center elements on mobile
            }}
          >
            <Skeleton
              variant="circular"
              width={100}
              height={100}
              sx={{
                backgroundColor: "white",
                border: "3px solid #29A7DC",
                marginTop: "20px",
              }}
            />
            <Typography
              sx={{
                marginTop: "20px", // Reduce margin for spacing
                textAlign: "center", // Center text on mobile
                fontSize: "25px",
                fontWeight: "bold",
                color: "#282461",
              }}
            >
              Ali Asfand
              <Typography sx={{ fontWeight: "bold", color: "black" }}>
                Principal, Fervour Schooling System.
              </Typography>
            </Typography>
          </Container>
          <Typography
            sx={{
              textAlign: "center",
              margin: "20px 0", // Reduce margin for spacing
              fontSize: "14px",
              color: "grey",
              whiteSpace: "pre-line", // Preserve line breaks on small screens
            }}
          >
            "Business more Dynamic, Efficient, Safer and Smarter, Connecting
            Assets for Real-Time- <br />
            Tracking, Easily monitor and manage all your sites and activities
            from a central <br />
            Reasons for choosing the vehicle tracking system is Fleet Management
            Solution"
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Reviews;
