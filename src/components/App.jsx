import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";
import { Rightbar } from "./Rightbar";
import { Navbar } from "./Navbar";
import { CreatePost } from "./CreatePost";

export function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode}></Navbar>
          <Stack direction="row" gap={2}>
            <Sidebar mode={mode} setMode={setMode}></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
          </Stack>
          <CreatePost />
        </Box>
      </ThemeProvider>
    </>
  );
}
