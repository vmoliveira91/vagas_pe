import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import QuemSomos from "./components/institucional/QuemSomos";
import Contato from "./components/institucional/Contato";
import Home from "./components/institucional/Home";
import EmConstrucao from "./components/institucional/EmConstrucao";

import Login from "./components/institucional/Login";
import Trabalhador from "./components/intranet/Trabalhador";
import MenuPrincipal from "./components/intranet/MenuPrincipal";

import ListarHabilidades from "./components/intranet/ListarHabilidades";
import AddExperiencia from "./components/intranet/AddExperiencia";
import AddHabilidade from "./components/intranet/AddHabilidade";
import CadastrarHabilidade from "./components/intranet/CadastrarHabilidade";
import CadastrarExperiencia from "./components/intranet/CadastrarExperiencia";
import ListarExperiencias from "./components/intranet/ListarExperiencias";
import ListarUsuarios from "./components/intranet/ListarUsuarios";
import SelectHabilidade from "./components/intranet/SelectHabilidade";
import CadastrarUsuario from "./components/intranet/CadastrarUsuario";
import AtualizarHabilidade from "./components/intranet/AtualizarHabilidade";
import AtualizarUsuario from "./components/intranet/AtualizarUsuario";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />               
        <Route exact path="/quem-somos" component={QuemSomos} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/login" component={Login} />
        <Route path="/intranet" component={MenuPrincipal} />        
        <Route path="/cadastrar-trabalhador" component={Trabalhador} />
        <Route path="/cadastrar-habilidade" component={CadastrarHabilidade} />
        <Route path="/cadastrar-experiencia" component={CadastrarExperiencia} />
        <Route path="/cadastrar-usuario" component={CadastrarUsuario} />
        <Route path="/atualizar-trabalhador" component={EmConstrucao} />
        <Route path="/atualizar-habilidade" component={AtualizarHabilidade} />
        <Route path="/atualizar-experiencia" component={EmConstrucao} />
        <Route path="/atualizar-usuario" component={AtualizarUsuario} />
        <Route path="/ativar-desativar-trabalhador" component={EmConstrucao} />
        <Route path="/ativar-desativar-habilidade" component={EmConstrucao} />
        <Route path="/ativar-desativar-experiencia" component={EmConstrucao} />
        <Route path="/ativar-desativar-usuario" component={EmConstrucao} />
        <Route path="/buscar-listar-trabalhador" component={EmConstrucao} />
        <Route path="/buscar-listar-habilidade" component={ListarHabilidades} />
        <Route path="/buscar-listar-experiencia" component={ListarExperiencias} />
        <Route path="/buscar-listar-usuario" component={ListarUsuarios} />
        <Route exact path="/cadastrar-" component={MenuPrincipal} /> 
        <Route exact path="/atualizar-" component={MenuPrincipal} /> 
        <Route exact path="/ativar-desativar-" component={MenuPrincipal} /> 
        <Route exact path="/buscar-listar-" component={MenuPrincipal} />
      </Switch>
    </BrowserRouter>
  );
}
