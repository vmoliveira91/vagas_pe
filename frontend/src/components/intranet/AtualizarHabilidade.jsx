import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarHabilidade({ hab }) {
  const [novaDesc, setNovaDesc] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(hab)
      setNovaDesc(hab.desc);
  }, [hab]);

  async function handleNovaDesc(e) {
    e.preventDefault();

    let obj = {
      id: hab.id,
      descricao: novaDesc,
    };

    try {
      await api.post("/atualizar_habilidade", obj);

      alert("Habilidade atualizada com sucesso!");

      history.push('/intranet');
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
      const response = await api.post("/desativar_habilidade", obj);

      if(response.data.is_ativo)
        alert('Habilidade ativada com sucesso!');
      else
        alert("Habilidade desativada com sucesso!");
      
      history.push('/intranet');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">ID - {hab.id}</p>
      <div className="form-row">
        <div className="form-group col-md-12">
          <input
            type="text"
            className="form-control"
            required="required"
            value={novaDesc}
            onChange={(e) => setNovaDesc(e.target.value)}
          />
        </div>

        <div className="form-group mt-3 col-sm-6">
          <button
            type="button"
            className="btn btn-primary btn-block"
            id="btAtualizar"
            onClick={handleNovaDesc}
            data-toggle="collapse"
            data-target="#collapseHabilidade"
          >
            Atualizar
          </button>
        </div>

        <div className="form-group mt-3 col-sm-6">
          <button
            type="button"
            className="btn btn-primary btn-block"
            id="btAtualizar"
            onClick={handleDesativar}
            data-toggle="collapse"
            data-target="#collapseHabilidade"
          >
            Ativar/Desativar
          </button>
        </div>
      </div>
    </div>
  );
}
