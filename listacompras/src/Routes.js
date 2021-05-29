import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import ListaCompras from "./Pages/ListaCompras";
import PDF from "./Pages/PDF";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/ListaDeCompras" exact component={ListaCompras} />
        <Route path="/pdf" exact component={PDF}/>
      </Switch>
    </BrowserRouter>
  );
}
