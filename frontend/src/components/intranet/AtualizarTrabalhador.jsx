import React, { useState, useEffect } from "react";

import api from "../../services/api";

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
      experiencias: novasExperiencias,
      habilidades: novasHabilidades,
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
      await api.post("/desativar_trabalhador", obj);

      alert("Trabalhador desativado com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">{trabalhador.id}. {trabalhador.nome}</p>
      <div className="form-row">
        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.nome}
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        </div>

        <div className="form-group col-md-7">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.cpf}
            value={novoCpf}
            onChange={(e) => setNovoCpf(e.target.value)}
          />
        </div>

        <div className="form-group col-sm-5">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.rg}
            value={novoRg}
            onChange={(e) => setNovoRg(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.endereco}
            value={novoEndereco}
            onChange={(e) => setNovoEndereco(e.target.value)}
          />
        </div>

        <div className="form-group col-sm-5">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.nacionalidade}
            value={novaNacionalidade}
            onChange={(e) => setNovaNacionalidade(e.target.value)}
          />
        </div>

        <div className="form-group col-md-7">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.telefone}
            value={novoTelefone}
            onChange={(e) => setNovoTelefone(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.email}
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.sexo}
            value={novoSexo}
            onChange={(e) => setNovoSexo(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            required="required"
            //placeholder={trabalhador.data_nascimento}
            value={novaDataNascimento}
            onChange={(e) => setNovaDataNascimento(e.target.value)}
          />
        </div>

        <div className="form-group col-sm-5">
          <input
            type="text"
            className="form-control"
            required="required"
            placeholder={trabalhador.data_validade}
            value={novaDataValidade}
            onChange={(e) => setNovaDataValidade(e.target.value)}
          />
        </div>

        <div className="form-group col-md-7">
          <input
            type="text"
            className="form-control"
            required="required"
            placeholder={trabalhador.status}
            value={novoStatus}
            onChange={(e) => setNovoStatus(e.target.value)}
          />
        </div>
        
        <div className="form-check col-lg-12 pt-1 bg-white" style={{width: "100%", border: "1px solid #dddddd", borderRadius: "5px" }}>
            <label
                for="exampleCheck1"
            >
                Ativo
            </label>
            <input
                className="ml-1"
                type="checkbox"
                id="exampleCheck1"
            />           
        </div>

        <div className="form-group col-lg-12">
            <button
            type="button"
            className="btn btn-primary btn-block mt-3"
            id="btAtualizar"
            onClick={handleAtualizarTrabalhador}
            >
            Enviar
            </button>
        </div>
      </div>
    </div>
  );
}
