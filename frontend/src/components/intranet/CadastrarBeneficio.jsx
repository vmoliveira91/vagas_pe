import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function CadastrarBeneficio() {
  const [descricao, setDescricao] = useState("");
  const history = useHistory();

  async function handleCadastroBeneficio(e) {
    e.preventDefault();

    let obj = {
      descricao: descricao,
    };

    try {
      await api.post("/cadastrar_beneficio", obj);

      alert("Benefício cadastrado com sucesso.");

      history.push('/intranet');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleCadastroBeneficio}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Beneficio</h2>

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
                  id="btnCadastrarBeneficio"
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
