import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarExperiencia({ exp }) {
  const [novaDesc, setNovaDesc] = useState('');
  const history = useHistory();

  useEffect(() => {
    if(exp)
      setNovaDesc(exp.desc);
  }, [exp]);

  async function handleNovaDesc(e) {
    e.preventDefault();

    let obj = {
      id: exp.id,
      descricao: novaDesc,
    };

    try {
      await api.post("/atualizar_experiencia", obj);

      alert("Experiência atualizada com sucesso!");

      history.push('/menu');
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: exp.id,
    }

    try {
        const response = await api.post("/desativar_experiencia", obj);

        if(response.data.is_ativo)
          alert('Experiência ativada com sucesso!');
        else
          alert("Experiência desativada com sucesso!");

        history.push('/menu');
      } catch (error) {
        alert(error);
      }
  }

  return (
    <div className="rounded">
      <p className="border-bottom">ID - {exp.id}</p>
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

        <div className="form-group col-sm-6">
          <button
            type="button"
            className="btn btn-primary btn-block"
            id="btAtualizar"
            onClick={handleNovaDesc}
            data-toggle="collapse"
            data-target="#collapseExperiencia"
          >
            Atualizar
          </button>
        </div>

        <div className="form-group col-sm-6">
          <button
            type="button"
            className="btn btn-primary btn-block"
            id="btAtualizar"
            onClick={handleDesativar}
            data-toggle="collapse"
            data-target="#collapseExperiencia"
          >
            Ativar/Desativar
          </button>
        </div>

      </div>
    </div>
  );
}
