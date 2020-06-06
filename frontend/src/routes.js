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

import CadastrarBeneficio from "./components/intranet/CadastrarBeneficio";
import ListarBeneficios from "./components/intranet/ListarBeneficios";

import CadastrarTempo from "./components/intranet/CadastrarTempo";
import ListarTempos from "./components/intranet/ListarTempos";

import CadastrarVaga from "./components/intranet/CadastrarVaga";
import ListarVagas from "./components/intranet/ListarVagas";

import CadastrarEmpregador from "./components/intranet/CadastrarEmpregador";
import ListarEmpregadores from "./components/intranet/ListarEmpregadores";

import CadastrarFuncao from "./components/intranet/CadastrarFuncao";
import ListarFuncoes from "./components/intranet/ListarFuncoes";

import EfetuarInscricao from "./components/intranet/EfetuarInscricao";
import ListarInscricoes from "./components/intranet/ListarInscricoes";

import CadastrarSituacao from "./components/intranet/CadastrarSituacao";
import ListarSituacoes from "./components/intranet/ListarSituacoes";

import CadastrarNivel from "./components/intranet/CadastrarNivel";
import ListarNiveis from "./components/intranet/ListarNiveis";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />               
        <Route exact path="/quem-somos" component={QuemSomos} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/login" component={Login} />
        <Route path="/intranet" component={MenuPrincipal} />
        
        <Route path="/cadastrar-funcao" component={CadastrarFuncao} />
        <Route path="/cadastrar-tempo" component={CadastrarTempo} />
        <Route path="/cadastrar-nivel" component={CadastrarNivel} />
        <Route path="/cadastrar-beneficio" component={CadastrarBeneficio} />
        <Route path="/cadastrar-situacao" component={CadastrarSituacao} />
        <Route path="/cadastrar-habilidade" component={CadastrarHabilidade} />
        <Route path="/cadastrar-experiencia" component={CadastrarExperiencia} />
        <Route path="/cadastrar-usuario" component={CadastrarUsuario} />
        <Route path="/cadastrar-vaga" component={CadastrarVaga} />
        <Route path="/cadastrar-empregador" component={CadastrarEmpregador} />
        <Route path="/cadastrar-trabalhador" component={CadastrarTrabalhador} />
        
        <Route path="/buscar-listar-funcao" component={ListarFuncoes} />
        <Route path="/buscar-listar-tempo" component={ListarTempos} />
        <Route path="/buscar-listar-nivel" component={ListarNiveis} />
        <Route path="/buscar-listar-beneficio" component={ListarBeneficios} />
        <Route path="/buscar-listar-situacao" component={ListarSituacoes} />
        <Route path="/buscar-listar-habilidade" component={ListarHabilidades} />
        <Route path="/buscar-listar-experiencia" component={ListarExperiencias} />
        <Route path="/buscar-listar-usuario" component={ListarUsuarios} />
        <Route path="/buscar-listar-vaga" component={ListarVagas} />
        <Route path="/buscar-listar-empregador" component={ListarEmpregadores} />
        <Route path="/buscar-listar-trabalhador" component={ListarTrabalhadores} />

        <Route path="/efetuar-inscricao" component={EfetuarInscricao} />
        <Route path="/buscar-listar-inscricao" component={ListarInscricoes} />

        <Route exact path="/cadastrar-" component={MenuPrincipal} /> 
        <Route exact path="/atualizar-" component={MenuPrincipal} /> 
        <Route exact path="/ativar-desativar-" component={MenuPrincipal} /> 
        <Route exact path="/buscar-listar-" component={MenuPrincipal} />
      </Switch>
    </BrowserRouter>
  );
}
