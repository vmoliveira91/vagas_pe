import React, { useEffect, useState } from "react";
import api from '../../services/api';

export default function SelectExperiencia({ submitHandler }) {
  const [experiencias, setExperiencias] = useState([]);
  const [tempos, setTempos] = useState([]);

  let _experiencia, _tempo;

  async function get_experiencias_tempos() {
    let ativo = 1;

    try {
      let response = await api.get(`/listar_experiencias/${'-'}/${ativo}`);
      response.data.experiencias.unshift({id: 0, descricao: 'Selecionar uma experiência'});
      setExperiencias(response.data.experiencias);     

      response = await api.get(`/listar_tempos/${'-'}/${ativo}`);
      response.data.tempos.unshift({id: 0, descricao: 'Selecionar um tempo'});
      setTempos(response.data.tempos);
    } catch(error) {
      alert(error);
    }
  }

  useEffect(() => {
    get_experiencias_tempos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(e, {
      experiencia: {
        id: _experiencia.value,
        descricao: experiencias[_experiencia.value].descricao
      },
      tempo: {
        id: _tempo.value,
        descricao: tempos[_tempo.value].descricao
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <h2 className="form-group col-lg-12">Experiência</h2>

          <div className="form-group col-md-6">
            <select className="form-control" ref={(select) => (_experiencia = select)}>
              {experiencias.map((experiencia) => {
                return <option value={experiencia.id}>{experiencia.descricao}</option>
              })}
            </select>
          </div>

          <div className="form-group col-md-4">
            <select className="form-control" ref={(select) => (_tempo = select)}>
              {tempos.map((tempo) => {
                return <option value={tempo.id}>{tempo.descricao}</option>
              })}
            </select>
          </div>

          <div className="form-group col-sm-2">
            <button type="submit" className="btn btn-primary btn-block">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
