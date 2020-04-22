import React from "react";
import CarrouselUm from "../../images/banner/banner-cinco.jpg"
import CarrouselDois from "../../images/banner/banner-dois.jpg"
import CarrouselTres from "../../images/banner/banner-quatro.jpg"
import NoticiasUm from "../../images/noticias/empregoavista.png"
import NoticiasDois from "../../images/noticias/covid.jpg"
import NoticiasTres from "../../images/noticias/economia.jpg"
import Header from "./Header";
import Rodape from "./Rodape";

export default function Home() {
  return (
    <div>
      <Header />
        <div className="pad-pequeno banner-cinco">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-md-7">
                        <h1 className="shadow-dois">Sua empregabilidade é nossa prioridade</h1>
                    </div>
                </div>
            </div>
        </div>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-8  section-heading">
                    <h2 className="heading mb-3 p-5">VAGAS PE</h2>

                    <p>
                        Vamos te ajudar a encontrar aquele emprego dos teus sonhos. 
                    </p>

                    <p>
                        Em nossos sistemas você poderá encontrar tudo que há de melhor
                        para encontrar aquela vaga que você tanto procura!
                    </p>
                    </div>
                </div>
            </div>

          <div className="pad-pequeno banner-dez">
              <div className="container">
                  <div className="row align-items-center justify-content-center text-center">
                      <div className="col-md-7">
                          <h1 className="shadow-dois">Quadro de Notícias</h1>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-white pb-3">
              <div className="container">
                  <div className="col-12 pt-3 row justify-content-center mb-5">
                 
                      <div className="col-md-3 card m-1 p-3" style={{ width: "18rem" }}>
                          <img className="card-img-top" src={NoticiasTres} alt="Imagem de capa do card" />
                          <div className="card-body">
                              <h5 className="card-title">Ministério da Economia</h5>
                              <p className="card-text">Ministério da Economia avalia impactos do Projeto de Lei 873/2020.</p>
                              <a href="http://trabalho.gov.br/noticias/7380-ministerio-da-economia-avalia-impactos-do-projeto-de-lei-873-2020" target="_blank" class="btn btn-primary">Saiba Mais</a>
                          </div>
                      </div>
              

              
                      <div className="col-md-3 card m-1 p-3" style={{ width: "18rem" }}>
                          <img className="card-img-top" src={NoticiasUm} alt="Imagem de capa do card" />
                          <div className="card-body">
                              <h5 className="card-title">Empregos Garantidos</h5>
                              <p className="card-text">Benefício emergencial já preservou 1,7 milhão de empregos.</p>
                              <a href="http://trabalho.gov.br/noticias/7381-beneficio-emergencial-ja-preservou-1-7-milhao-de-empregos" target="_blank" class="btn btn-primary">Saiba Mais</a>
                          </div>
                      </div>
              

              
                      <div className="col-md-3 card m-1 p-3" style={{ width: "18rem" }}>
                          <img className="card-img-top" src={NoticiasDois} alt="Imagem de capa do card" />
                          <div className="card-body">
                              <h5 className="card-title">COVID-19</h5>
                              <p className="card-text">Inspeção do Trabalho na Bahia notifica estabelecimentos sobre...</p>
                              <a href="#" target="_blank" class="btn btn-primary">Saiba Mais</a>
                          </div>
                      </div>
              
                </div>
            </div>
        </div>
      <Rodape />
    </div>
  );
}
