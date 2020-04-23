import React, { useState } from "react";

import api from "../../services/api";

export default function AtualizarHabilidade({ hab }) {
  const [novaDesc, setNovaDesc] = useState("");

  async function handleNovaDesc(e) {
    e.preventDefault();

    let obj = {
      id: hab.id,
      descricao: novaDesc,
    };

    try {
      await api.post("/atualizar_habilidade", obj);

      alert("Habilidade atualizada com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: hab.id,
    }

    try {
      await api.post("/desativar_habilidade", obj);

      alert("Habilidade desativada com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">{hab.id}. {hab.desc}</p>
      <div className="form-row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control"
            required="required"
            placeholder={hab.desc}
            value={novaDesc}
            onChange={(e) => setNovaDesc(e.target.value)}
          />
        </div>

        <div className="form-check col-lg-3 mt-2">
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


        <div className="form-group mt-3 col-sm-12">
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
  );
}
