import React, { useState } from "react";

import api from "../../services/api";
import AtualizarUsuario from "./AtualizarUsuario";

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [login, setLogin] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [tipo, setTipo] = useState("");
  const [ativo, setAtivo] = useState("");
  let _id, _login, _nome_usuario, _tipo, _ativo ;

  async function handleListarUsuarios(e) {
    e.preventDefault();

    const ativo = 1;
    let usuario = login;

    try {
      if (usuario == "") usuario = "-";
      const response = await api.get(
        `/listar_usuarios/${usuario}/${ativo}`
      );

      setUsuarios(response.data.usuarios);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
            <form onSubmit={handleListarUsuarios}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Usuarios</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarUsuarios"
                >
                  Buscar/Listar
                </button>
              </div>

              <div className="form-group col-lg-12">
                <div className="table-overflow">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Login</th>
                        <th scope="col">Nome Usuário</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Ativo</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map((usuario) => {
                        return (
                          <tr key={usuario.id}>
                            <th scope="row">{usuario.id}</th>
                            <td>{usuario.login}</td>
                            <td>{usuario.nome_usuario}</td>
                            <td>{usuario.tipo}</td>
                            <td>{usuario.ativo}</td>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-block"
                                  data-toggle="modal"
                                  data-target="#atualizarHab"
                                >
                                  Atualizar
                                </button>

                                <div
                                  className="modal fade"
                                  id="atualizarHab"
                                  tabIndex="-1"
                                  role="dialog"
                                >
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title"
                                          id="atualizarHab"
                                        >
                                          Atualizar Habilidade
                                        </h5>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                        >
                                          &times;
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <AtualizarUsuario
                                          id={_id}
                                          descricao={_login}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
