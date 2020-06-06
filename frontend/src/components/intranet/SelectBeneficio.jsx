import React, { useEffect, useState } from "react";
import api from '../../services/api';

export default function SelectBeneficio({ submitHandler }) {
    const [beneficios, setBeneficios] = useState([]);

    let _beneficio;

    async function getBeneficios() {
        let ativo = 1;

        try {
            let response = await api.get(`/listar_beneficios/${'-'}/${ativo}`);
            response.data.beneficios.unshift({ id: 0, descricao: 'Benefício' });
            setBeneficios(response.data.beneficios);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        getBeneficios();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitHandler(e, {
            beneficio: {
                id: _beneficio.value,
                descricao: beneficios[_beneficio.value].descricao
            }
        });
    };

    return (
        <div className="row col-md-12">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <p className="form-group mt-5 col-md-12" style={{ fontWeight: "bold", fontSize: "12pt" }}>Selecionar Benefício</p>

                    <div className="form-group col-lg-10">
                        <select className="form-control" ref={(select) => (_beneficio = select)}>
                            {beneficios.map((beneficio) => {
                                return <option value={beneficio.id}>{beneficio.descricao}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group col-sm-2">
                        <button type="submit" className="btn btn-primary btn-block">
                            +
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}