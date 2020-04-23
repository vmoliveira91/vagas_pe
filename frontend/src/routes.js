import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import QuemSomos from "./components/institucional/QuemSomos";
import Contato from "./components/institucional/Contato";
import Home from "./components/institucional/Home";
import EmConstrucao from "./components/institucional/EmConstrucao";

import Login from "./components/institucional/Login";
import MenuPrincipal from "./components/intranet/MenuPrincipal";

import CadastrarTrabalhador from "./components/intranet/CadastrarTrabalhador";
import ListarTrabalhadores from "./components/intranet/ListarTrabalhadores"

import CadastrarHabilidade from "./components/intranet/CadastrarHabilidade";
import ListarHabilidades from "./components/intranet/ListarHabilidades";

import CadastrarExperiencia from "./components/intranet/CadastrarExperiencia";
import ListarExperiencias from "./components/intranet/ListarExperiencias";

import CadastrarUsuario from "./components/intranet/CadastrarUsuario";
import ListarUsuarios from "./components/intranet/ListarUsuarios";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />               
        <Route exact path="/quem-somos" component={QuemSomos} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/login" component={Login} />
        <Route path="/intranet" component={MenuPrincipal} />        
        <Route path="/cadastrar-trabalhador" component={CadastrarTrabalhador} />
        <Route path="/cadastrar-habilidade" component={CadastrarHabilidade} />
        <Route path="/cadastrar-experiencia" component={CadastrarExperiencia} />
        <Route path="/cadastrar-usuario" component={CadastrarUsuario} />
        <Route path="/buscar-listar-trabalhador" component={ListarTrabalhadores} />
        <Route path="/buscar-listar-habilidade" component={ListarHabilidades} />
        <Route path="/buscar-listar-experiencia" component={ListarExperiencias} />
        <Route path="/buscar-listar-usuario" component={ListarUsuarios} />
        <Route path="/nova-inscricao" component={EmConstrucao} />
        <Route path="/atualizar-inscricao" component={EmConstrucao} />
        <Route exact path="/cadastrar-" component={MenuPrincipal} /> 
        <Route exact path="/atualizar-" component={MenuPrincipal} /> 
        <Route exact path="/ativar-desativar-" component={MenuPrincipal} /> 
        <Route exact path="/buscar-listar-" component={MenuPrincipal} />
      </Switch>
    </BrowserRouter>
  );
}
