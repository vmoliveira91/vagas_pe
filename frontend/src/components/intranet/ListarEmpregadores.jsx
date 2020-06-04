import React, { useState } from 'react';

import api from "../../services/api";
import AtualizarEmpregador from "./AtualizarEmpregador";

export default function ListarEmpregadores() {
  const [empregadores, setEmpregadores] = useState([]);
  const [nomeFantasia, setNomeFantasia] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarEmpregadores(e) {
    e.preventDefault();

    const ativo = 1;
    let empregador = nomeFantasia;

    try {
      if (trabalhador == "") empregador = "-";
      const response = await api.get(`/listar_empregadores/${empregador}/${ativo}`);

      setEmpregadores(response.data.empregadores);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarEmpregadores}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Empregadores</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome Fantasia"
                  value={nomeFantasia}
                  onChange={(e) => setNomeFantasia(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarEmpregadores"
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
                        <th scope="col">Nome Fantasia</th>
                        <th scope="col">CNPJ</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {empregadores.map((empregador, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{empregador.id}</th>
                            <td>{empregador.nome_fantasia}</td>
                            <td>{empregador.cnpj}</td>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-block"
                                  onClick={() =>
                                    setObj({
                                      id: empregador.id,
                                      razaoSocial: empregador.razao_social,
                                      nomeFantasia: empregador.nome_fantasia,
                                      cnpj: empregador.cnpj,
                                      endereco: empregador.endereco,
                                      telefone: empregador.telefone,
                                      email: empregador.email,
                                      data_cadastro: empregador.data_cadastro,
                                      data_validade: empregador.data_validade,
                                      ativo: empregador.ativo
                                    })
                                  }
                                  data-toggle="collapse"
                                  data-target="#collapseEmpregador"
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

          <div className="collapse" id="collapseEmpregador">
            <AtualizarEmpregador empregador={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}
