import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarSituacao({ situacao }) {
  const [novaDesc, setNovaDesc] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(situacao)
      setNovaDesc(situacao.desc);
  }, [situacao]);

  async function handleNovaDesc(e) {
    e.preventDefault();

    let obj = {
      id: situacao.id,
      descricao: novaDesc,
    };

    try {
      await api.post("/atualizar_situacao", obj);

      alert("Situação atualizado com sucesso!");

      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: situacao.id,
    }

    try {
      const response = await api.post("/desativar_situacao", obj);

      if(response.data.is_ativo)
        alert('Situação ativado com sucesso!');
      else
        alert("Situação desativado com sucesso!");
      
      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">ID - {situacao.id}</p>
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
            data-target="#collapseSituacao"
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
            data-target="#collapseSituacao"
          >
            Ativar/Desativar
          </button>
        </div>
      </div>
    </div>
  );
}
