import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  AppBar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { navigate } from "../utils/navigate";

export const NavigationBar = ({ title }: { title: string }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit" onClick={() => (location.href = "/")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box role="presentation" width={200}>
          <ListItem disablePadding>
            <ListItemButton
              selected={location.pathname.includes("landing.html")}
              onClick={() => navigate("/landing.html")}
            >
              <ListItemText primary="Landing Page" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname.includes("app1.html")}
                onClick={() => navigate("/app1.html")}
              >
                <ListItemText primary="App 1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname.includes("app2.html")}
                onClick={() => navigate("/app2.html")}
              >
                <ListItemText primary="App 2" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
