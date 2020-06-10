import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarBeneficio({ beneficio }) {
  const [novaDesc, setNovaDesc] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(beneficio)
      setNovaDesc(beneficio.desc);
  }, [beneficio]);

  async function handleNovaDesc(e) {
    e.preventDefault();

    let obj = {
      id: beneficio.id,
      descricao: novaDesc,
    };

    try {
      await api.post("/atualizar_beneficio", obj);

      alert("Benefício atualizado com sucesso!");

      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: beneficio.id,
    }

    try {
      const response = await api.post("/desativar_beneficio", obj);

      if(response.data.is_ativo)
        alert('Benefício ativado com sucesso!');
      else
        alert("Benefício desativado com sucesso!");
      
      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">ID - {beneficio.id}</p>
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
            data-target="#collapseBeneficio"
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
            data-target="#collapseBeneficio"
          >
            Ativar/Desativar
          </button>
        </div>
      </div>
    </div>
  );
}
