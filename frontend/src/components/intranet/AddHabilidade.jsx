import React, { useState, useEffect } from "react";

import SelectHabilidade from "./SelectHabilidade";

export default function AddHabilidade(props) {
  const [habilidades, setHabilidades] = useState([]);    

  useEffect(() => {
    if(props.habilidades) {
      for(let i = 0; i < props.habilidades.length; i++) {
        let habilidade = {
          habilidade_id: props.habilidades[i].habilidade_id,
          habilidade_descricao: props.habilidades[i].habilidade_descricao,
          nivel_id: props.habilidades[i].nivel_id,
          nivel_descricao: props.habilidades[i].nivel_descricao
        }
        setHabilidades(habilidades => [...habilidades, habilidade]);
      }
    }
  }, [props.habilidades]);

  function handleSubmit(e, { habilidade, nivel }) {
    e.preventDefault();

    if(habilidade.id == 0 || nivel.id == 0)
      alert('Favor selecionar uma habilidade e/ou nível!');
    else {
      var novaHabilidade = {
        habilidade_id: habilidade.id,
        habilidade_descricao: habilidade.descricao,
        nivel_id: nivel.id,
        nivel_descricao: nivel.descricao
      };
      
      props.onAdd(novaHabilidade);

      setHabilidades([]);
    }    
  }

  function remover_habilidade(habilidade_id) {
    props.onRemove(habilidade_id);

    setHabilidades([]);
  }
  
    return (
      <div>
        <div className="d-flex justify-content-center h-100">
          <div>
            <div className="row justify-content-center">
              <SelectHabilidade submitHandler={handleSubmit} />

              <div className="row col-md-12 table-overflow">
                <table className="table">
                  <thead>
                    <tr>
                    <th className="tab-titulo" scope="col">Habilidade</th>
                    <th className="tab-titulo" scope="col">Nível</th>
                    <th className="tab-titulo" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {habilidades.map((habilidade, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{habilidade.habilidade_descricao}</th>
                          <td>{habilidade.nivel_descricao}</td>
                          <td>
                            <button value={habilidade.habilidade_id} onClick={(e) => remover_habilidade(e.target.value)} type="button" className="btn btn-secondary btn-block">
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
