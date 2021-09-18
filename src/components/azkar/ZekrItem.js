import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import classes from "./ZekrItem.module.css";

const ZekrItem = (props) => {

  return (
    <Grid item xs={6} sm={4} md={3} title={props.title}>
      <NavLink to={`/azkar/exact-zekr/${props.id}`} className={classes.title}>
        <div className={classes.item}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/${props.image}`}
            alt={props.title}
          />
          <div className={classes.title}>{props.title}</div>
        </div>
      </NavLink>
    </Grid>
  );
};
export default ZekrItem;
