import React, { useState } from "react";

import api from "../../services/api";

export default function AtualizarUsuario({ user }) {
  const [novoLogin, setNovoLogin] = useState("");
  const [novoNomeUsuario, setNovoNomeUsuario] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [novoTipo, setNovoTipo] = useState("");

  async function handleAtualizarUsuario(e) {
    e.preventDefault();

    let obj = {
      id: user.id,
      login: novoLogin,
      nome_usuario: novoNomeUsuario,
      senha: novaSenha,
      tipo: novoTipo,
      ativo: 1,
    };

    try {
      await api.post("/atualizar_usuario", obj);

      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  async function handleDesativar(e) {
    e.preventDefault();

    let obj = {
      id: user.id,
    };

    try {
      await api.post("/desativar_usuario", obj);

      alert("Usuário desativado com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">{user.id}. {user.nome}</p>
      <div className="form-row">
        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            placeholder="Novo login"
            value={novoLogin}
            onChange={(e) => setNovoLogin(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-12">
          <input
            type="text"
            className="form-control"
            required="required"
            placeholder="Novo nome"
            value={novoNomeUsuario}
            onChange={(e) => setNovoNomeUsuario(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-12">
          <select
            onChange={(e) => setNovoTipo(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Novo tipo</option>
            <option value="1">Agente</option>
            <option value="2">Captador</option>
            <option value="3">Gerente</option>
          </select>
        </div>

        <div className="form-group col-lg-12">
          <input
            type="password"
            className="form-control"
            required="required"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-12">
          <button
            type="button"
            className="btn btn-primary btn-block"
            id="btAtualizar"
            onClick={handleAtualizarUsuario}
          >
            Enviar
          </button>
        </div>

        <div className="form-group col-lg-12">
          <button
            type="button"
            className="btn btn-primary btn-block"
            id="btDesativar"
            onClick={handleDesativar}
          >
            Ativar/Desativar
          </button>
        </div>
      </div>
    </div>
  );
}
