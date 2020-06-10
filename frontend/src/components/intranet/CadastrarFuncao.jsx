import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

export default function CadastrarFuncao() {
    const [sigla, setSigla] = useState("");
    const [nome, setNome] = useState("");
    const history = useHistory();

    async function handleCadastroFuncao(e) {
        e.preventDefault();

        let obj = {
            sigla: sigla,
            nome: nome,
        };

        try {
            await api.post("/cadastrar_funcao", obj);

            alert("Função cadastrada com sucesso.");

            history.push('/menu');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="central">
            <div className="d-flex justify-content-center h-100">
                <div>
                    <form onSubmit={handleCadastroFuncao}>
                        <div className="form-row">
                            <h2 className="form-group col-lg-12">Cadastro de Função</h2>

                            <div className="form-group col-lg-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Sigla"
                                    required="required"
                                    value={sigla}
                                    onChange={(e) => setSigla(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-lg-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome"
                                    required="required"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-lg-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    id="btnCadastrarFuncao"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}