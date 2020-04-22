import React from "react";

import Rodape from "./Rodape";
import Header from "./Header";

export default function QuemSomos() {
  return (
    <div>
      <Header />
      <div className="pad-pequeno banner-sete">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="shadow-dois">QUEM SOMOS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8  section-heading">
                      <h2 className="heading mb-3 p-5">Uma Grande Equipe</h2>

                      <p>
                          O Vagas-PE surgiu em 2020 criada inicialmente por alunos da Faculdade FBV, criada inicialmente sem o
                          intuido de se tornar realmente uma empresa de tanto sucesso. O Vagas-PE passou a se tornar algo sério após
                          uma grande aceitação na FBV, assim entrando para o mercado em novembro de 2020, com seu primeiro
                          projeto piloto.

                        </p>
                      <p>
                          O Vagas-PE é uma empresa séria, que preza pela qualificação e inclusão do profissional no mercado de trabalho.
                          Não apenas uma empresa que faz essa inclusão, mas sim também para profissionais que buscam novas oportunidades,
                          que buscam cada vez mais qualidade de vida.
                        </p>

                      <p>Somos uma empresa que busca sua qualificação profissional e estamos aqui para melhor te atender</p>

                      <p>Em nossos sistemas você poderá encontrar tudo que há de melhor para encontrar aquela vaga que você  tanto procura!<br />
                      </p>

                      <h3>Nós somos o Vagas-PE</h3>

                     
        </div>
      </div>
     
          </div>
          <Rodape />
    </div>
  );
}
