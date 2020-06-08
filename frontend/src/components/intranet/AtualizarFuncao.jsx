import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

export default function AtualizarFuncao({ funcao }) {
    const [novaSigla, setNovaSigla] = useState("");
    const [novoNome, setNovoNome] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (funcao) {
            setNovaSigla(funcao.sigla);
            setNovoNome(funcao.nome);
        }
    }, [funcao]);

    async function handleAtualizarFuncao(e) {
        e.preventDefault();

        let obj = {
            id: funcao.id,
            sigla: novaSigla,
            nome: novoNome,
        };

        try {
            await api.post("/atualizar_funcao", obj);

            alert("Função atualizada com sucesso!");

            history.push('/intranet');
        } catch (error) {
            alert(error);
        }
    }

    async function handleDesativar(e) {
        e.preventDefault();

        let obj = {
            id: funcao.id,
        }

        try {
            const response = await api.post("/desativar_funcao", obj);

            if (response.data.is_ativo)
                alert('Função ativada com sucesso!');
            else
                alert("Função desativada com sucesso!");

            history.push('/intranet');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="rounded">
            <p className="border-bottom">ID - {funcao.id}</p>
            <div className="form-row">

                <div className="form-group col-md-12">
                    <input
                        type="text"
                        className="form-control"
                        required="required"
                        value={novaSigla}
                        onChange={(e) => setNovaSigla(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-12">
                    <input
                        type="text"
                        className="form-control"
                        required="required"
                        value={novoNome}
                        onChange={(e) => setNovoNome(e.target.value)}
                    />
                </div>

                <div className="form-group col-sm-6">
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        id="btAtualizar"
                        onClick={handleAtualizarFuncao}
                        data-toggle="collapse"
                        data-target="#collapseFuncao"
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
                        data-target="#collapseFuncao"
                    >
                        Ativar/Desativar
                    </button>
                </div>
            </div>
        </div>
    );
}
