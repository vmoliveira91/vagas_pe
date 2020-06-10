import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

export default function AtualizarInscricao({ inscricao }) {
    const [trabalhadores, setTrabalhadores] = useState([]);
    const [novoTrabalhador, setNovoTrabalhador] = useState("");
    const [vagas, setVagas] = useState([]);
    const [novaVaga, setNovaVaga] = useState("");
    const [situacoes, setSituacoes] = useState([]);
    const [novaSituacao, setNovaSituacao] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (inscricao)
            setNovoTrabalhador(inscricao.trabalhador);
            setNovaVaga(inscricao.vaga);
            setNovaSituacao(inscricao.situacao);
    }, [inscricao]);

    async function handleAtualizarInscricao(e) {
        e.preventDefault();

        let obj = {
            id: inscricao.id,
            //trabalhador: novo_trabalhador,
            //vaga: nova_vaga,
            //situacao: nova_situacao
        };

        try {
            await api.post("/atualizar_inscricao", obj);

            alert("Inscrição atualizada com sucesso!");

            history.push('/menu');
        } catch (error) {
            alert(error);
        }
    }

    async function handleDesativar(e) {
        e.preventDefault();

        let obj = {
            id: inscricao.id,
        }

        try {
            const response = await api.post("/desativar_inscricao", obj);

            if (response.data.is_ativo)
                alert('Inscrição ativada com sucesso!');
            else
                alert("Inscrição desativada com sucesso!");

            history.push('/menu');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="rounded">
            <p className="border-bottom">ID - {inscricao.id}</p>
            <div className="form-row">

                <div className="form-group col-lg-12">
                    <select className="form-control" onChange={(e) => setNovoTrabalhador(e.target.value)}>
                        {trabalhadores.map((trabalhador) => {
                            return <option value={trabalhador.id}>{trabalhador.nome}</option>
                        })}
                    </select>
                </div>

                <div className="form-group col-lg-12">
                    <select className="form-control" onChange={(e) => setNovaVaga(e.target.value)}>
                        {vagas.map((vaga) => {
                            return <option value={vaga.id}>{vaga.descricao}</option>
                        })}
                    </select>
                </div>

                <div className="form-group col-lg-12">
                    <select className="form-control" onChange={(e) => setNovaSituacao(e.target.value)}>
                        {situacoes.map((situacao) => {
                            return <option value={situacao.id}>{situacao.descricao}</option>
                        })}
                    </select>
                </div>

                <div className="form-group col-sm-6">
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        id="btAtualizar"
                        onClick={handleAtualizarInscricao}
                        data-toggle="collapse"
                        data-target="#collapseInscricao"
                    >
                        Atualizar
                    </button>
                </div>

                <div className="form-group col-sm-6">
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        id="btAtualizar"
                        onClick={handleDesativar}
                        data-toggle="collapse"
                        data-target="#collapseInscricao"
                    >
                        Ativar/Desativar
                    </button>
                </div>
            </div>
        </div>
    );
}
