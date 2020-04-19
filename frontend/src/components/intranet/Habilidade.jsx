import React, { useState } from "react";

import CadastroHabilidade from "./CadastroHabilidade";

export default function Habilidade() {
  const [habilidades, setHabilidades] = useState([]);    

  async function handleSubmit(e, { nome, nivel }) {
    e.preventDefault();
    
    var novaHabilidade = {
      habNome: nome,
      habNivel: nivel,
    };

    setHabilidades(habilidades => [...habilidades, novaHabilidade]);

    alert(habilidades.habNome, habilidades.habNivel);
  }
  
    return (
      <div className="central">
        <div className="d-flex justify-content-center h-100">
          <div>
            <div className="central">
              <CadastroHabilidade submitHandler={handleSubmit} />

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
                          <th scope="row">{habilidade.habNome}</th>
                          <td>{habilidade.habNivel}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-secondary btn-block"
                            >
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
