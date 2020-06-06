import React, { useState } from "react";

import api from "../../services/api";
import AtualizarSituacao from "./AtualizarSituacao";

export default function ListarSituacoes() {
  const [situacoes, setSituacoes] = useState([]);
  const [sitDesc, setSitDesc] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarSituacoes(e) {
    e.preventDefault();

    const ativo = 1;
    let situacao = sitDesc;

    try {
      if (situacao == "") situacao = "-";
      const response = await api.get(
        `/listar_situacoes/${situacao}/${ativo}`
      );

      setSituacoes(response.data.situacoes);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarSituacoes}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Situações</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={sitDesc}
                  onChange={(e) => setSitDesc(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarSituacoes"
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
                      {situacoes.map((situacao, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{situacao.id}</th>
                            <td>{situacao.descricao}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                onClick={() =>
                                  setObj({
                                    id: situacao.id,
                                    desc: situacao.descricao,
                                  })
                                }
                                data-toggle="collapse"
                                data-target="#collapseSituacao"
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

          <div className="collapse" id="collapseSituacao">
            <AtualizarSituacao situacao={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}
