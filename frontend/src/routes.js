import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import QuemSomos from "./components/institucional/QuemSomos";
import Contato from "./components/institucional/Contato";
import Home from "./components/institucional/Home";

import Login from "./components/institucional/Login";
import Trabalhador from "./components/intranet/Trabalhador";
import MenuPrincipal from "./components/intranet/MenuPrincipal";

import ListarHabilidades from "./components/intranet/ListarHabilidades";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />        
        <Route exact path="/quem-somos" component={QuemSomos} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/login" component={Login} />
        <Route path="/intranet" component={MenuPrincipal} />        
        <Route path="/cadastro-de-trabalhador" component={Trabalhador} />

        <Route path="/listar" component={ListarHabilidades} />
      </Switch>
    </BrowserRouter>
  );
}
