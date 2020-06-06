import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function CadastrarVaga() {
    const [descricao, setDescricao] = useState("");
    const [salario, setSalario] = useState("");
    const [empregadores, setEmpregadores] = useState([]);
    const [empregador, setEmpregador] = useState("");
    const [funcoes, setFuncoes] = useState([]);
    const [funcao, setFuncao] = useState("");
    const [beneficios, setBeneficios] = useState([]);
    const [experiencias, setExperiencias] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const history = useHistory();

    async function handleCadastrarVaga(e) {
        e.preventDefault();

        try {
            let obj = {
                descricao: descricao,
                salario: salario,
                empregador: empregador,
                funcao: funcao,
                beneficios: beneficios,
                experiencias: experiencias,
                habilidades: habilidades,
            }

            await api.post('/cadastrar_vaga', obj);

            alert('Vaga cadastrada com sucesso!');

            history.push('/intranet');

        } catch (error) {
            alert(error);
        }
    }

    async function get_empregadores_funcoes() {
        let ativo = 1;

        try {
            let response = await api.get(`/listar_empregadores/${'-'}/${ativo}`);
            response.data.empregadores.unshift({ id: 0, nomeFantasia: 'Empregador' });
            setEmpregadores(response.data.empregadores);

            response = await api.get(`/listar_funcoes/${'-'}/${ativo}`);
            response.data.funcoes.unshift({ id: 0, nome: 'Função' });
            setFuncoes(response.data.funcoes);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        get_empregadores_funcoes();
    }, []);

    function handleAddBeneficio(novoBeneficio) {
        setBeneficios(beneficios => [...beneficios, novoBeneficio]);
    }

    function handleRemoveBeneficio(beneficio_id) {
        seBbeneficios(beneficios => beneficios.filter((beneficio) => beneficio.beneficio_id != beneficio_id));
    }

    function handleAddExperiencia(novaExperiencia) {
        setExperiencias(experiencias => [...experiencias, novaExperiencia]);
    }

    function handleRemoveExperiencia(experiencia_id) {
        setExperiencias(experiencias => experiencias.filter((experiencia) => experiencia.experiencia_id != experiencia_id));
    }

    function handleAddHabilidade(novaHabilidade) {
        setHabilidades(habilidades => [...habilidades, novaHabilidade]);
    }

    function handleRemoveHabilidade(habilidade_id) {
        setHabilidades(habilidades => habilidades.filter((habilidade) => habilidade.habilidade_id != habilidade_id));
    }

    return (
        <div className="central">
            <div className="d-flex justify-content-center h-100">
                <div>
                    <form onSubmit={handleCadastrarVaga}>
                        <div className="form-row">
                            <h2 className="form-group col-lg-12">Cadastro de Vaga</h2>

                            <div className="form-group col-lg-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Descrição"
                                    required="required"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-lg-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Salário"
                                    required="required"
                                    value={salario}
                                    onChange={(e) => setSalario(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-lg-12">
                                <select className="form-control" onChange={(e) => setFuncao(e.target.value)}>
                                    {funcoes.map((funcao) => {
                                        return <option value={funcao.id}>{funcao.nome}</option>
                                    })}
                                </select>
                            </div>

                            <div className="form-group col-lg-12">
                                <select className="form-control" onChange={(e) => setEmpregador(e.target.value)}>
                                    {empregadores.map((empregador) => {
                                        return <option value={empregador.id}>{empregador.nomeFantasia}</option>
                                    })}
                                </select>
                            </div>

                            <div className="form-group col-lg-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    id="btnCadastrarVaga"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="row">
                        <div className="col-lg-4">
                            <AddBeneficio beneficios={beneficios} onAdd={handleAddBeneficio} onRemove={handleRemoveBeneficio} />
                        </div>

                        <div className="col-md-4">
                            <AddExperiencia experiencias={experiencias} onAdd={handleAddExperiencia} onRemove={handleRemoveExperiencia} />
                        </div>

                        <div className="col-md-4">
                            <AddHabilidade habilidades={habilidades} onAdd={handleAddHabilidade} onRemove={handleRemoveHabilidade} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}