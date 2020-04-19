import React from "react";

export default function CadastroHabilidade({ submitHandler }) {
  let _nome, _nivel;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(e, {
      nome: _nome.value,
      nivel: _nivel.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <h2 className="form-group col-lg-12">Habilidade</h2>

          <div className="form-group col-md-6">
            <select className="form-control" ref={(select) => (_nome = select)}>
              <option value="H1">Habilidade 1</option>
              <option value="H2">Habilidade 2</option>
            </select>
          </div>

          <div className="form-group col-md-4">
            <select
              className="form-control"
              ref={(select) => (_nivel = select)}
            >
              <option value="N1">Nível 1</option>
              <option value="N2">Nível 2</option>
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
