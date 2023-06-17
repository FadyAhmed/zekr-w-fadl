import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import classes from "./ZekrItem.module.css";

const ZekrItem = (props) => {
  return (
    <Grid item xs={6} sm={4} md={3} title={props.title}>
      <Link to={`exact-zekr/${props.id}`} className={classes.title}>
        <div className={classes.item}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/${props.image}`}
            alt={props.title}
          />
          <div className={classes.title}>{props.title}</div>
        </div>
      </Link>
    </Grid>
  );
};

export default ZekrItem;
