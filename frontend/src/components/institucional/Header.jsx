import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
      <nav className="navbar index-superior navbar-expand-lg navbar-light bg-light text-uppercase font-weight-bold my-border-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quem-somos">
                Quem Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Intranet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
