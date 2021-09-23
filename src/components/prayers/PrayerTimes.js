import Grid from "@mui/material/Grid";
import datetimeDifference from "datetime-difference";
import { useCallback, useEffect, useState } from "react";
import classes from "./PrayerTimes.module.css";
import PrayerTimesItem from "./PrayerTimesItem";

const PrayerTimes = (props) => {
  const [times, setTimes] = useState([]);
  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const [nextTimer, setNextTimer] = useState("");
  const [nextSalatIndex, setNextSalatIndex] = useState(0);

  const fetchPrayerTimeData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.pray.zone/v2/times/today.json?city=cairo&school=5&timeformat=1"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedTimes = data.results.datetime[0].times;
      setTimes(transformedTimes);
      const transformedDates = data.results.datetime[0].date;
      setDates(transformedDates);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);

  const selectNextPrayer = useCallback(() => {
    const salawat = [
      times.Fajr,
      times.Sunrise,
      times.Dhuhr,
      times.Asr,
      times.Maghrib,
      times.Isha,
    ];

    // turn to 24 system
    const salawat24 = salawat.map((salat) => {
      const system = salat.split(" ")[1] === "AM" ? 0 : 12;
      const hh = parseInt(salat.split(":")[0]) + system;
      const mm = parseInt(salat.split(":")[1].split(" ")[0]);

      return { hour: hh, minute: mm };
    });

    var today = new Date();
    const now = { hour: today.getHours(), minute: today.getMinutes() };

    const diffs = [];

    salawat24.forEach((salat, index) => {
      const diff =
        new Date(2021, 1, 1, salat.hour, salat.minute) -
        new Date(2021, 1, 1, now.hour, now.minute);

      if (diff > 0) {
        diffs.push({ time: diff, index });
      }
    });

    diffs.sort((a, b) => {
      return a - b;
    });

    let next =
      diffs.length !== 0
        ? { time: salawat[diffs[0].index], index: diffs[0].index }
        : { time: salawat[0], index: 0 };

    return next;
  }, [times]);

  useEffect(() => {
    fetchPrayerTimeData();
  }, [fetchPrayerTimeData]);

  useEffect(() => {
    setInterval(function () {
      setReload(!reload);
    }, 60000);

    if (isLoading || error || times.length === 0) return;

    let { time: next, index } = selectNextPrayer();
    setNextSalatIndex(index);

    var date = new Date();
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();

    const now = { hour: date.getHours(), minute: date.getMinutes() };
    const today = mm + "/" + dd + "/" + yyyy;

    const currentDate = new Date(mm, dd, yyyy, now.hour, now.minute);

    const nextDate = new Date(`${today}, ${next}`);
    const result = datetimeDifference(currentDate, nextDate);

    const hours =
      result.hours === 0
        ? ""
        : result.hours === 1
        ? " و ساعة"
        : result.hours === 2
        ? " و ساعتين"
        : result.hours <= 10
        ? `${result.hours}  و ساعات`
        : `${result.hours}  و ساعة`;

    const minutes =
      result.minutes === 0
        ? "دقائق"
        : result.minutes === 1
        ? "دقيقة "
        : result.minutes === 2
        ? "دقيقتان "
        : result.minutes <= 10
        ? `${result.minutes} دقائق`
        : `${result.minutes} دقيقة`;

    setNextTimer(`${hours} ${minutes}`);
  }, [error, isLoading, times, selectNextPrayer, reload]);

  if (isLoading) {
    return <p className="centered">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const salawat = [
    {
      salatTitle: "الفجر",
      time: times.Fajr,
      index: 0,
    },
    {
      salatTitle: "الشروق",
      time: times.Sunrise,
      index: 1,
    },
    {
      salatTitle: "الظهر",
      time: times.Dhuhr,
      index: 2,
    },
    {
      salatTitle: "العصر",
      time: times.Asr,
      index: 3,
    },
    {
      salatTitle: "المغرب",
      time: times.Maghrib,
      index: 4,
    },
    {
      salatTitle: "العشاء",
      time: times.Isha,
      index: 5,
    },
  ];

  return (
    <Grid container xs={12}>
      <Grid md={2} xs={0}></Grid>
      <Grid container md={8} xs={12} className={classes.prayerTimes}>
        <h2>{dates.hijri}</h2>
        <Grid item md={12} xs={12} className={classes.prayerTimes}>
          <h3 className={classes.nextPrayer}>
            الصلاة القادمة خلال: {nextTimer}
          </h3>
        </Grid>

        <Grid container md={12}>
          <Grid container md={12} xs={12} className={classes.prayerTimes}>
            {salawat.map((salat) => {
              return (
                <PrayerTimesItem
                  salatTitle={salat.salatTitle}
                  time={salat.time}
                  current={nextSalatIndex}
                  index={salat.index}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid md={2} xs={0}></Grid>
    </Grid>
  );
};
export default PrayerTimes;
