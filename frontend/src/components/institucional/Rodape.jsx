import React from "react";
import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <div>
      <div
        className="footer-section bg-white"
        style={{ borderTop: "1px solid #dddddd" }}
      >
        <div className="container" style={{ paddingTop: "50px" }}>
          <div className="row">
            <div className="col-md-4">
              <h3 className="text-dark">Entre em Contato</h3>
              <p>
                Fone: +55 (81) 3333-3030
                <br />
                Fax: +55 (81) 3333-3047
                <br />
                <br />
                E-mail: web@vagaspe.com.br
              </p>
            </div>

            <div className="col-md-3 ml-auto">
              <h3 className="text-dark">Links</h3>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/quem-somos">Quem Somos</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
                <li>
                  <Link to="/login">Intranet</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h3 className="text-dark">Nosso Endereço</h3>
              <p>
                Av Recife, nº 35
                <br />
                Areias, Recife / PE
                <br />
                CEP 54510 - 350
                <br />
              </p>
            </div>
          </div>

          <div className="row mt-5 text-center">
            <div className="col-md-12">
              <div className=" pt-5">
                <p className="copyright">
                  <small>
                    &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    Desenvolvido por Vagabundos
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
