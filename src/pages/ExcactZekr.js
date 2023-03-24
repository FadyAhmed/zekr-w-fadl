import { useParams } from "react-router-dom";
import OneZekrData from "../components/azkar/OneZekrData";

const ExactZekr = (props) => {
  const params = useParams();

  return <OneZekrData zekrType={params.zekrType}></OneZekrData>;
};

export default ExactZekr;
