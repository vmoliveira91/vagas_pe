import React from "react";

import Rodape from "./Rodape";
import Header from "./Header";

export default function QuemSomos() {
  return (
    <div>
      <Header />
      <div className="pad-pequeno suape-banner-cinco">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="shadow-suape-dois">QUEM SOMOS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8  section-heading">
            <h2 className="heading mb-3 p-5">Quem Somos</h2>

            <p>
              Somos uma empresa que busca sua qualificação profissional e
              estamos aqui para melhor te atender
            </p>

            <p>
              Em nossos sistemas você poderá encontrar tudo que há de melhor
              para encontrar aquela vaga que você tanto procura!
            </p>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
