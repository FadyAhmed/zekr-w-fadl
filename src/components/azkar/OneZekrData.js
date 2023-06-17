import Grid from "@mui/material/Grid";
import Soon from "../UI/Soon";
import classes from "./OneZekrData.module.css";
import azkarTypes from "../../data/azkar_types.json";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const OneZekrData = (props) => {
  const [show, setShow] = useState(false);

  let pageTitle;
  try {
    pageTitle = azkarTypes.filter((zekr) => zekr.id === props.zekrType)[0]
      .title;
  } catch (e) {
    pageTitle = "";
  }

  if (props.zekrType === "undefined") {
    return <Soon></Soon>;
  }

  const azkarData = require(`../../data/${props.zekrType}.json`);

  if (!azkarData) {
    return <Soon></Soon>;
  }

  return (
    <div className={classes.page}>
      <h1 className={classes.pageTitle}>({pageTitle})</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p onClick={() => setShow(!show)} style={{ fontWeight: "bold" }}>
          إظهار الحديث
        </p>
        <Checkbox sx={{zIndex:0}} checked={show} onChange={() => setShow(!show)} />
      </div>
      {azkarData.map((zekr, index) => {
        return (
          <Grid container xs={12}>
            <Grid item xs={1} md={2}></Grid>
            <Grid xs={10} md={8}>
              <div className={classes.zekrData}>
                <div className={`${classes.rtl} + ' '+ ${classes.title}`}>
                  {zekr.graciousness}:
                </div>
                <div className={`${classes.rtl} + ' '+ ${classes.zekr}`}>
                  {zekr.supplication}
                </div>
                <div className={`${classes.rtl} + ' '+ ${classes.repetations}`}>
                  عدد مررات التكرار: {zekr.numberOfRepetitions}
                </div>
                {show && (
                  <div className={`${classes.rtl} + ' '+ ${classes.hadith}`}>
                    {zekr.hadith}
                  </div>
                )}
              </div>
              {azkarData.length - 1 !== index && <hr />}
            </Grid>
            <Grid container xs={1} md={2}>
              <div className={classes.order}>{zekr.priority}</div>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};
export default OneZekrData;
