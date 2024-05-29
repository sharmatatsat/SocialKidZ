import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const [mostLikedUser, setMostLikedUser] = useState(null);

  const fetchMostLikedUser = async () => {
    console.log("I am in fetchMostLikedUser");
    try {
      const response = await fetch("http://localhost:3001/users/most-liked-user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setMostLikedUser(data);
    } catch (error) {
      console.error("Error fetching most liked user:", error);
    }
  };

  useEffect(() => {
    fetchMostLikedUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(mostLikedUser);

  return (
    <WidgetWrapper sx={{ width: "80%", margin: "auto" }}>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem", textAlign: "center" }}
      >
        Top Rankings 🏆
      </Typography>
      {mostLikedUser?.length > 0 ? (
        <Box sx={{ textAlign: "center" }}>
          {mostLikedUser?.map((user, index) => (
            <Typography key={index} sx={{ mb: "0.8rem" }}>
              {index === 0 && '🥇'} {/* Add 🥇 for the top user */}
              {index === 1 && '🥈'} {/* Add 🥈 for the second user */}
              {index === 2 && '🥉'} {/* Add 🥉 for the third user */}
              <span>{`${user.firstName} ${user.lastName}`}</span>
              <span style={{ color: palette.primary.main, fontWeight: 700, marginLeft: '0.5rem' }}>{`(${user.likes} Likes)`}</span>
            </Typography>
          ))}
        </Box>
      ) : (
        <Typography color={palette.neutral.medium}>
          No most liked user found.
        </Typography>
      )}
    </WidgetWrapper>
  );
};

export default FriendListWidget;
