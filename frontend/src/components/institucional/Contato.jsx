import React from "react";

import Header from "./Header";
import Rodape from "./Rodape";

import FormularioContato from "./FormularioContato";

export default function Contato() {
  return (
    <div>
      <Header />
      <div className="pad-pequeno suape-banner-quatro">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="shadow-suape-dois"></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-1 pt-5">
        <div className="row">
          <div className="col-md-6 mt-2">
            <div className="col-12">
              <h2 className="heading">Fale Conosco</h2>

              <p>
                Deseja obter informações, maiores detalhes, saber um pouco mais?
                Entre em contato conosco que nosso time terá o prazer de te
                ajudar.
              </p>
              <p>
                Você pode entrar em contato pelo formulário ao lado ou se
                preferir, venha nos visitar!{" "}
              </p>

              <p>
                Fone: +55 (81) 3333-3030
                <br />
                Fax: +55 (81) 3333-3047
                <br />
                <br />
                E-mail: web@vagaspe.com.br
              </p>
            </div>
          </div>

          <FormularioContato />
        </div>
      </div>

      <div className="container pb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5749.6933556514805!2d-34.930058050518106!3d-8.111050981978543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e95eecb6f7b%3A0x9b1d8bb39ab28ea3!2sAv.%20Recife%20-%20Ipsep%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1586903902051!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
      <Rodape />
    </div>
  );
}
