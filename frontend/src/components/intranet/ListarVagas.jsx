import React, { useState } from 'react';

import api from "../../services/api";
import AtualizarVaga from "./AtualizarVaga";

export default function ListarVagas() {
  const [vagas, setVagas] = useState([]);
  const [descricao, setDescricao] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarVagas(e) {
    e.preventDefault();

    const ativo = 1;
    let vaga = descricao;

    try {
      if (vaga == "") vaga = "-";
      const response = await api.get(`/listar_vagas/${vaga}/${ativo}`);

      setVagas(response.data.vagas);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarVagas}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Vagas</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarVagas"
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
                        <th scope="col">Salário</th>
                        <th scope="col">Função</th>
                        <th scope="col">Empregador</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {vagas.map((vaga, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{vaga.id}</th>
                            <td>{vaga.descricao}</td>
                            <td>{vaga.salario}</td>
                            <td>{vaga.funcao.nome}</td>
                            <td>{vaga.empregador.nomeFantasia}</td>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-block"
                                  onClick={() =>
                                    setObj({
                                      id: vaga.id,
                                      descricao: vaga.descricao,
                                      salario: vaga.salario,
                                      rg: vaga.rg,
                                      data_cadastro: vaga.data_cadastro,
                                      data_validade: vaga.data_validade,
                                      funcao: vaga.funcao,
                                      empregador: vaga.empregador,
                                      ativo: vaga.ativo,
                                      beneficios: vaga.beneficios.map((beneficio) => {
                                        return {
                                          beneficio_id: beneficio.id,
                                          beneficio_descricao: beneficio.descricao,
                                        }
                                      }),
                                      experiencias: vaga.experiencias.map((experiencia) => {
                                        return {
                                          experiencia_id: experiencia.id,
                                          experiencia_descricao: experiencia.descricao,
                                          tempo_id: experiencia.tempo.id,
                                          tempo_descricao: experiencia.tempo.descricao
                                        }
                                      }),
                                      habilidades: vaga.habilidades.map((habilidade) => {
                                        return {
                                          habilidade_id: habilidade.id,
                                          habilidade_descricao: habilidade.descricao,
                                          nivel_id: habilidade.nivel.id,
                                          nivel_descricao: habilidade.nivel.descricao
                                        }
                                      })
                                    })
                                  }
                                  data-toggle="collapse"
                                  data-target="#collapseVaga"
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

          <div className="collapse" id="collapseVaga">
            <AtualizarVaga vaga={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}

