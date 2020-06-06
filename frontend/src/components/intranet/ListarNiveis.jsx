import React, { useState } from "react";

import api from "../../services/api";
import AtualizarNivel from "./AtualizarNivel";

export default function ListarNiveis() {
  const [niveis, setNiveis] = useState([]);
  const [habNivel, setNivelDesc] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarNiveis(e) {
    e.preventDefault();

    const ativo = 1;
    let nivel = nivelDesc;

    try {
      if (nivel == "") nivel = "-";
      const response = await api.get(
        `/listar_niveis/${nivel}/${ativo}`
      );

      setNiveis(response.data.niveis);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarNiveis}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Níveis</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={nivelDesc}
                  onChange={(e) => setNivelDesc(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarNiveis"
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
                        <th scope="col">Descrição</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {niveis.map((nivel, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{nivel.id}</th>
                            <td>{nivel.descricao}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                onClick={() =>
                                  setObj({
                                    id: nivel.id,
                                    desc: nivel.descricao,
                                  })
                                }
                                data-toggle="collapse"
                                data-target="#collapseNivel"
                              >
                                Atualizar
                              </button>
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

          <div className="collapse" id="collapseNivel">
            <AtualizarNivel nivel={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}
