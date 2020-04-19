import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from '../../services/api';

import Header from "./Header";
import Rodape from "./Rodape";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSignUp(e) {
    e.preventDefault();
    console.log('here');
    let obj = {
      login: username,
      senha: password
    }

    try {
      const response = await api.post('/logar_usuario', obj);

      localStorage.setItem('loginTipo', response.data.tipo);
    
      if(response.data.tipo != -1) {
        history.push('/intranet');
      } else {
        alert('Dados inválidos');
      }
    } catch(error) {
      alert(error);
    }    
  }

  return (
    <div>
      <Header />
      <div className="centralLogin">
        <div className="d-flex justify-content-center h-100">
          <div>
            <form onSubmit={handleSignUp}>
              {" "}
              <div className="form-row">
                <h2 className="form-group col-lg-12">Login</h2>

                <div className="form-group col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required="required"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-group col-lg-12">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group col-md-12">
                  <button type="submit" className="btn col-md-12 btn-primary">Entrar</button>
                </div>
                <div className="form-group col-lg-12 clearfix">
                  <label className="pull-left checkbox-inline">
                    <input type="checkbox" id="chkBox" /> Me lembre neste
                    dispositivo
                  </label>
                  <br />
                  <a href="#" className="pull-right" id="lnkEsqueceu">
                    Esqueceu o Password?
                  </a>
                  <br />
                  <p className="text-center">
                    <a href="#">Criar uma conta</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
