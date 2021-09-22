import "./App.css";
import { Col } from "antd";
import AnimesForm from "./components/animes.form.component";
import AnimeList from "./components/animes.list.component";
import NavBar from "./navBar/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnimesFormUpdate from "./components/animes.formUpdate.component";
import { animes } from "./types/animes.types";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
function App() {
  const animes = useSelector<RootStateOrAny, any>((state) => state.animes);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Route path="/animes.form.component" exact>
            <AnimesForm />
          </Route>
          <Route path="/animes.list.component" exact>
            <AnimeList />
          </Route>

          <Route path="/animes.formUpdate.component/:animesId" exact>
            <AnimesFormUpdate />
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
