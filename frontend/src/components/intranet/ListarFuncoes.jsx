import React, { useState } from "react";

import api from "../../services/api";
import AtualizarFuncao from "./AtualizarFuncao";

export default function ListarFuncoes() {
    const [funcoes, setFuncoes] = useState([]);
    const [sigla, setSigla] = useState("");
    const [nome, setNome] = useState("");

    const [obj, setObj] = useState({});

    async function handleListarFuncoes(e) {
        e.preventDefault();

        const ativo = 1;
        let funcao = nome;

        try {
            if (funcao == "") funcao = "-";
            const response = await api.get(
                `/listar_funcoes/${funcao}/${ativo}`
            );

            setFuncoes(response.data.funcoes);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="central">
            <div className="d-flex justify-content-center h-100">
                <div>
                    <form onSubmit={handleListarFuncoes}>
                        <div className="form-row">
                            <h2 className="form-group col-lg-12">Listagem de Funções</h2>

                            <div className="form-group col-md-7">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Sigla"
                                    value={sigla}
                                    onChange={(e) => setSigla(e.target.value)}
                                />
                            </div>

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
                                    id="btnListarFuncoes"
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
                                                <th scope="col">Sigla</th>
                                                <th scope="col">Nome</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {funcoes.map((funcao, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{funcao.id}</th>
                                                        <td>{funcao.descricao}</td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary btn-block"
                                                                onClick={() =>
                                                                    setObj({
                                                                        id: funcao.id,
                                                                        sigla: funcao.sigla,
                                                                        nome: funcao.nome,
                                                                    })
                                                                }
                                                                data-toggle="collapse"
                                                                data-target="#collapseFuncao"
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

                    <div className="collapse" id="collapseFuncao">
                        <AtualizarFuncao funcao={obj} />
                    </div>
                </div>
            </div>
        </div>
    );
}
