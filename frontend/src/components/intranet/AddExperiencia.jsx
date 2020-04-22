import React, { useState } from "react";

import SelectExperiencia from "./SelectExperiencia";

export default function AddExperiencia(props) {
  const [experiencias, setExperiencias] = useState([]);    

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

      setExperiencias(experiencias => [...experiencias, novaExperiencia]);
    }
  }

  function remover_experiencia(experiencia_id) {
    props.onRemove(experiencia_id);
    
    setExperiencias(experiencias.filter((experiencia) => experiencia.experiencia_id != experiencia_id ));
  }
  
    return (
      <div className="central">
        <div className="d-flex justify-content-center h-100">
          <div>
            <div className="central">
              <SelectExperiencia submitHandler={handleSubmit} />

              <div className="table-overflow">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Experiência</th>
                      <th scope="col">Nível</th>
                      <th scope="col"></th>
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
