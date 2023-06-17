import { useParams } from "react-router-dom";
import OneZekrData from "../components/azkar/OneZekrData";
import { useEffect } from "react";

const ExactZekr = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  return <OneZekrData zekrType={params.zekrType}></OneZekrData>;
};

export default ExactZekr;
