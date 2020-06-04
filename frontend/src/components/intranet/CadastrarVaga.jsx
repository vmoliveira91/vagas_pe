import React, { useState } from 'react';

export default function CadastrarVaga() {
    const [descricao, setDescricao] = useState("");
    const [salario, setSalario] = useState("");

    async function handleCadastrarVaga(e) {
        e.preventDefault();
    }

    return (
        <div className="central">
            <div className="d-flex justify-content-center h-100">
                <div>
                    <form onSubmit={handleCadastrarVaga}>
                        <div className="form-row">
                            <h2 className="form-group col-lg-12">Cadastro de Vaga</h2>

                            <div className="form-group col-lg-12">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Descrição"
                                required="required"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-lg-12">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Salário"
                                required="required"
                                value={salario}
                                onChange={(e) => setSalario(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-lg-12">
                                <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                id="btnCadastrarVaga"
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