import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import AddHabilidade from "./AddHabilidade";
import AddExperiencia from './AddExperiencia';
import api from '../../services/api';

export default function Trabalhador() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [endereco, setEndereco] = useState('');
  const [experiencias, setExperiencias] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const history = useHistory();

  async function handleTrabalhador(e) {
    e.preventDefault();

    try {
      let obj = {
        nome: nome,
        cpf: cpf,
        rg: rg,
        endereco: endereco,
        nacionalidade: nacionalidade,
        telefone: telefone,
        email: email,
        sexo: sexo,
        data_nascimento: nascimento,
        experiencias: experiencias,
        habilidades: habilidades
      }

      await api.post('/cadastrar_trabalhador', obj);

      alert('Trabalhador cadastrado com sucesso!');

      history.push('/intranet');

    } catch(error) {
      alert(error);
    }      
  }

  function handleAddExperiencia(novaExperiencia) {
    setExperiencias(experiencias => [...experiencias, novaExperiencia]);
  }

  function handleRemoveExperiencia(experiencia_id) {
    setExperiencias(experiencias => experiencias.filter((experiencia) => experiencia.experiencia_id != experiencia_id));
  }

  function handleAddHabilidade(novaHabilidade) {
    setHabilidades(habilidades => [...habilidades, novaHabilidade]);
  }

  function handleRemoveHabilidade(habilidade_id) {
    setHabilidades(habilidades => habilidades.filter((habilidade) => habilidade.habilidade_id != habilidade_id));
  }

  return (
      <div>
      <div className="justify-content-center align-items-center p-5 ">
      <div className="d-flex justify-content-center h-100">
              <div className="row col-lg-12">
                  <div className="row col-md-4">
                  <form onSubmit={handleTrabalhador}>
                      
                          <div className="form-row">
                    <h2 className="form-group">Cadastro de Trabalhador</h2>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        required="required"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        required="required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="RG"
                        required="required"
                        value={rg}
                        onChange={(e) => setRg(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CPF"
                        required="required"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Nome"
                        required="required"
                        valu={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone"
                        required="required"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sexo"
                        required="required"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nacionalidade"
                        required="required"
                        value={nacionalidade}
                        onChange={(e) => setNacionalidade(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Endereço"
                        required="required"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                      />
                    </div>                           

                    <div className="form-group col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        id="btnTrabalhador"
                      >
                        Cadastrar
                      </button>
                    </div>
                      </div>
                    </form>
                  </div>  
                  <div className="row col-md-8">
                      <div className="col-md-6">
                        <AddExperiencia experiencias={experiencias} onAdd={handleAddExperiencia} onRemove={handleRemoveExperiencia}/>
                    </div>

                    <div className="col-md-6">
                        <AddHabilidade habilidades={habilidades} onAdd={handleAddHabilidade} onRemove={handleRemoveHabilidade}/>
                    </div>
                </div>
        </div>
      </div>
    </div>
    </div>
  );
}
