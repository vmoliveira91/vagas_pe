import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function CadastrarExperiencia() {
  const [nome, setNome] = useState("");
  const history = useHistory();

  async function handleCadastroExperiencia(e) {
    e.preventDefault();

    let obj = {
      descricao: nome,
    };

    try {
      await api.post("/cadastrar_experiencia", obj);

      alert("Experiência cadastrada com sucesso.");

      history.push('/intranet');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleCadastroExperiencia}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Experiência</h2>

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
                  id="btnCadastrarExperiencia"
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