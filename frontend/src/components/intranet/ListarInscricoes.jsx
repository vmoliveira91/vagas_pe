import React, { useState } from 'react';

import api from "../../services/api";
import AtualizarInscricao from "./AtualizarInscricao";

export default function ListarInscricoes() {
  const [inscricoes, setInscricoes] = useState([]);
  const [descricao, setDescricao] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarInscricoes(e) {
    e.preventDefault();

    const ativo = 1;
    let inscricao = descricao;

    try {
      if (inscricao == "") inscricao = "-";
      const response = await api.get(`/listar_inscricoes/${inscricao}/${ativo}`);

      setInscricoes(response.data.vagas);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarInscricoes}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Inscrições</h2>

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
                  id="btnListarInscricoes"
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
                        <th scope="col">Data de Inscrição</th>
                        <th scope="col">Trabalhador</th>
                        <th scope="col">Vaga</th>
                        <th scope="col">Situação</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {inscricoes.map((inscricao, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{inscricao.id}</th>
                            <td>{inscricao.data_inscricao}</td>
                            <td>{inscricao.trabalhador.nome}</td>
                            <td>{inscricao.vaga.descricao}</td>
                            <td>{inscricao.situacao.descricao}</td>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-block"
                                  onClick={() =>
                                    setObj({
                                      id: inscricao.id,
                                      data_inscricao: inscricao.data_inscricao,
                                      trabalhador: inscricao.trabalhador,
                                      vaga: inscricao.vaga,
                                      situacao: inscricao.situacao,
                                      ativo: inscricao.ativo
                                    })
                                  }
                                  data-toggle="collapse"
                                  data-target="#collapseInscricao"
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

          <div className="collapse" id="collapseInscricao">
            <AtualizarInscricao inscricao={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}

