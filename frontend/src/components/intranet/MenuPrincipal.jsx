import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuPrincipal() {

    const [selecionar, setSelecionar] = useState("");

        return (
            <div>
                <div className="central border-1">
                    <div className="d-flex justify-content-center h-100">
                        <div>
                            <form>
                                <div className="form-row">
                                    <img
                                        src="https://blog.horadolar.com.br/wp-content/uploads/2019/01/Atualizar-Carteira-de-Trabalho-da-Empregada-Dom%C3%A9stica.jpg"
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
                                            <option value="trabalhador">Trabalhador</option>
                                            <option value="experiencia">Experiência</option>
                                            <option value="habilidade">Habilidade</option>
                                            <option value="usuario">Usuário</option>
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
                        <Link to="/nova-inscricao" className="btn col-md-12 btn-primary">
                        Realizar Inscrição
                        </Link>
                    </div>

                    <div className="form-group col-md-12">
                        <Link to="/atualizar-inscricao" className="btn col-md-12 btn-primary">
                            Atualizar Inscrição
                        </Link>
                       
                    </div>
                </div>
            </div>
    );
}
