import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function EfetuarInscricao() {
    const [trabalhador, setTrabalhador] = useState("");
    const [trabalhadores, setTrabalhadores] = useState([]);
    const [vaga, setVaga] = useState("");
    const [vagas, setVagas] = useState([]);
    const history = useHistory();

    async function handleEfetuarInscricao(e) {
        e.preventDefault();

        let obj = {
            trabalhador: trabalhador,
            vaga: vaga
        };

        try {
            await api.post("/efetuar_inscricao", obj);

            alert("Inscrição efetuada com sucesso.");

            history.push('/intranet');
        } catch (error) {
            alert(error);
        }
    }

    async function get_trabalhador_vaga() {
        let ativo = 1;

        try {
            let response = await api.get(`/listar_trabalhadores/${'-'}/${ativo}`);
            response.data.trabalhadores.unshift({ id: 0, nomeFantasia: 'Trabalhador' });
            setTrabalhadores(response.data.trabalhadores);

            response = await api.get(`/listar_vagas/${'-'}/${ativo}`);
            response.data.vagas.unshift({ id: 0, nome: 'Vaga' });
            setVagas(response.data.vagas);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        get_trabalhador_vaga();
    }, []);

    return (
        <div className="central">
            <div className="d-flex justify-content-center h-100">
                <div>
                    <form onSubmit={handleEfetuarInscricao}>
                        <div className="form-row">
                            <h2 className="form-group col-lg-12">Inscrição para Vaga</h2>

                            <div className="form-group col-lg-12">
                                <select className="form-control" onChange={(e) => setTrabalhador(e.target.value)}>
                                    {trabalhadores.map((trabalhador) => {
                                        return <option value={trabalhador.id}>{trabalhador.nome}</option>
                                    })}
                                </select>
                            </div>

                            <div className="form-group col-lg-12">
                                <select className="form-control" onChange={(e) => setVaga(e.target.value)}>
                                    {vagas.map((vaga) => {
                                        return <option value={vaga.id}>{vaga.descricao}</option>
                                    })}
                                </select>
                            </div>

                            <div className="form-group col-lg-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    id="btnEfetuarInscricao"
                                >
                                    Inscrever
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
