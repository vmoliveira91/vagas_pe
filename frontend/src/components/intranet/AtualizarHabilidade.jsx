import React, { useState } from "react";

import api from "../../services/api";

export default function AtualizarHabilidade() {
  const [novaDesc, setNovaDesc] = useState("");

  async function handleNovaDesc(e) {
    e.preventeDefault();

    let obj = {
      id: "",
      descricao: "",
    };

    try {
      api.post("/atualizar-habilidade", obj);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <input
                  type="text"
                  className="form-control"
                  required="required"
                  placeholder="Nova Descrição"
                  value={novaDesc}
                  onChange={(e) => setNovaDesc(e.target.value)}
                />
              </div>

              <div className="form-group col-md-4">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  id="btAtualizar"
                  onClick={handleNovaDesc}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
