import React, { useState } from "react";

import api from "../../services/api";

export default function AtualizarUsuario() {
    const [novoLogin, setNovoLogin] = useState("");
    const [novoNomeUsuario, setNovoNomeUsuario] = useState("");
    const [novoTipo, setNovoTipo] = useState("");
    const [novoAtivo, setNovoAtivo] = useState("");

  async function handleAtualizarUsuario(e) {
    e.preventeDefault();

    let obj = {
      id: "",
      login: "",
      nome_usuario: "",
      tipo: "",
      ativo: "",
    };

    try {
      api.post("/atualizar-usuario", obj);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <div>
            <h2>Atualizar Usuário</h2>
            <div className="form-row">
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  required="required"
                  placeholder="Novo Login"
                  value={novoLogin}
                  onChange={(e) => setNovoLogin(e.target.value)}
                />
              </div>
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  required="required"
                  placeholder="Novo Nome de Usuário"
                  value={novoNomeUsuario}
                  onChange={(e) => setNovoNomeUsuario(e.target.value)}
                />
              </div>
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  required="required"
                  placeholder="Novo Tipo"
                  value={novoTipo}
                  onChange={(e) => setNovoTipo(e.target.value)}
                />
              </div>
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  required="required"
                  placeholder="Ativo ou Não"
                  value={novoAtivo}
                  onChange={(e) => setNovoAtivo(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  id="btAtualizar"
                  onClick={handleAtualizarUsuario}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
