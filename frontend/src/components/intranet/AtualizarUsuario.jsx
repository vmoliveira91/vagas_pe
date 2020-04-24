import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function AtualizarUsuario({ user }) {
  const [novoLogin, setNovoLogin] = useState("");
  const [novoNomeUsuario, setNovoNomeUsuario] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [novoTipo, setNovoTipo] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(user) {
      setNovoLogin(user.login);
      setNovoNomeUsuario(user.nome);
      setNovaSenha(user.senha);
      setNovoTipo(user.tipo);
    }
  }, [user]);

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

      history.push('/intranet');
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
      const response = await api.post("/desativar_usuario", obj);

      if(response.data.is_ativo)
        alert('Usuário ativado com sucesso!');
      else
        alert("Usuário desativado com sucesso!");
      
      history.push('/intranet');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <p className="border-bottom">ID - {user.id}</p>
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
            { novoTipo == 1 ? <option value="1" selected>Agente</option> : <option value="1">Agente</option>}
            { novoTipo == 2 ? <option value="2" selected>Captador</option> : <option value="2">Captador</option>}
            { novoTipo == 3 ? <option value="3" selected>Gerente</option> : <option value="3">Gerente</option>}
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

        <div className="form-group col-lg-6">
            <button
            type="button"
            className="btn btn-primary btn-block mt-3"
            id="btAtualizar"
            onClick={handleAtualizarUsuario}
            data-toggle="collapse"
            data-target="#collapseUsuario"            >
            Atualizar
            </button>
        </div>

        <div className="form-group col-lg-6">
            <button
            type="button"
            className="btn btn-primary btn-block mt-3"
            id="btAtualizar"
            onClick={handleDesativar}
            data-toggle="collapse"
            data-target="#collapseUsuario"            >
            Ativar/Desativar
            </button>
        </div>
      </div>
    </div>
  );
}
