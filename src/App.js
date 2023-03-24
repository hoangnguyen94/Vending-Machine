import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Snacks from "./Snacks";
import Soda from "./Soda";
import ProteinBar from "./ProteinBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine/>
        </Route>
        <Route path="/soda" exact>
          <Soda />
        </Route>
        <Route path="/snacks" exact>
          <Snacks />
        </Route>
        <Route path="/proteinbar" exact>
          <ProteinBar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
