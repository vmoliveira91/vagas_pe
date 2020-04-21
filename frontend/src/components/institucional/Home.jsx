import React from "react";
import CarrouselUm from "../../images/banner/banner-cinco.jpg"
import CarrouselDois from "../../images/banner/banner-dois.jpg"
import CarrouselTres from "../../images/banner/banner-quatro.jpg"
import NoticiasUm from "../../images/noticias/empregoavista.png"
import Header from "./Header";
import Rodape from "./Rodape";

export default function Home() {
  return (
    <div>
      <Header />

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                      
                      <img className="d-block w-100" src={CarrouselUm} alt="First slide"/>
                    </div>
                  <div className="carousel-item">
                      <img className="d-block w-100" src={CarrouselDois} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={CarrouselTres} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
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

          <div className="container">
              <div className="banner-pequeno banner-sete" style={{borderRadius: "100px"}}>
                  <div className="container">
                      <div className="row align-items-center justify-content-center text-center">
                          <div className="col-md-7">
                              <h1 className="shadow-suape-dois">Últimas Notícias</h1>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-12 pt-3 row justify-content-center mb-5">
                 
                  <div className="col-md-3 card m-1 p-3" style={{ width: "18rem" }}>
                      <img className="card-img-top" src={NoticiasUm} alt="Imagem de capa do card" />
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
                      <img className="card-img-top" src={NoticiasUm} alt="Imagem de capa do card" />
                      <div className="card-body">
                          <h5 className="card-title">COVID-19</h5>
                          <p className="card-text">Inspeção do Trabalho na Bahia notifica estabelecimentos sobre...</p>
                          <a href="#" target="_blank" class="btn btn-primary">Saiba Mais</a>
                      </div>
                  </div>
              
            </div>
        </div>
      <Rodape />
    </div>
  );
}
