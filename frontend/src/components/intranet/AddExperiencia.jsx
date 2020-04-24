import React, { useState, useEffect } from "react";

import SelectExperiencia from "./SelectExperiencia";

export default function AddExperiencia(props) {
  const [experiencias, setExperiencias] = useState([]);
  
  useEffect(() => {
    if(props.experiencias) {
      for(let i = 0; i < props.experiencias.length; i++) {
        let experiencia = {
          experiencia_id: props.experiencias[i].experiencia_id,
          experiencia_descricao: props.experiencias[i].experiencia_descricao,
          tempo_id: props.experiencias[i].tempo_id,
          tempo_descricao: props.experiencias[i].tempo_descricao
        }
        setExperiencias(experiencias => [...experiencias, experiencia]);
      }
    }
  }, [props.experiencias]);

  function handleSubmit(e, { experiencia, tempo }) {
    e.preventDefault();
    
    if(experiencia.id == 0 || tempo.id == 0) {
      alert('Favor selecionar uma experiência e/ou tempo!');
    } else {
      var novaExperiencia = {
        experiencia_id: experiencia.id,
        experiencia_descricao: experiencia.descricao,
        tempo_id: tempo.id,
        tempo_descricao: tempo.descricao
      };
      
      props.onAdd(novaExperiencia);
      
      setExperiencias([]);
    }
  }

  function remover_experiencia(experiencia_id) {
    props.onRemove(experiencia_id);
    
    setExperiencias([]);
  }
  
    return (
        <div>
        <div className="d-flex justify-content-center h-100">
          <div>
            <div className="row justify-content-center">
              <SelectExperiencia submitHandler={handleSubmit} />

              <div className="row col-md-12 table-overflow">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="tab-titulo" scope="col">Experiência</th>
                      <th className="tab-titulo" scope="col">Tempo</th>
                      <th className="tab-titulo" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {experiencias.map((experiencia, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{experiencia.experiencia_descricao}</th>
                          <td>{experiencia.tempo_descricao}</td>
                          <td>
                            <button value={experiencia.experiencia_id} onClick={(e) => remover_experiencia(e.target.value)} type="button" className="btn btn-secondary btn-block">
                              -
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
