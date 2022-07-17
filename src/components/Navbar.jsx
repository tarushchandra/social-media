import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  color: "text.primary",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));

export function Navbar({ mode }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Sociooze.com
        </Typography>
        <ContactsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <SearchIcon color={mode === "light" ? "action" : "secondary"} />
          <InputBase
            color={mode === "light" ? "action" : "secondary"}
            placeholder="Search"
            fullWidth="true"
          ></InputBase>
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={() => setMenuIsOpen(true)}
            sx={{ height: "30px", width: "30px" }}
            alt="Remy Sharp"
            src="https://scontent.fknu2-1.fna.fbcdn.net/v/t1.6435-9/95838002_1648205495331639_4509137777245290496_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3RUro8YVRTsAX9svuwT&_nc_ht=scontent.fknu2-1.fna&oh=00_AT_rFe8ivNSj7ieVFLyYX61LsFxtlVAp__3Etiq-fyLYcg&oe=62E5CB6B"
          />
        </Icons>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolBar>
    </AppBar>
  );
}
