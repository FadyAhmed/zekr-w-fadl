import { Fragment } from "react";
import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";
import BottomNavBar from "./BottomNavBar";
import MiniDrawer from "./Drawer";

const Layout = (props) => {
  return (
    <Fragment>
      <BottomNavBar />
      {/* <div className={classes.topMargin}></div> */}
      <MiniDrawer>{props.children}</MiniDrawer>
      <div className={classes.bottomMargin}></div>
    </Fragment>
  );
};

export default Layout;
