import React, { useState } from "react";

import SelectHabilidade from "./SelectHabilidade";

export default function AddHabilidade() {
  const [habilidades, setHabilidades] = useState([]);    

  async function handleSubmit(e, { habilidade, nivel }) {
    e.preventDefault();

    if(habilidade.id == 0 || nivel.id == 0)
      alert('Favor selecionar uma habilidade ou nível');
    else {
      var novaHabilidade = {
        habilidade_id: habilidade.id,
        habilidade_descricao: habilidade.descricao,
        nivel_id: nivel.id,
        nivel_descricao: nivel.descricao
      };
  
      setHabilidades(habilidades => [...habilidades, novaHabilidade]);
    }    
  }
  
    return (
      <div className="central">
        <div className="d-flex justify-content-center h-100">
          <div>
            <div className="central">
              <SelectHabilidade submitHandler={handleSubmit} />

              <div className="table-overflow">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Habilidade</th>
                      <th scope="col">Nível</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {habilidades.map((habilidade, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{habilidade.habilidade_descricao}</th>
                          <td>{habilidade.nivel_descricao}</td>
                          <td>
                            <button type="button" className="btn btn-secondary btn-block">
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
