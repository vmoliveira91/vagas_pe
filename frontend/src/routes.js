import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
import PrivateRoute from "./services/privateRoutes"


const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />               
        <Route exact path="/quem-somos" component={QuemSomos} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/menu" component={MenuPrincipal} />
        
        <PrivateRoute path="/cadastrar-funcao" component={CadastrarFuncao} />
        <PrivateRoute path="/cadastrar-tempo" component={CadastrarTempo} />
        <PrivateRoute path="/cadastrar-nivel" component={CadastrarNivel} />
        <PrivateRoute path="/cadastrar-beneficio" component={CadastrarBeneficio} />
        <PrivateRoute path="/cadastrar-situacao" component={CadastrarSituacao} />
        <PrivateRoute path="/cadastrar-habilidade" component={CadastrarHabilidade} />
        <PrivateRoute path="/cadastrar-experiencia" component={CadastrarExperiencia} />
        <PrivateRoute path="/cadastrar-usuario" component={CadastrarUsuario} />
        <PrivateRoute path="/cadastrar-vaga" component={CadastrarVaga} />
        <PrivateRoute path="/cadastrar-empregador" component={CadastrarEmpregador} />
        <PrivateRoute path="/cadastrar-trabalhador" component={CadastrarTrabalhador} />
        
        <PrivateRoute path="/buscar-listar-funcao" component={ListarFuncoes} />
        <PrivateRoute path="/buscar-listar-tempo" component={ListarTempos} />
        <PrivateRoute path="/buscar-listar-nivel" component={ListarNiveis} />
        <PrivateRoute path="/buscar-listar-beneficio" component={ListarBeneficios} />
        <PrivateRoute path="/buscar-listar-situacao" component={ListarSituacoes} />
        <PrivateRoute path="/buscar-listar-habilidade" component={ListarHabilidades} />
        <PrivateRoute path="/buscar-listar-experiencia" component={ListarExperiencias} />
        <PrivateRoute path="/buscar-listar-usuario" component={ListarUsuarios} />
        <PrivateRoute path="/buscar-listar-vaga" component={ListarVagas} />
        <PrivateRoute path="/buscar-listar-empregador" component={ListarEmpregadores} />
        <PrivateRoute path="/buscar-listar-trabalhador" component={ListarTrabalhadores} />

        <PrivateRoute path="/efetuar-inscricao" component={EfetuarInscricao} />
        <PrivateRoute path="/buscar-listar-inscricao" component={ListarInscricoes} />

        <PrivateRoute exact path="/cadastrar-" component={MenuPrincipal} /> 
        <PrivateRoute exact path="/atualizar-" component={MenuPrincipal} /> 
        <PrivateRoute exact path="/ativar-desativar-" component={MenuPrincipal} /> 
        <PrivateRoute exact path="/buscar-listar-" component={MenuPrincipal} />
      </Switch>
    </BrowserRouter>
  );

  export default Routes;
