import { Box } from "@mui/material";
import React from "react";
import { Post } from "./Post";

import { postData } from "./data/postData";

export function Feed() {
  return (
    <Box p={2} flex={4}>
      {postData.map((post) => {
        return (
          <Post
            key={post.id}
            username={post.username}
            date={post.date}
            img={post.img}
            postText={post.postText}
            avtImg={post.avtImg}
          />
        );
      })}
    </Box>
  );
}
