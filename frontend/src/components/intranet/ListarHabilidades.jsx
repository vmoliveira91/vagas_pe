import React, { useState } from "react";

import api from "../../services/api";

export default function ListarHabilidades() {
  const [habilidades, setHabilidades] = useState([]);
  const [habDesc, setHabDesc] = useState('');

  async function handleListarHabilidades(e) {
    e.preventDefault();
    
    const ativo = 1;
    let habilidade = habDesc;      

    try {
      if(habilidade == '')
        habilidade = '-';
      const response = await api.get(`/listar_habilidades/${habilidade}/${ativo}`);
      
      setHabilidades(response.data.habilidades);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleListarHabilidades}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Listagem de Habilidade</h2>

              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={habDesc}
                  onChange={(e) => setHabDesc(e.target.value)}
                />
              </div>

              <div className="form-group col-md-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  id="btnListarHabilidades"
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
                      {habilidades.map((habilidade) => {
                        return (
                          <tr key={habilidade.id}>
                            <th scope="row">{habilidade.id}</th>
                            <td>{habilidade.descricao}</td>
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
