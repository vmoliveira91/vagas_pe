import React, { useState, useEffect } from "react";

import SelectBeneficio from "./SelectBeneficio";

export default function AddBeneficio(props) {
    const [beneficios, setBeneficios] = useState([]);

    useEffect(() => {
        if (props.beneficios) {
            for (let i = 0; i < props.beneficios.length; i++) {
                let beneficio = {
                    beneficio_id: props.beneficios[i].beneficio_id,
                    beneficio_descricao: props.beneficios[i].beneficio_descricao
                }
                setBeneficios(beneficios => [...beneficios, beneficio]);
            }
        }
    }, [props.beneficios]);

    function handleSubmit(e, { beneficio }) {
        e.preventDefault();

        if (beneficio.id == 0) {
            alert('Favor selecionar um benefício!');
        } else {
            var novoBeneficio = {
                beneficio_id: beneficio.id,
                beneficio_descricao: beneficio.descricao
            };

            props.onAdd(novoBeneficio);

            setBeneficios([]);
        }
    }

    function remover_beneficio(beneficio_id) {
        props.onRemove(beneficio_id);

        setBeneficios([]);
    }

    return (
        <div>
            <div className="d-flex justify-content-center h-100">
                <div>
                    <div className="row justify-content-center">
                        <SelectBeneficio submitHandler={handleSubmit} />

                        <div className="row col-md-12 table-overflow">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className="tab-titulo" scope="col">Benefício</th>
                                        <th className="tab-titulo" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {beneficios.map((beneficio, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{beneficio.beneficio_descricao}</th>
                                                <td>
                                                    <button value={beneficio.beneficio_id} onClick={(e) => remover_beneficio(e.target.value)} type="button" className="btn btn-secondary btn-block">
                                                        -
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
