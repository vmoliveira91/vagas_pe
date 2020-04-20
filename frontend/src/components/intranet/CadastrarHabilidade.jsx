import React, { useState } from "react";

import api from "../../services/api";

export default function CadastrarHabilidade() {
  const [nome, setNome] = useState("");

  async function handleCadastroHabilidade(e) {
    e.preventDefault();

    let obj = {
      descricao: nome,
    };

    try {
      await api.post("/cadastrar_habilidade", obj);

      alert("Habilidade cadastrada com sucesso.");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleCadastroHabilidade}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Habilidade</h2>

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
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnCadastrarHabilidade"
                >
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
