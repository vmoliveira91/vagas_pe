import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarNivel({ nivel }) {
  const [novaDesc, setNovaDesc] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(nivel)
      setNovaDesc(nivel.desc);
  }, [nivel]);

  async function handleNovaDesc(e) {
    e.preventDefault();

    let obj = {
      id: nivel.id,
      descricao: novaDesc,
    };

    try {
      await api.post("/atualizar_nivel", obj);

      alert("Nível atualizado com sucesso!");

      history.push('/intranet');
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: nivel.id,
    }

    try {
      const response = await api.post("/desativar_nivel", obj);

      if(response.data.is_ativo)
        alert('Nível ativado com sucesso!');
      else
        alert("Nível desativado com sucesso!");
      
      history.push('/intranet');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">ID - {nivel.id}</p>
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
            data-target="#collapseNivel"
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
            data-target="#collapseNivel"
          >
            Ativar/Desativar
          </button>
        </div>
      </div>
    </div>
  );
}
