import React, { useState } from "react";

import api from "../../services/api";
import AtualizarBeneficio from "./AtualizarBeneficio";

export default function ListarBeneficios() {
  const [beneficios, setBeneficios] = useState([]);
  const [benDesc, setBenDesc] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarBeneficios(e) {
    e.preventDefault();

    const ativo = 1;
    let beneficio = benDesc;

    try {
      if (beneficio == "") beneficio = "-";
      const response = await api.get(
        `/listar_beneficios/${beneficio}/${ativo}`
      );

      setBeneficios(response.data.beneficios);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarBeneficios}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Benefícios</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={benDesc}
                  onChange={(e) => setBenDesc(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarBeneficios"
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
                      {beneficios.map((beneficio, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{beneficio.id}</th>
                            <td>{beneficio.descricao}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                onClick={() =>
                                  setObj({
                                    id: beneficio.id,
                                    desc: beneficio.descricao,
                                  })
                                }
                                data-toggle="collapse"
                                data-target="#collapseBeneficio"
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

          <div className="collapse" id="collapseBeneficio">
            <AtualizarBeneficio beneficio={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}
