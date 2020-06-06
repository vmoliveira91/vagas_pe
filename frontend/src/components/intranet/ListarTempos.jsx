import React, { useState } from "react";

import api from "../../services/api";
import AtualizarTempo from "./AtualizarTempo";

export default function ListarTempos() {
  const [tempos, setTempos] = useState([]);
  const [tempoDesc, setTempoDesc] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarTempos(e) {
    e.preventDefault();

    const ativo = 1;
    let tempo = tempoDesc;

    try {
      if (tempo == "") tempo = "-";
      const response = await api.get(
        `/listar_tempos/${tempo}/${ativo}`
      );

      setTempos(response.data.tempos);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarTempos}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Tempos</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={tempoDesc}
                  onChange={(e) => setTempoDesc(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarTempos"
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
                      {tempos.map((tempo, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{tempo.id}</th>
                            <td>{tempo.descricao}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                onClick={() =>
                                  setObj({
                                    id: tempo.id,
                                    desc: tempo.descricao,
                                  })
                                }
                                data-toggle="collapse"
                                data-target="#collapseTempo"
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

          <div className="collapse" id="collapseTempo">
            <AtualizarTempo tempo={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}
