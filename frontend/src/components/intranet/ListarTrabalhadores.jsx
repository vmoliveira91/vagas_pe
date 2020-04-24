import React, { useState } from 'react';

import api from "../../services/api";
import AtualizarTrabalhador from "./AtualizarTrabalhador";

export default function ListarTrabalhadores() {
  const [trabalhadores, setTrabalhadores] = useState([]);
  const [nome, setNome] = useState("");

  const [obj, setObj] = useState({});

  async function handleListarTrabalhadores(e) {
    e.preventDefault();

    const ativo = 1;
    let trabalhador = nome;

    try {
      if (trabalhador == "") trabalhador = "-";
      const response = await api.get(`/listar_trabalhadores/${trabalhador}/${ativo}`);

      setTrabalhadores(response.data.trabalhadores);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarTrabalhadores}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Trabalhadores</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarTrabalhadores"
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
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {trabalhadores.map((trabalhador, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{trabalhador.id}</th>
                            <td>{trabalhador.nome}</td>
                            <td>{trabalhador.cpf}</td>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-block"
                                  onClick={() =>
                                    setObj({
                                      id: trabalhador.id,
                                      nome: trabalhador.nome,
                                      cpf: trabalhador.cpf,
                                      rg: trabalhador.rg,
                                      endereco: trabalhador.endereco,
                                      nacionalidade: trabalhador.nacionalidade,
                                      telefone: trabalhador.telefone,
                                      email: trabalhador.email,
                                      sexo: trabalhador.sexo,
                                      data_nascimento: trabalhador.data_nascimento,
                                      data_cadastro: trabalhador.data_cadastro,
                                      data_validade: trabalhador.data_validade,
                                      status: trabalhador.status,
                                      ativo: trabalhador.ativo,
                                      experiencias: trabalhador.experiencias.map((experiencia) => {
                                        return {
                                          experiencia_id: experiencia.id,
                                          experiencia_descricao: experiencia.descricao,
                                          tempo_id: experiencia.tempo.id,
                                          tempo_descricao: experiencia.tempo.descricao
                                        }
                                      }),
                                      habilidades: trabalhador.habilidades.map((habilidade) => {
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
                                  data-target="#collapseTrabalhador"
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

          <div className="collapse" id="collapseTrabalhador">
            <AtualizarTrabalhador trabalhador={obj} />
          </div>
        </div>
      </div>
    </div>
  );
}

