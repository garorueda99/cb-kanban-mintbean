import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ### IMPORT COMPONENTS ###
import GlobalStyles from "./components/GlobalStyles";
import Board from "./components/Board/Board";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <LandingPage />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
