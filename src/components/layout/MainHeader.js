import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import Grid from "@material-ui/core/Grid";

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
          to="/salat"
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
        <NavLink to="/" className={classes.logo}>
          <img src={logo} alt="Logo" />
        </NavLink>
      </Grid>
    </Grid>
  );
};
export default MainHeader;
