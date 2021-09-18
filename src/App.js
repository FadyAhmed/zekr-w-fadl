import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Azkar from "./pages/Azkar";
import Quran from "./pages/Quran";
import Salawat from "./pages/Salawat";
import ExactZekr from "./pages/ExcactZekr";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/azkar" exact>
          <Azkar />
        </Route>
        <Route path="/azkar/exact-zekr/:zekrType">
          <ExactZekr></ExactZekr>
        </Route>
        <Route path="/quran">
          <Quran />
        </Route>
        <Route path="/salat">
          <Salawat />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
