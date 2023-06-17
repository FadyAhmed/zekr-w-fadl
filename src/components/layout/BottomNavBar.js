import * as React from "react";
import { NavLink } from "react-router-dom";
import TextIcon from "../UI/TextIcon";
import classes from "./BottomNavBar.module.css";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Timeline from "@mui/icons-material/Timeline";

const BottomNavBar = (props) => {
  return (
    <div className={classes.bottomNavBar}>
      <NavLink
        className={classes.singleTab}
        activeClassName={classes.activeTab}
        to="/azkar"
      >
        <TextIcon label="الأذكار" icon={<Timeline />} />
      </NavLink>
      <NavLink
        className={classes.singleTab}
        activeClassName={classes.activeTab}
        to="/prayer-times"
      >
        <TextIcon label="الصلاة" icon={<AccessTimeIcon />} />
      </NavLink>
      <NavLink
        className={classes.singleTab}
        activeClassName={classes.activeTab}
        to="/quran"
      >
        <TextIcon label="القرآن" icon={<AssignmentIcon />} />
      </NavLink>
    </div>
  );
};

export default BottomNavBar;
