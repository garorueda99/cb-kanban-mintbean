import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ### IMPORT COMPONENTS ###
import GlobalStyles from "./components/GlobalStyles";
import Board from "./components/Board";
import LandingPage from "./components/LandingPage";
import WarningModal from "./components/WarningModal";
import FormModal from "./components/FormModal";

function App() {
  return (
    <>
      <WarningModal />
      <FormModal />
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
    </>
  );
}

export default App;
