import "./App.css";
import { Col } from "antd";
import AnimesForm from "./components/animes.form.component";
import AnimeList from "./components/animes.list.component";
import NavBar from "./navBar/navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AnimesFormUpdate from "./components/animes.formUpdate.component";

import { RootStateOrAny, useSelector } from "react-redux";
import AnimesDetails from "./components/animes.details.component";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route path="/anime" exact>
              <AnimeList />
            </Route>
            <Route path="/" exact>
              <Redirect to="/anime" />
            </Route>
            <Route path="/anime/add" exact>
              <AnimesForm />
            </Route>

            <Route path="/anime/details/:animeId">
              <AnimesDetails />
            </Route>
            <Route path="/anime/edit/:animeId">
              <AnimesFormUpdate />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
