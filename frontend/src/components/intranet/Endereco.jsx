import React, { Component } from 'react';

class Endereco extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
        }

        this.handleEndereco = this.handleEndereco.bind(this);
    }

    handleEndereco = (e) => {
        e.preventDefault();
        alert(`CEP: ${this.state.cep} / Rua: ${this.state.rua} / Número: ${this.state.numero} / Complemento: ${this.state.complemento} / Bairro: ${this.state.bairro} / Cidade: ${this.state.cidade} / UF: ${this.state.uf}`);
    }

    render() {
        return (
            <div className="central">
                <div className="d-flex justify-content-center h-100">
                    <div>
                        <form onSubmit={this.handleEndereco}>

                            <div className="form-row">

                                <h2 className="form-group col-lg-12">Endereço</h2>

                                <div className="form-group col-md-5">
                                    <input type="text" className="form-control" id="cep" name="cep" placeholder="CEP" required="required" onChange={(e) => this.setState({ cep: e.target.value })} />
                                </div>

                                <div className="form-group col-md-7">
                                    <input type="text" className="form-control" id="rua" name="rua" placeholder="Rua" required="required" onChange={(e) => this.setState({ rua: e.target.value })} />
                                </div>

                                <div className="form-group col-md-3">
                                    <input type="text" className="form-control" id="numero" name="numero" placeholder="Nº" required="required" onChange={(e) => this.setState({ numero: e.target.value })} />
                                </div>

                                <div className="form-group col-md-9">
                                    <input type="text" className="form-control" id="complemento" name="complemento" placeholder="Complemento" required="required" onChange={(e) => this.setState({ complemento: e.target.value })} />
                                </div>

                                <div className="form-group col-lg-12">
                                    <input type="text" className="form-control" id="bairro" name="bairro" placeholder="Bairro" required="required" onChange={(e) => this.setState({ bairro: e.target.value })} />
                                </div>

                                <div className="form-group col-md-9">
                                    <input type="text" className="form-control" id="cidade" name="cidade" placeholder="Cidade" required="required" onChange={(e) => this.setState({ cidade: e.target.value })} />
                                </div>

                                <div className="form-group col-md-3">
                                    <input type="text" className="form-control" id="uf" name="uf" placeholder="UF" required="required" onChange={(e) => this.setState({ uf: e.target.value })} />
                                </div>

                                <div className="form-group col-lg-12">
                                    <button type="submit" className="btn btn-primary btn-block" id="btnEndereco">Enviar</button>
                                </div>
                                
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Endereco;