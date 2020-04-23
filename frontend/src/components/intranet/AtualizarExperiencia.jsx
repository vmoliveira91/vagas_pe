import React, { useState, useEffect } from "react";

import api from "../../services/api";

export default function AtualizarExperiencia({ exp }) {
  const [novaDesc, setNovaDesc] = useState('');
  
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
        await api.post("/desativar_experiencia", obj);

        alert("Experiência desativada com sucesso!");
      } catch (error) {
        alert(error);
      }
  }

  return (
    <div className="rounded">
      <p className="border-bottom">{exp.id}. {exp.desc}</p>
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

        <div className="form-group col-sm-4">
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
