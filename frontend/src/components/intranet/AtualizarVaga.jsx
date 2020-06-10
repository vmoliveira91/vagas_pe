import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";
import AddBeneficio from "./AddBeneficio";
import AddExperiencia from "./AddExperiencia";
import AddHabilidade from "./AddHabilidade";

export default function AtualizarVaga({ vaga }) {
    const [novaDescricao, setNovaDescricao] = useState("");
    const [novoSalario, setNovoSalario] = useState("");
    const [empregadores, setEmpregadores] = useState([]);
    const [novoEmpregador, setNovoEmpregador] = useState("");
    const [funcoes, setFuncoes] = useState([]);
    const [novaFuncao, setNovaFuncao] = useState("");
    const [novosBeneficios, setNovosBeneficios] = useState([]);
    const [novasExperiencias, setNovasExperiencias] = useState([]);
    const [novasHabilidades, setNovasHabilidades] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (vaga) {
            get_empregadores_funcoes();
            setNovaDescricao(vaga.descricao);
            setNovoSalario(vaga.salario);
            setNovoEmpregador(vaga.empregador);
            setNovaFuncao(vaga.funcao);
            setNovosBeneficios(vaga.beneficios);
            setNovasExperiencias(vaga.experiencias);
            setNovasHabilidades(vaga.habilidades);
        }
    }, [vaga]);

    async function handleAtualizarVaga(e) {
        e.preventDefault();

        let obj = {
            id: vaga.id,
            descricao: novaDescricao,
            salario: novoSalario,
            empregador: novoEmpregador,
            funcao: novaFuncao,
            beneficios: novosBeneficios.map((beneficio) => {
                return {
                    beneficio_id: parseInt(beneficio.beneficio_id),
                    beneficio_descricao: beneficio.beneficio_descricao
                }
            }),
            experiencias: novasExperiencias.map((experiencia) => {
                return {
                    experiencia_id: parseInt(experiencia.experiencia_id),
                    experiencia_descricao: experiencia.experiencia_descricao,
                    tempo_id: parseInt(experiencia.tempo_id),
                    tempo_descricao: experiencia.tempo_descricao
                }
            }),
            habilidades: novasHabilidades.map((habilidade) => {
                return {
                    habilidade_id: parseInt(habilidade.habilidade_id),
                    habilidade_descricao: habilidade.habilidade_descricao,
                    nivel_id: parseInt(habilidade.nivel_id),
                    nivel_descricao: habilidade.nivel_descricao
                }
            }),
            ativo: 1,
        };

        try {
            await api.post("/atualizar_vaga", obj);

            alert("Vaga atualizada com sucesso!");

            history.push('/menu');
        } catch (error) {
            alert(error);
        }
    }

    async function get_empregadores_funcoes() {
        let ativo = 1;

        try {
            let response = await api.get(`/listar_empregadores/${'-'}/${ativo}`);
            setEmpregadores(response.data.empregadores);

            response = await api.get(`/listar_funcoes/${'-'}/${ativo}`);
            setFuncoes(response.data.funcoes);
        } catch (error) {
            alert(error);
        }
    }

    async function handleDesativar(e) {
        e.preventDefault();

        let obj = {
            id: vaga.id,
        };

        try {
            const response = await api.post("/desativar_vaga", obj);

            if (response.data.is_ativo)
                alert("Vaga ativada com sucesso!");
            else
                alert("Vaga desativada com sucesso!");

            history.push('/menu');
        } catch (error) {
            alert(error);
        }
    }

    function handleAddBeneficio(novoBeneficio) {
        setNovosBeneficios(beneficios => [...beneficios, novoBeneficio]);
    }

    function handleRemoveBeneficio(beneficio_id) {
        setNovosBeneficios(beneficios => beneficios.filter((beneficio) => beneficio.beneficio_id != beneficio_id));
    }

    function handleAddExperiencia(novaExperiencia) {
        setNovasExperiencias(experiencias => [...experiencias, novaExperiencia]);
    }

    function handleRemoveExperiencia(experiencia_id) {
        setNovasExperiencias(experiencias => experiencias.filter((experiencia) => experiencia.experiencia_id != experiencia_id));
    }

    function handleAddHabilidade(novaHabilidade) {
        setNovasHabilidades(habilidades => [...habilidades, novaHabilidade]);
    }

    function handleRemoveHabilidade(habilidade_id) {
        setNovasHabilidades(habilidades => habilidades.filter((habilidade) => habilidade.habilidade_id != habilidade_id));
    }

    return (
        <div>
            <p className="border-bottom">ID - {vaga.id}</p>
            <div className="form-row">
                <div className="form-group col-lg-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Descrição"
                        required="required"
                        value={novaDescricao}
                        onChange={(e) => setNovaDescricao(e.target.value)}
                    />
                </div>

                <div className="form-group col-lg-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Salário"
                        required="required"
                        value={novoSalario}
                        onChange={(e) => setNovoSalario(e.target.value)}
                    />
                </div>

                <div className="form-group col-lg-12">
                    <select className="form-control" onChange={(e) => setNovaFuncao(e.target.value)}>
                        {funcoes.map((funcao) => {
                            return <option value={funcao.id}>{funcao.nome}</option>
                        })}
                    </select>
                </div>

                <div className="form-group col-lg-12">
                    <select className="form-control" onChange={(e) => setNovoEmpregador(e.target.value)}>
                        {empregadores.map((empregador) => {
                            return <option value={empregador.id}>{empregador.nomeFantasia}</option>
                        })}
                    </select>
                </div>

                <AddBeneficio beneficios={novosBeneficios} onAdd={handleAddBeneficio} onRemove={handleRemoveBeneficio} local={'atualizar'} />

                <AddExperiencia experiencias={novasExperiencias} onAdd={handleAddExperiencia} onRemove={handleRemoveExperiencia} local={'atualizar'} />

                <AddHabilidade habilidades={novasHabilidades} onAdd={handleAddHabilidade} onRemove={handleRemoveHabilidade} local={'atualizar'} />

                <div className="form-group col-lg-6">
                    <button
                        type="button"
                        className="btn btn-primary btn-block mt-3"
                        id="btAtualizar"
                        onClick={handleAtualizarVaga}
                        data-toggle="collapse"
                        data-target="#collapseVaga"
                    >
                        Atualizar
                    </button>
                </div>

                <div className="form-group col-lg-6">
                    <button
                        type="button"
                        className="btn btn-primary btn-block mt-3"
                        id="btAtualizar"
                        onClick={handleDesativar}
                    >
                        Ativar/Desativar
                    </button>
                </div>
            </div>
        </div>
    );
}
