import classes from "./PrayerTimesItem.module.css";
import Grid from '@mui/material/Grid';

const PrayerTimesItem = (props) => {
  const nextClass = props.current === props.index ? classes.current : "";
  return (
    <Grid item lg={2} md={3} xs={5}>
      <div className={`${classes.salatItem} ${nextClass}`}>
        <h3>{props.salatTitle}</h3>
        <div>{props.time}</div>
      </div>
    </Grid>
  );
};
export default PrayerTimesItem;
