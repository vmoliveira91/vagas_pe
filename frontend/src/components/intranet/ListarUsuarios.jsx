import React, { useState } from "react";

import api from "../../services/api";
import AtualizarUsuario from "./AtualizarUsuario";

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [login, setLogin] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarUsuarios(e) {
    e.preventDefault();

    const ativo = 1;
    let usuario = login;

    try {
      if (usuario == "") usuario = "-";
      const response = await api.get(`/listar_usuarios/${usuario}/${ativo}`);

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
              <h2 className="form-group col-lg-12">Listagem de Usuários</h2>

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
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map((usuario, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{usuario.id}</th>
                            <td>{usuario.login}</td>
                            <td>{usuario.nome_usuario}</td>
                            <td>{usuario.tipo}</td>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-block"
                                  onClick={() =>
                                    setObj({
                                      id: usuario.id,
                                      nome: usuario.nome_usuario,
                                      tipo: usuario.tipo,
                                      ativo: usuario.ativo,
                                    })
                                  }
                                  data-toggle="collapse"
                                  data-target="#collapseUsuario"
                                >
                                  Atualizar
                                </button>
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

          <div className="collapse" id="collapseUsuario">
            <AtualizarUsuario user={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}
