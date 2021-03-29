import React from "react";
import {
  Navabar,
  Footer,
  Principal,
  SubIngles,
  SubComputo,
  Arduino,
} from "./components";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Navabar />
        <Switch>
          <Route path='/LabIngles' exact component={SubIngles} />
          <Route path='/Arduino' exact component={Arduino} />
          <Route path='/LabComputo' exact component={SubComputo} />
          <Route path='/' exact component={Principal} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
