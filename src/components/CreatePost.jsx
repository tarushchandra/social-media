import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [postText, setPostText] = useState("");

  return (
    <div style={{ position: "fixed", bottom: "50px", left: "50px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        Create Post
      </Button>
      <StyledModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            height: "280px",
            width: "400px",
            backgroundColor: "background.default",
            borderRadius: "40px",
            color: "text.primary",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "gray",
              fontWeight: "500",
              marginTop: "10px",
            }}
            variant="h5"
          >
            Create Post
          </Typography>
          <Divider />
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Avatar src="https://scontent.fknu2-1.fna.fbcdn.net/v/t1.6435-9/95838002_1648205495331639_4509137777245290496_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3RUro8YVRTsAX9svuwT&_nc_ht=scontent.fknu2-1.fna&oh=00_AT_rFe8ivNSj7ieVFLyYX61LsFxtlVAp__3Etiq-fyLYcg&oe=62E5CB6B"></Avatar>
            <Typography fontWeight={500}>Tarush Chandra</Typography>
          </Box>
          <TextField
            sx={{
              display: "flex",
              width: "80%",
              marginLeft: "38px",
              marginTop: "5px",
            }}
            id="standard-multiline-static"
            placeholder="What's in your Mind?"
            multiline
            rows={4}
            variant="standard"
            onChange={(e) => setPostText(e.target.value)}
            value={postText}
          />
          <Button
            variant="contained"
            sx={{ width: "88%", marginTop: "20px", marginLeft: "20px" }}
            onClick={() => setPostText("")}
          >
            Post
          </Button>
        </Box>
      </StyledModal>
    </div>
  );
}
