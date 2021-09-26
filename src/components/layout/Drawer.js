import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import TimelineIcon from "@mui/icons-material/Timeline";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import * as Colors from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Drawer.module.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  // mob

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),

  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props) {
  const logo = `${process.env.PUBLIC_URL}/assets/logo.png`;
  const location = useLocation();
  console.log(location.pathname);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className={classes.hide}
        position="fixed"
        open={open}
        sx={{ boxShadow: "none", height: "64px" }}
      >
        <Toolbar className={classes.appBar}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: Colors.grey[900],
              marginLeft: "10px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div className={classes.logo}>
              <img src={logo} alt="Logo" />
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" style={{ width: "100%" }}>
        <DrawerHeader className={classes.hide} />
        <div>{props.children}</div>
      </Box>

      <Drawer
        variant="permanent"
        open={open}
        anchor="right"
        className={classes.hide}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              title: "الأذكار",
              to: "/azkar",
              icon: TimelineIcon,
            },
            {
              title: "الصلاة",
              to: "/prayer-times",
              icon: AccessTimeIcon,
            },
            {
              title: "القرآن",
              to: "/quran",
              icon: AssignmentIcon,
            },
          ].map((link) => (
            <NavLink
              to={link.to}
              className={classes.singleTab}
              activeClassName={classes.activeTab}
            >
              <ListItem button key={link.title} sx={{ direction: "rtl" }}>
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === link.to
                        ? Colors.green[300]
                        : Colors.grey,
                  }}
                >
                  {<link.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={link.title}
                  sx={{ textAlign: "start" }}
                />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
