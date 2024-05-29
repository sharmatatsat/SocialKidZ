import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import bg5 from "./bg5.jpg"; // Import the background image

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  
  const pageStyles = {
    backgroundImage: `url(${bg5})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <Box style={pageStyles}>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialKidZ
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to SocialKidZ, the Social Media for kids!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
