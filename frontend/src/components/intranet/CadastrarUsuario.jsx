import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function CadastrarUsuario() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");
  const history = useHistory();

  async function handleCadastrarUsuario(e) {
    e.preventDefault();
    
    try {
      let obj = {
        login: login,
        nome_usuario: nomeUsuario,
        senha: senha,
        tipo: tipo
      }

      const response = await api.post('/cadastrar_usuario', obj);

      alert('Usuário cadastrado com sucesso!');

      history.push('/menu');
    } catch(error) {
      alert(error);
    }
  }

  return (
    <div className="central">
          <div className="d-flex justify-content-center h-100">
        <div>
            <form onSubmit={handleCadastrarUsuario}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Usuário</h2>

              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  required="required"
                  value={nomeUsuario}
                  onChange={(e) => setNomeUsuario(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Login"
                  required="required"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-12">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  required="required"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                </div>

                <div className="form-group col-md-12">
                    <select
                        onChange={(e) => setTipo(e.target.value)}
                        className="form-control"
                        required
                    >
                        <option value="">TIPO DE USUÁRIO</option>
                        <option value="1">Agente</option>
                        <option value="2">Captador</option>
                        <option value="3">Gerente</option>
                    </select>
                </div>

              <div className="form-group col-lg-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnCadUsuario"
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
