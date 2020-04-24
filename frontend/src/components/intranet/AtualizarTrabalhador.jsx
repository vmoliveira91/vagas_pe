import React, { useState, useEffect } from "react";

import api from "../../services/api";
import AddExperiencia from "./AddExperiencia";
import AddHabilidade from "./AddHabilidade";

export default function AtualizarTrabalhador({ trabalhador }) {
  const [novoNome, setNovoNome] = useState("");
  const [novoCpf, setNovoCpf] = useState("");
  const [novoRg, setNovoRg] = useState("");
  const [novoEndereco, setNovoEndereco] = useState("");
  const [novaNacionalidade, setNovaNacionalidade] = useState("");
  const [novoTelefone, setNovoTelefone] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [novoSexo, setNovoSexo] = useState("");
  const [novaDataNascimento, setNovaDataNascimento] = useState("");
  const [novaDataValidade, setNovaDataValidade] = useState("");
  const [novoStatus, setNovoStatus] = useState("");
  const [novasExperiencias, setNovasExperiencias] = useState([]);
  const [novasHabilidades, setNovasHabilidades] = useState([]);

  useEffect(() => {
    if(trabalhador) {
      setNovoNome(trabalhador.nome);
      setNovoCpf(trabalhador.cpf);
      setNovoRg(trabalhador.rg);
      setNovoEndereco(trabalhador.endereco);
      setNovaNacionalidade(trabalhador.nacionalidade);
      setNovoTelefone(trabalhador.telefone);
      setNovoEmail(trabalhador.email);
      setNovoSexo(trabalhador.sexo);
      setNovaDataNascimento(trabalhador.data_nascimento);
      setNovasExperiencias(trabalhador.experiencias);
      setNovasHabilidades(trabalhador.habilidades);
    }    
  }, [trabalhador]);

  async function handleAtualizarTrabalhador(e) {
    e.preventDefault();
    
    let obj = {
      id: trabalhador.id,
      nome: novoNome,
      cpf: novoCpf,
      rg: novoRg,
      endereco: novoEndereco,
      nacionalidade: novaNacionalidade,
      telefone: novoTelefone,
      email: novoEmail,
      sexo: novoSexo,
      data_nascimento: novaDataNascimento,
      data_validade: novaDataValidade,
      status: novoStatus,
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
      await api.post("/atualizar_trabalhador", obj);

      alert("Trabalhador atualizado com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: trabalhador.id,
    };

    try {
      const response = await api.post("/desativar_trabalhador", obj);

      if(response.data.is_ativo)
        alert("Trabalhador ativado com sucesso!");
      else
        alert("Trabalhador desativado com sucesso!");
    } catch (error) {
      alert(error);
    }
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
      <p className="border-bottom">ID - {trabalhador.id}</p>
      <div className="form-row">
        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        </div>

        <div className="form-group col-md-7">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novoCpf}
            onChange={(e) => setNovoCpf(e.target.value)}
          />
        </div>

        <div className="form-group col-sm-5">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novoRg}
            onChange={(e) => setNovoRg(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novoEndereco}
            onChange={(e) => setNovoEndereco(e.target.value)}
          />
        </div>

        <div className="form-group col-sm-5">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novaNacionalidade}
            onChange={(e) => setNovaNacionalidade(e.target.value)}
          />
        </div>

        <div className="form-group col-md-7">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novoTelefone}
            onChange={(e) => setNovoTelefone(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novoSexo}
            onChange={(e) => setNovoSexo(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novaDataNascimento}
            onChange={(e) => setNovaDataNascimento(e.target.value)}
          />
        </div>

        <AddExperiencia experiencias={novasExperiencias} onAdd={handleAddExperiencia} onRemove={handleRemoveExperiencia} local={'atualizar'}/>

        <AddHabilidade habilidades={novasHabilidades} onAdd={handleAddHabilidade} onRemove={handleRemoveHabilidade} local={'atualizar'} />

        <div className="form-group col-lg-6">
            <button
            type="button"
            className="btn btn-primary btn-block mt-3"
            id="btAtualizar"
            onClick={handleAtualizarTrabalhador}
            data-toggle="collapse"
            data-target="#collapseTrabalhador"
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
