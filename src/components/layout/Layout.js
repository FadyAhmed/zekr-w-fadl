import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <div style={{ height: "5rem" }}></div>
      <main>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
