import React, { useState } from "react";

import Endereco from "./Endereco";

export default function Empresa() {
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  async function handleEmpresa(e) {
    e.preventDefault();

    alert(
      `Razão Social: ${razaoSocial} / Nome Fantasia: ${nomeFantasia} / CNPJ: ${cnpj} / Telefone: ${telefone} / E-mail: ${email}`
    );
  }
  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleEmpresa}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Empresa</h2>

              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Razão Social"
                  required="required"
                  value={razaoSocial}
                  onChange={(e) => setRazaoSocial(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome Fantasia"
                  required="required"
                  value={nomeFantasia}
                  onChange={(e) => setNomeFantasia(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="CNPJ"
                  required="required"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
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

              <div className="form-group col-lg-12">
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

              <div className="form-group col-lg-12">
                <button type="submit" className="btn btn-primary btn-block">
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
