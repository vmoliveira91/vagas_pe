import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarEmpregador({ empregador }) {
    const [novaRazaoSocial, setNovaRazaoSocial] = useState("");
    const [novoNomeFantasia, setNovoNomeFantasia] = useState("");
    const [novoCnpj, setNovoCnpj] = useState("");
    const [novoEndereco, setNovoEndereco] = useState("");
    const [novoTelefone, setNovoTelefone] = useState("");
    const [novoEmail, setNovoEmail] = useState("");
    const [novaDataValidade, setNovaDataValidade] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (empregador) {
            setNovaRazaoSocial(empregador.razaoSocial);
            setNovoNomeFantasia(empregador.nomeFantasia);
            setNovoCnpj(empregador.cnpj);
            setNovoEndereco(empregador.endereco);
            setNovoTelefone(empregador.telefone);
            setNovoEmail(empregador.email);
            setNovaDataValidade(empregador.data_validade);
        }
    }, [empregador]);

    async function handleAtualizarEmpregador(e) {
        e.preventDefault();

        let obj = {
            id: empregador.id,
            razao_social: novaRazaoSocial,
            nome_fantasia: novoNomeFantasia,
            cpf: novoCnpj,
            endereco: novoEndereco,
            telefone: novoTelefone,
            email: novoEmail,
            data_validade: novaDataValidade,
            ativo: 1,
        };

        try {
            await api.post("/atualizar_empregador", obj);

            alert("Empregador atualizado com sucesso!");

            history.push('/intranet');
        } catch (error) {
            alert(error);
        }
    }

    async function handleDesativar(e) {
        e.preventDefault();

        let obj = {
            id: empregador.id,
        };

        try {
            const response = await api.post("/desativar_empregador", obj);

            if (response.data.is_ativo)
                alert("Empregador ativado com sucesso!");
            else
                alert("Empregador desativado com sucesso!");

            history.push('/intranet');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <p className="border-bottom">ID - {empregador.id}</p>
            <div className="form-row">
                <div className="form-group col-lg-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Razão Social"
                        required="required"
                        value={novaRazaoSocial}
                        onChange={(e) => setNovaRazaoSocial(e.target.value)}
                    />
                </div>

                <div className="form-group col-lg-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome Fantasia"
                        required="required"
                        value={novoNomeFantasia}
                        onChange={(e) => setNovoNomeFantasia(e.target.value)}
                    />
                </div>

                <div className="form-group col-lg-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CNPJ"
                        required="required"
                        value={novoCnpj}
                        onChange={(e) => setNovoCnpj(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone"
                        required="required"
                        value={novoTelefone}
                        onChange={(e) => setNovoTelefone(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-12">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        required="required"
                        value={novoEmail}
                        onChange={(e) => setNovoEmail(e.target.value)}
                    />
                </div>

                <div className="form-group col-lg-6">
                    <button
                        type="button"
                        className="btn btn-primary btn-block mt-3"
                        id="btAtualizar"
                        onClick={handleAtualizarEmpregador}
                        data-toggle="collapse"
                        data-target="#collapseEmpregador"
                    >
                        Atualizar
                    </button>
                </div>

                <div className="form-group col-lg-6">
                    <button
                        type="button"
                        className="btn btn-primary btn-block mt-3"
                        id="btDesativar"
                        onClick={handleDesativar}
                    >
                        Ativar/Desativar
                    </button>
                </div>
            </div>
        </div>
    );
}
