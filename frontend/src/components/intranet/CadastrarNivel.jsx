import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function CadastrarNivel() {
  const [descricao, setDescricao] = useState("");
  const history = useHistory();

  async function handleCadastroNivel(e) {
    e.preventDefault();

    let obj = {
      descricao: descricao,
    };

    try {
      await api.post("/cadastrar_nivel", obj);

      alert("Nível cadastrado com sucesso.");

      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleCadastroNivel}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Nível</h2>

              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  required="required"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnCadastrarNivel"
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
