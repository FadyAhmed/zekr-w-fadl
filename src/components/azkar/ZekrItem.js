import Grid from '@mui/material/Grid';
import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";
import ExactZekr from "../../pages/ExcactZekr";
import classes from "./ZekrItem.module.css";

const ZekrItem = (props) => {
  const match = useRouteMatch();

  return (
    <Grid item xs={4} sm={4} md={3} title={props.title}>
      <NavLink
        to={`${match.url}/exact-zekr/${props.id}`}
        className={classes.title}
      >
        <div className={classes.item}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/${props.image}`}
            alt={props.title}
          />
          <div className={classes.title}>{props.title}</div>
        </div>
      </NavLink>
      <Switch>
        <Route path={`${match.path}/exact-zekr/:zekrType`}>
          <ExactZekr />
        </Route>
      </Switch>
    </Grid>
  );
};

export default ZekrItem;
