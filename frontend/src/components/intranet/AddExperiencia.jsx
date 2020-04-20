import React, { useState } from "react";

import SelectExperiencia from "./SelectExperiencia";

export default function AddExperiencia() {
  const [experiencias, setExperiencias] = useState([]);    

  async function handleSubmit(e, { nome, nivel }) {
    e.preventDefault();
    
    var novaExperiencia = {
      expNome: nome,
      expNivel: nivel,
    };

    setExperiencias(experiencias => [...experiencias, novaExperiencia]);

    alert(experiencias.expNome, experiencias.expNivel);
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
                          <th scope="row">{experiencia.expNome}</th>
                          <td>{experiencia.expNivel}</td>
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
