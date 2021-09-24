import { Fragment } from "react";
import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";
import BottomNavBar from "./BottomNavBar";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <BottomNavBar />
      <div className={classes.topMargin}></div>
      <main>{props.children}</main>
      <div className={classes.bottomMargin}></div>
    </Fragment>
  );
};

export default Layout;
