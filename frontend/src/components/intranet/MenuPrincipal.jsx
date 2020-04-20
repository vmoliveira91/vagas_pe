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
                                        src="data:image/jpeg;base64,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"
                                        className="img-fluid meu-padrao"
                                        alt="Responsive image"
                                    />

                                    <div className="form-group col-md-12">
                                        <select
                                            className="form-control"
                                            onChange={(e) => setSelecionar(e.target.value)}
                                        >
                                            <option value="">SELECIONE PARA INICIAR</option>
                                            <option value="trabalhador">Trabalhador</option>
                                            <option value="experiencia">Experiência</option>
                                            <option value="habilidade">Habilidade</option>
                                            <option value="usuario">Usuário</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <a                                            
                                            className="btn col-md-12 btn-secondary"
                                            href={"cadastrar-" + selecionar} 
                                        >
                                            Cadastrar
                                        </a>
                                       
                                    </div>
                                    <div className="form-group col-md-6">
                                        <a
                                            className="btn col-md-12 btn-secondary"
                                            href={"atualizar-" + selecionar}                                            
                                        >
                                            Atualizar
                                        </a>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <a                                            
                                            className="btn col-md-12 btn-secondary"
                                            href={"ativar-desativar-" + selecionar} 
                                        >
                                            Ativar/Desativar
                                        </a>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <a
                                            className="btn col-md-12 btn-secondary"
                                            href={"buscar-listar-" + selecionar} 
                                        >
                                            Buscar/Listar
                                        </a>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div className="central border-1" style={{ marginTop: "-30px" }}>
                    <div className="form-group col-md-12">
                        <a href="/nova-inscricao" className="btn col-md-12 btn-primary">
                            Realizar Inscrição
          </a>
                    </div>

                    <div className="form-group col-md-12">
                        <a href="/atualizar-incricao" className="btn col-md-12 btn-primary">
                            Atualizar Inscrição
          </a>
                       
                    </div>
                </div>
            </div>
    );
}
