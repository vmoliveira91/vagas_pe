import React, { useState } from "react";

import api from "../../services/api";

export default function ListarExperiencias() {
  const [experiencias, setExperiencias] = useState([]);
  const [expDesc, setExpDesc] = useState('');

  async function handleListarExperiencias(e) {
    e.preventDefault();
    
    const ativo = 1;
    let experiencia = expDesc;      

    try {
      const response = await api.get(`/listar_experiencias/${experiencia}/${ativo}`);
      
      setExperiencias(response.data.experiencias);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarExperiencias}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Experiências</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={expDesc}
                  onChange={(e) => setExpDesc(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarExperiencias"
                >
                  Buscar/Listar
                </button>
              </div>

              <div className="form-group col-lg-12">
                <div className="table-overflow">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      {experiencias.map((experiencia) => {
                        return (
                          <tr key={experiencia.id}>
                            <th scope="row">{experiencia.id}</th>
                            <td>{experiencia.descricao}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
