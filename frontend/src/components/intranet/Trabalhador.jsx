import React, { useState } from "react";

import Endereco from "./Endereco";
import AddHabilidade from "./AddHabilidade";

export default function Trabalhador() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");

  async function handleTrabalhador(e) {
    e.preventDefault();

    alert(
      `RG: ${rg} / CPF: ${cpf} / Nome: ${nome} / E-mail: ${email} / Data de Nascimento: ${nascimento} / Telefone: ${nacionalidade}`
    );
  }

  return (
    <div className="central">
          <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleTrabalhador}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Trabalhador</h2>

              <div className="form-group col-lg-12">
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
                <input
                  type="text"
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

              <div className="form-group col-lg-6">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Nome"
                  required="required"
                  valu={nascimento}
                  onChange={(e) => setNascimento(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-6">
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

              <div className="form-group col-md-6">
                <button
                  type="button"
                  className="btn btn-secondary btn-block"
                  data-toggle="modal"
                  data-target="#endereco"
                >
                  Endereço
                </button>

                <div
                  className="modal fade"
                  id="endereco"
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="endereco">
                          Endereço
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body">
                        <Endereco />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-lg-6">
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
          <AddHabilidade />
        </div>
      </div>
    </div>
  );
}
