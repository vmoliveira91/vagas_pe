import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarTempo({ tempo }) {
  const [novaDesc, setNovaDesc] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(tempo)
      setNovaDesc(tempo.desc);
  }, [tempo]);

  async function handleNovaDesc(e) {
    e.preventDefault();

    let obj = {
      id: tempo.id,
      descricao: novaDesc,
    };

    try {
      await api.post("/atualizar_tempo", obj);

      alert("Tempo atualizado com sucesso!");

      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: tempo.id,
    }

    try {
      const response = await api.post("/desativar_tempo", obj);

      if(response.data.is_ativo)
        alert('Tempo ativado com sucesso!');
      else
        alert("Tempo desativado com sucesso!");
      
      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">ID - {tempo.id}</p>
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
            data-target="#collapseTempo"
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
            data-target="#collapseTempo"
          >
            Ativar/Desativar
          </button>
        </div>
      </div>
    </div>
  );
}
