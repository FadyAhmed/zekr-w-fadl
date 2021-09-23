import Grid from '@mui/material/Grid';
import AZKAR_TYPES from "../../data/azkar_types.json";
import ZekrItem from "./ZekrItem";

const ZekrList = (props) => {
  const padding = <Grid xs={0} md={2}></Grid>;

  return (
    <Grid container xs={12}>
      {padding}
      <Grid container xs={12} md={8}>
        {AZKAR_TYPES.map((item) => {
          return <ZekrItem image={item.logo} title={item.title} id={item.id} />;
        })}
      </Grid>
      {padding}
    </Grid>
  );
};

export default ZekrList;
