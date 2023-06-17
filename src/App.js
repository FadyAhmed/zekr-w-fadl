import { Route, Routes, BrowserRouter, redirect } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Azkar from "./pages/Azkar";
import ExactZekr from "./pages/ExcactZekr";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" exact>
          <redirect to="/azkar" />
        </Route> */}
        <Route path="/azkar">
          <Route path="" element={<Azkar />}></Route>
          <Route
            path="exact-zekr/:zekrType"
            element={<ExactZekr></ExactZekr>}
          ></Route>
        </Route>
        {/* <Route path="/quran">
          <Quran />
        </Route>
        <Route path="/prayer-times">
          <Salawat />
        </Route> */}
      </Routes>
    </Layout>
  );
}

export default App;
