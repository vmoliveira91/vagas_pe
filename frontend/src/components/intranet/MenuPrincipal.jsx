import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logovagaspe.png"

export default function MenuPrincipal() {
 
    const [selecionar, setSelecionar] = useState("");

        return (
            <div>
                <div className="central border-1">
                    <div className="d-flex justify-content-center h-100">
                        <div>
                        <div className="form-group">
                            <Link
                                className="btn btn-danger"
                                to={"/login"}
                                onClick={() => localStorage.removeItem('token') & localStorage.removeItem('loginTipo')}
                            >
                                Logout
                            </Link>
                        </div>
                            <form>
                                <div className="form-row">
                                    <img
                                        src={Logo}
                                        className="img-fluid meu-padrao"
                                        alt="Responsive image"
                                    />

                                    <div className="form-group col-md-12">
                                        <select
                                            className="form-control"
                                            onChange={(e) => setSelecionar(e.target.value)}
                                            required
                                        >
                                            <option value="">SELECIONE PARA INICIAR</option>
                                            <option value="experiencia">Experiência</option>
                                            <option value="habilidade">Habilidade</option>
                                            <option value="tempo">Tempo</option>
                                            <option value="nivel">Nível</option>
                                            <option value="beneficio">Benefício</option>
                                            <option value="situacao">Situação</option>
                                            <option value="funcao">Função</option>
                                            <option value="usuario">Usuário</option>
                                            <option value="vaga">Vaga</option>
                                            <option value="empregador">Empregador</option>
                                            <option value="trabalhador">Trabalhador</option>
                                            <option value="inscricao">Inscrição</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <Link                                            
                                            className="btn col-md-12 btn-secondary"
                                            to={"cadastrar-" + selecionar} 
                                        >
                                            Cadastrar
                                        </Link>

                                       
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <Link 
                                            className="btn col-md-12 btn-secondary"
                                            to={"buscar-listar-" + selecionar} 
                                        >
                                            Buscar/Listar
                                        </Link>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div className="central border-1" style={{ marginTop: "-30px" }}>
                    <div className="form-group col-md-12">
                        <Link to="/efetuar-inscricao" className="btn col-md-12 btn-primary">
                        Realizar Inscrição
                        </Link>
                    </div>

                    <div className="form-group col-md-12">
                        <Link to="/buscar-listar-inscricao" className="btn col-md-12 btn-primary">
                            Atualizar Inscrição
                        </Link>
                       
                    </div>
                </div>
            </div>
    );
}
