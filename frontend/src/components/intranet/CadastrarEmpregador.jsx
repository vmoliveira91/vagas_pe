import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function CadastrarEmpregador() {
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function handleEmpregador(e) {
    e.preventDefault();

    try {
      let obj = {
        id: empregador.id,
        razao_social: razaoSocial,
        nome_fantasia: nomeFantasia,
        cpf: cnpj,
        endereco: endereco,
        telefone: telefone,
        email: email,
        ativo: 1,
      }

      await api.post('/cadastrar_empregador', obj);

      alert('Empregador cadastrado com sucesso!');

      history.push('/intranet');

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="central">
      <div className="d-flex justify-content-center h-100">
        <div>
          <form onSubmit={handleEmpregador}>
            <div className="form-row">
              <h2 className="form-group col-lg-12">Cadastro de Empresa</h2>

              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Razão Social"
                  required="required"
                  value={razaoSocial}
                  onChange={(e) => setRazaoSocial(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome Fantasia"
                  required="required"
                  value={nomeFantasia}
                  onChange={(e) => setNomeFantasia(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="CNPJ"
                  required="required"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Endereço"
                  required="required"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefone"
                  required="required"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group col-lg-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
