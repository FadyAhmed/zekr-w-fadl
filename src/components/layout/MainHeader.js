import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import TemporaryDrawer from "./Drawer";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const logo = `${process.env.PUBLIC_URL}/assets/logo.png`;

  return (
    <Grid className={classes.mainHeader}>
      <Grid lg={2} sm={2} xs={0}></Grid>
      <Grid lg={10} xs={10} className={classes.tabs}>
        <NavLink
          className={classes.singleTab}
          activeClassName={classes.activeTab}
          to="/azkar"
        >
          الاذكار
        </NavLink>
        <NavLink
          className={classes.singleTab}
          activeClassName={classes.activeTab}
          to="/prayer-times"
        >
          مواقيت الصلاة
        </NavLink>
        <NavLink
          className={classes.singleTab}
          activeClassName={classes.activeTab}
          to="/quran"
        >
          القرآن الكريم
        </NavLink>
      </Grid>
      <Grid lg={2} xs={2} className={classes.logo}>
        <Grid lg={1} xs={1}>
          <NavLink to="/" className={classes.logo}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </Grid>
        <Grid lg={0} xs={0}>
          <TemporaryDrawer />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MainHeader;
