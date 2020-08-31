import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// ### IMPORT COMPONENTS ###
import GlobalStyles from "./Components/GlobalStyles";
import Board from "./Components/Board";
import LandingPage from "./Components/LandingPage";
import WarningModal from "./Components/WarningModal";
import ClearAllModal from "./Components/ClearAllModal";
import FormModal from "./Components/FormModal";

function App() {
  const state = useSelector((state) => state);

  React.useEffect(() => {
    window.localStorage.setItem("persistedState", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <WarningModal />
      <ClearAllModal />

      <Router>
        <Switch>
          <Route exact={true} path="/">
            <LandingPage />
          </Route>
          <Route path="/board">
            <Board />
            <FormModal />
          </Route>
        </Switch>
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
