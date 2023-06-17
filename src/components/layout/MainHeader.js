import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const logo = `${process.env.PUBLIC_URL}/assets/logo.png`;

  return (
    <div className={classes.mainHeader}>
      <NavLink to="/" className={classes.logo}>
        <img src={logo} alt="Logo" />
      </NavLink>
    </div>
  );
};
export default MainHeader;

// Old header

// <Grid className={classes.mainHeader}>
//   {/* margin */}
//   <Grid lg={2} sm={2} xs={0}></Grid>
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     {/* links */}
//     <Grid lg={10} xs={10} className={classes.tabs}>
//       <NavLink
//         className={({ isActive, isPending }) =>
//           isActive ? classes.activeTab : classes.singleTab
//         }
//         to="/azkar"
//       >
//         الاذكار
//       </NavLink>
//       <NavLink
//         className={({ isActive, isPending }) =>
//           isActive ? classes.activeTab : classes.singleTab
//         }
//         to="/prayer-times"
//       >
//         مواقيت الصلاة
//       </NavLink>
//       <NavLink
//         className={({ isActive, isPending }) =>
//           isActive ? classes.activeTab : classes.singleTab
//         }
//         to="/quran"
//       >
//         القرآن الكريم
//       </NavLink>
//     </Grid>
//     {/* logo */}

//     <NavLink to="/" className={classes.logo}>
//       <img src={logo} alt="Logo" />
//     </NavLink>
//     {/* <Grid lg={0} xs={0}>
//       <TemporaryDrawer />
//     </Grid> */}
//   </div>
// </Grid>
