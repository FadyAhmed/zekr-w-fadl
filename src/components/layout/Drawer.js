import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import * as React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Drawer.module.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paper: {
    background: "brown",
    color: "white",
  },
});

export default function TemporaryDrawer() {
  const logo = `${process.env.PUBLIC_URL}/assets/logo.png`;

  const styles = useStyles();

  const [state, setState] = React.useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  const list = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List className={classes.list}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <NavLink
          className={classes.singleTab}
          activeClassName={classes.activeTab}
          to="/azkar"
        >
          الاذكار
        </NavLink>
        <Divider />
        <NavLink
          className={classes.singleTab}
          activeClassName={classes.activeTab}
          to="/prayer-times"
        >
          مواقيت الصلاة
        </NavLink>
        <Divider />
        <NavLink
          className={classes.singleTab}
          activeClassName={classes.activeTab}
          to="/quran"
        >
          القرآن الكريم
        </NavLink>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <div className={classes["drawer-icon"]}>
          <Button onClick={toggleDrawer()}>
            <MenuIcon sx={{ fontSize: 40, color: grey[50] }}></MenuIcon>
          </Button>
        </div>
        <Drawer
          classes={{ paper: styles.paper }}
          anchor="right"
          open={state}
          onClose={toggleDrawer()}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
