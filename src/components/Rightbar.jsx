import React from "react";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  List,
  Typography,
} from "@mui/material";
import { RecentConversation } from "./RecentConversation";
import { onlineFriends } from "./data/onlineFriends";
import { conversations } from "./data/conversations";

export function Rightbar() {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" sx={{ fontWeight: "300" }}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={8}
          sx={{
            display: "flex",
            justifyContent: "start",
            marginBottom: "20px",
            paddingLeft: "20px",
          }}
        >
          {onlineFriends.map((friend) => {
            return (
              <Badge
                color="success"
                variant="dot"
                badgeContent=" "
                overlap="circular"
              >
                <Avatar alt={friend.alt} src={friend.img} />
              </Badge>
            );
          })}
        </AvatarGroup>

        <Typography variant="h6" sx={{ fontWeight: "300" }}>
          Recent Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            marginTop: "0",
            paddingTop: "0",
          }}
        >
          {conversations.map((conv) => {
            return (
              <RecentConversation
                img={conv.img}
                name={conv.name}
                msg={conv.msg}
                who={conv.who}
              />
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
