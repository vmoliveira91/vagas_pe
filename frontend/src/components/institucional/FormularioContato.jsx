import React, { useState } from "react";

export default function FormularioContato() {
  const [assunto, setAssunto] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleFormularioContato(e) {
    e.preventDefault();

    alert(
      `Assunto: ${assunto} / Nome: ${nome} / E-mail: ${email} / Telefone: ${telefone} / Mensagem: ${mensagem}`
    );
  }

  return (
    <div className="col-md-6 pt-6 pb-5 justify-content-center">
      <form onSubmit={handleFormularioContato}>
        <div className="form-row">
          <div className="form-group col-lg-12">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              required="required"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-group col-lg-12">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-lg-5">
            <input
              type="text"
              className="form-control"
              placeholder="Telefone"
              required="required"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="form-group col-md-7">
            <select
              type="text"
              class="form-control"
              onChange={(e) => setAssunto(e.target.value)}
            >
              <option>--- Selecione ---</option>
              <option value="Reclamação">Reclamação</option>
              <option value="Sugestão">Sugestão</option>
              <option value="Elogio">Elogio</option>
              <option value="Ouvidoria">Ouvidoria</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div className="form-group col-md-12">
            <textarea
              type="text"
              className="form-control textarea"
              rows="5"
              placeholder="Mensagem"
              required="required"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>

          <div className="form-group col-lg-12">
            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
