import React, { useEffect, useState } from "react";
import api from '../../services/api';

export default function SelectHabilidade({ submitHandler }) {
  const [habilidades, setHabilidades] = useState([]);  
  const [niveis, setNiveis] = useState([]);
  
  let _habilidade, _nivel;

  async function get_habilidades_niveis() {
    let ativo = 1;

    try {
      let response = await api.get(`/listar_habilidades/${'-'}/${ativo}`);
      response.data.habilidades.unshift({id: 0, descricao: 'Habilidade'});
      setHabilidades(response.data.habilidades);

      response = await api.get(`/listar_niveis/${'-'}/${ativo}`);
      response.data.niveis.unshift({id: 0, descricao: 'Nível'});
      setNiveis(response.data.niveis);
    } catch(error) {
      alert(error);
    }   
  }

  useEffect(() => {
    get_habilidades_niveis();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(e, {
      habilidade: {
        id: _habilidade.value,
        descricao: habilidades[_habilidade.value].descricao
      },
      nivel: {
        id: _nivel.value,
        descricao: niveis[_nivel.value].descricao
      }
    });
  };

  return (
    <div className="row col-md-12">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <p className="form-group mt-5 col-md-12" style={{ fontWeight: "bold", fontSize: "12pt"}}>Selecionar Habilidade</p>

          <div className="form-group col-md-6">
            <select className="form-control" ref={(select) => (_habilidade = select)}>
              {habilidades.map((habilidade) => {
                return <option value={habilidade.id}>{habilidade.descricao}</option>
              })}
            </select>
          </div>

          <div className="form-group col-md-4">
            <select className="form-control" ref={(select) => (_nivel = select)}>
              {niveis.map((nivel) => {
                return <option value={nivel.id}>{nivel.descricao}</option>
              })}
            </select>
          </div>

          <div className="form-group col-md-2">
            <button type="submit" className="btn btn-primary btn-block">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
