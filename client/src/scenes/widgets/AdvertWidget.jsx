import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ContestWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const { _id:userId } = useSelector((state) => state.user);

  const handleParticipate = () => {
    if (userId) {
      navigate(`/profile/${userId}`);
      navigate(0);
    } else {
      console.error("User ID is undefined.");
    }
  };

  return (
    <WidgetWrapper style={{ height: "300px" }}>
      <Typography color={dark} variant="h5" fontWeight="500" align="center" mb={2}>
        ONGOING CONTESTS
      </Typography>
      <div>
        {/* Box 1 */}
        <Typography color={dark}>1. Art Through Lens ! 📷</Typography>
        <Typography color={main} m="0.5rem 0">
          Photography.
        </Typography>
        {/* Participate Button under Contest 1 */}
        <Button
  variant="contained"
  color="primary"
  style={{
    width: "100px",
    marginBottom: "1rem",
    fontSize: "10px",
    height: "25px",
    "&:hover": {
      backgroundColor: "#828282", // Background color on hover
    },
  }}
  onClick={() => setShowModal(true)}
>
  Participate
</Button>
      </div>
      <div>
        {/* Box 2 */}
        <Typography color={dark} style={{ marginTop: "1rem" }}>2. Colorful Creations ! 🟢⭐🔷</Typography>
        <Typography color={main} m="0.5rem 0">
          Drawing.
        </Typography> 
        {/* Participate Button under Contest 2 */}
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100px", fontSize: "10px", height: "25px" }}
          onClick={() => setShowModal(true)}
        >
          Participate
        </Button>
      </div>

      {/* Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'black',
            color: 'white',
            border: '2px solid yellow',
            p: 4,
          }}
        >
          <Typography variant="h4" mb={2}>
            Contest Instructions
          </Typography>
          <Typography variant="body1" mb={1}>
            1. Posting obscene images is strictly prohibited.
          </Typography>
          <Typography variant="body1" mb={1}>
            2. Follow the contest rules and guidelines.
          </Typography>
          <Typography variant="body1" mb={1}>
            3. Be respectful to other participants.
          </Typography>
          <Typography variant="body1" mb={1}>
            4. Ensure your submissions are original creations.
          </Typography>
          <Typography variant="body1" mb={2}>
            5. Have fun and unleash your creativity!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleParticipate} style={{backgroundColor:"red"}}>
            Participate
          </Button>
        </Box>
      </Modal>
    </WidgetWrapper>
  );
};

export default ContestWidget;
