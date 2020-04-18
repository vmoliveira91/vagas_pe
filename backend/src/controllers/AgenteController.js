const connection = require('../database/connection');

module.exports = {
    async cadastrar_trabalhador(request, response) {
        const { nome, cpf, rg, endereco, nacionalidade, telefone, email, sexo, data_nascimento, experiencias, habilidades } = request.body;
        const data_cadastro = new Date();
        const data_validade = new Date(data_cadastro.setMonth(data_cadastro.getMonth() + 8));
        const status = 'Ativo';
        const ativo = 1;

        try {
            // Cadastrando um novo trabalhador
            const [ trabalhador_id ] = await connection('trabalhador').insert({
                nome,
                cpf,
                rg,
                endereco,
                nacionalidade,
                telefone,
                email,
                sexo,
                data_nascimento,
                data_cadastro,
                data_validade,
                status,
                ativo
            });

            // Verifica se há experiências, se tiver adiciona
            if(experiencias != null) {
                for(let i = 0; i < experiencias.length; i++) {
                    const { experiencia_id, tempo_id } = experiencias[i];

                    await connection('trabalhador_experiencia').insert({
                        experiencia_id,
                        tempo_id,
                        trabalhador_id,
                        ativo
                    });
                }
            }

            // Verifica se há habilidades, se tiver adiciona
            if(habilidades != null) {                
                for(let i = 0; i < habilidades.length; i++) {
                    const { habilidade_id, nivel_id } = habilidades[i];

                    await connection('trabalhador_habilidade').insert({
                        habilidade_id,
                        nivel_id,
                        trabalhador_id,
                        ativo
                    });
                }
            }

            return response.json({ trabalhador_id });

        } catch(error) {
            console.log(error);
        }
    },

    async atualizar_trabalhador(request, response) {
        const { id, nome, cpf, rg, endereco, nacionalidade, telefone, email, sexo, data_nascimento, experiencias, habilidades } = request.body;
        const trabalhador_id = id;
        const data_validade = new Date(new Date().setMonth(new Date().getMonth() + 8));
        const status = 'Ativo';
        const ativo = 1;

        try {
            // Atualizando o trabalhador
            await connection('trabalhador').update({
                nome,
                cpf,
                rg,
                endereco,
                nacionalidade,
                telefone,
                email,
                sexo,
                data_nascimento,
                data_validade,
                status,
                ativo
            }).where('id', '=', id);
            
            // Deleta as experiências já cadastradas
            await connection('trabalhador_experiencia').del()
                .where('trabalhador_id', '=', id);
            
            // Insere as experiências atualizadas
            if(experiencias != null) {
                for(let i = 0; i < experiencias.length; i++) {
                    const { experiencia_id, tempo_id } = experiencias[i];
    
                    await connection('trabalhador_experiencia').insert({
                        experiencia_id,
                        tempo_id,
                        trabalhador_id,
                        ativo
                    });
                }
            }
            
            // Deleta as habilidades já cadastradas
            await connection('trabalhador_habilidade').del()
                .where('trabalhador_id', '=', id);
            
            // Insere as habilidades atualizadas
            if(habilidades != null) {
                for(let i = 0; i < habilidades.length; i++) {
                    const { habilidade_id, nivel_id } = habilidades[i];
    
                    await connection('trabalhador_habilidade').insert({
                        habilidade_id,
                        nivel_id,
                        trabalhador_id,
                        ativo
                    });
                }
            }

            return response.json({ id });

        } catch(error) {
            console.log(error);
        }
    },

    async desativar_trabalhador(request, response) {
        const { id } = request.body;

        try {
            // Pegando o status atual do trabalhador
            const ativo_resposta  = await connection('trabalhador')
                .select('ativo')
                .where('id', '=', id);
            
            const ativo = ativo_resposta[0].ativo;
            
            if(ativo != null) {
                // Se estiver ativo, desativa
                if(ativo == 1) {
                    await connection('trabalhador').update({
                        status: 'Inativo',
                        ativo: 0
                    })
                    .where('id', '=', id);
                // Se estiver inativo, ativa
                } else {
                    await connection('trabalhador').update({
                        status: 'Ativo',
                        ativo: 1
                    })
                    .where('id', '=', id);
                }
            }

            const is_ativo = !ativo;

            return response.json({ id, is_ativo });

        } catch(error) {
            console.log(error);
        }        
    },
    
    async listar_trabalhadores(request, response) {
        const { trabalhador, ativo } = request.body;
        let trabalhadores = [];

        try {
            // Verifica se é pra listar todos os trabalhadores ou um trabalhador específico
            if(trabalhador != null) {
                trabalhadores = await connection('trabalhador')
                    .select('*')
                    .where('nome', '=', trabalhador.nome)
                    .orWhere('nome', 'like', '%' + trabalhador.nome + '%');
            } else if(trabalhador == null && ativo) {
                trabalhadores = await connection('trabalhador')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                trabalhadores = await connection('trabalhador')
                    .select('*');
            }

            for(let i = 0; i < trabalhadores.length; i++) {
                let trabalhador = {
                    id: trabalhadores[i].id,
                    nome: trabalhadores[i].nome,
                    cpf: trabalhadores[i].cpf,
                    rg: trabalhadores[i].rg,
                    endereco: trabalhadores[i].endereco,
                    nacionalidade: trabalhadores[i].nacionalidade,
                    telefone: trabalhadores[i].telefone,
                    email: trabalhadores[i].email,
                    sexo: trabalhadores[i].sexo,
                    data_nascimento: trabalhadores[i].data_nascimento,
                    data_cadastro: trabalhadores[i].data_cadastro,
                    data_validade: trabalhadores[i].data_validade,
                    status: trabalhadores[i].status,
                    ativo: trabalhadores[i].ativo,
                    experiencias: [],
                    habilidades: []
                }

                let experiencias = await connection('trabalhador_experiencia AS te')
                    .select('e.id AS eid', 'e.descricao AS edescricao', 'e.ativo AS eativo', 't.id AS tid', 't.descricao AS tdescricao', 't.ativo AS tativo')
                    .innerJoin('experiencia AS e', 'te.experiencia_id', 'e.id')
                    .innerJoin('tempo AS t', 'te.tempo_id', 't.id')
                    .where('te.trabalhador_id', '=', trabalhador.id);
                
                for(let j = 0; j < experiencias.length; j++) {
                    let experiencia = {
                        id: experiencias[j].eid,
                        descricao: experiencias[j].edescricao,
                        ativo: experiencias[j].eativo,
                        tempo: {
                            id: experiencias[j].tid,
                            descricao: experiencias[j].tdescricao,
                            ativo: experiencias[j].tativo
                        }
                    };
                    trabalhador.experiencias.push(experiencia);
                }

                let habilidades = await connection('trabalhador_habilidade AS th')
                    .select('h.id AS hid', 'h.descricao AS hdescricao', 'h.ativo AS hativo', 'n.id AS nid', 'n.descricao AS ndescricao', 'n.ativo AS nativo')
                    .innerJoin('habilidade AS h', 'th.habilidade_id', 'h.id')
                    .innerJoin('nivel AS n', 'th.nivel_id', 'n.id')
                    .where('th.trabalhador_id', '=', trabalhador.id);
                
                for(let j = 0; j < habilidades.length; j++) {
                    let habilidade = {
                        id: habilidades[j].hid,
                        descricao: habilidades[j].hdescricao,
                        ativo: habilidades[j].hativo,
                        nivel: {
                            id: habilidades[j].nid,
                            descricao: habilidades[j].ndescricao,
                            ativo: habilidades[j].nativo
                        }
                    };
                    trabalhador.habilidades.push(habilidade);
                }

                trabalhadores[i] = trabalhador;

            }

            return response.json({ trabalhadores });

        } catch(error) {
            console.log(error);
        }
    },

    async listar_vagas(request, response) {
        const { vaga, ativo } = request.body;
        let vagas = [];

        try {
            // Verifica se é pra listar todas as vagas ou uma vaga específica
            if(vaga != null) {
                vagas = await connection('vaga AS v')
                    .select('v.id AS vid', 'v.descricao AS vdescricao', 'v.salario AS vsalario', 'v.data_cadastro AS vdata_cadastro', 'v.data_validade AS vdata_validade',
                        'v.funcao_id AS vfuncao_id', 'v.empregador_id AS vempregador_id', 'v.ativo AS vativo', 'f.sigla AS fsigla', 'f.nome AS fnome', 'f.ativo AS fativo',
                        'e.cnpj AS ecnpj', 'e.nomeFantasia AS enomeFantasia', 'e.razaoSocial AS erazaoSocial', 'e.endereco AS eendereco', 'e.email AS eemail',
                        'e.telefone AS etelefone', 'e.data_cadastro AS edata_cadastro', 'e.data_validade AS edata_validade', 'e.ativo AS eativo')
                    .innerJoin('funcao AS f', 'v.funcao_id', 'f.id')
                    .innerJoin('empregador AS e', 'v.empregador_id', 'e.id')
                    .where('v.descricao', '=', vaga.descricao)
                    .orWhere('v.descricao', 'like', '%' + vaga.descricao + '%');              
            } else if(vaga == null && ativo) {
                vagas = await connection('vaga AS v')
                    .select('v.id AS vid', 'v.descricao AS vdescricao', 'v.salario AS vsalario', 'v.data_cadastro AS vdata_cadastro', 'v.data_validade AS vdata_validade',
                        'v.funcao_id AS vfuncao_id', 'v.empregador_id AS vempregador_id', 'v.ativo AS vativo', 'f.sigla AS fsigla', 'f.nome AS fnome', 'f.ativo AS fativo',
                        'e.cnpj AS ecnpj', 'e.nomeFantasia AS enomeFantasia', 'e.razaoSocial AS erazaoSocial', 'e.endereco AS eendereco', 'e.email AS eemail',
                        'e.telefone AS etelefone', 'e.data_cadastro AS edata_cadastro', 'e.data_validade AS edata_validade', 'e.ativo AS eativo')
                    .innerJoin('funcao AS f', 'v.funcao_id', 'f.id')
                    .innerJoin('empregador AS e', 'v.empregador_id', 'e.id')
                    .where('v.ativo', '=', 1);
            } else {
                vagas = await connection('vaga AS v')
                    .select('v.id AS vid', 'v.descricao AS vdescricao', 'v.salario AS vsalario', 'v.data_cadastro AS vdata_cadastro', 'v.data_validade AS vdata_validade',
                        'v.funcao_id AS vfuncao_id', 'v.empregador_id AS vempregador_id', 'v.ativo AS vativo', 'f.sigla AS fsigla', 'f.nome AS fnome', 'f.ativo AS fativo',
                        'e.cnpj AS ecnpj', 'e.nomeFantasia AS enomeFantasia', 'e.razaoSocial AS erazaoSocial', 'e.endereco AS eendereco', 'e.email AS eemail',
                        'e.telefone AS etelefone', 'e.data_cadastro AS edata_cadastro', 'e.data_validade AS edata_validade', 'e.ativo AS eativo')
                    .innerJoin('funcao AS f', 'v.funcao_id', 'f.id')
                    .innerJoin('empregador AS e', 'v.empregador_id', 'e.id');
            }

            // Organiza o array de vagas
            for(let i = 0; i < vagas.length; i++) {
                let vaga = {
                    id: vagas[i].vid,
                    descricao: vagas[i].vdescricao,
                    salario: vagas[i].vsalario,
                    data_cadastro: vagas[i].vdata_cadastro,
                    data_validade: vagas[i].vdata_validade,
                    funcao_id: vagas[i].vfuncao_id,
                    empregador_id: vagas[i].vempregador_id,
                    ativo: vagas[i].vativo,
                    funcao: {
                        id: vagas[i].vfuncao_id,
                        nome: vagas[i].fnome,
                        sigla: vagas[i].fsigla,
                        ativo: vagas[i].fativo
                    },
                    empregador: {
                        id : vagas[i].vempregador_id,
                        cnpj: vagas[i].ecnpj,
                        nomeFantasia: vagas[i].enomeFantasia,
                        razaoSocial: vagas[i].erazaoSocial,
                        endereco: vagas[i].eendereco,
                        telefone: vagas[i].etelefone,
                        email: vagas[i].eemail,
                        data_cadastro: vagas[i].edata_cadastro,
                        data_validade: vagas[i].edata_validade,
                        ativo: vagas[i].eativo
                    },
                    experiencias: [],
                    habilidades: [],
                    beneficios: []
                };

                // Busca experiências associadas a vaga
                let experiencias = await connection('vaga_experiencia AS ve')
                    .select('e.id AS eid', 'e.descricao AS edescricao', 'e.ativo AS eativo', 't.id AS tid', 't.descricao AS tdescricao', 't.ativo AS tativo')
                    .innerJoin('experiencia AS e', 've.experiencia_id', 'e.id')
                    .innerJoin('tempo AS t', 've.tempo_id', 't.id')
                    .where('ve.vaga_id', '=', vaga.id);

                for(let j = 0; j < experiencias.length; j++) {
                    let experiencia = {
                        id: experiencias[j].eid,
                        descricao: experiencias[j].edescricao,
                        ativo: experiencias[j].eativo,
                        tempo: {
                            id: experiencias[j].tid,
                            descricao: experiencias[j].tdescricao,
                            ativo: experiencias[j].tativo
                        }
                    };
                    vaga.experiencias.push(experiencia);
                }

                // Busca habilidades associadas a vaga
                let habilidades = await connection('vaga_habilidade AS vh')
                    .select('h.id AS hid', 'h.descricao AS hdescricao', 'h.ativo AS hativo', 'n.id AS nid', 'n.descricao AS ndescricao', 'n.ativo AS nativo')
                    .innerJoin('habilidade AS h', 'vh.habilidade_id', 'h.id')
                    .innerJoin('nivel AS n', 'vh.nivel_id', 'n.id')
                    .where('vh.vaga_id', '=', vaga.id);
                
                for(let j = 0; j < habilidades.length; j++) {
                    let habilidade = {
                        id: habilidades[j].hid,
                        descricao: habilidades[j].hdescricao,
                        ativo: habilidades[j].hativo,
                        nivel: {
                            id: habilidades[j].nid,
                            descricao: habilidades[j].ndescricao,
                            ativo: habilidades[j].nativo
                        }
                    };
                    vaga.habilidades.push(habilidade);
                }

                // Busca benefícios associados a vaga
                let beneficios = await connection('vaga_beneficio AS vb')
                    .select('b.id AS bid', 'b.descricao AS bdescricao', 'b.ativo AS bativo', 'vb.valor AS vbvalor')
                    .innerJoin('beneficio AS b', 'vb.beneficio_id', 'b.id')
                    .where('vb.vaga_id', '=', vaga.id);
                
                for(let j = 0; j < beneficios.length; j++) {
                    let beneficio = {
                        id: beneficios[j].bid,
                        descricao: beneficios[j].bdescricao,
                        ativo: beneficios[j].bativo,
                        valor: beneficios[j].vbvalor
                    };
                    vaga.beneficios.push(beneficio);
                }
                // Organiza como está definido cada atributo de uma vaga
                vagas[i] = vaga;
            }

            return response.json({ vagas });

        } catch(error) {
            console.log(error);
        }
    },

    async efetuar_inscricao(request, response) {
        const { trabalhador, vaga} = request.body;

        try {
            // Verifica se o trabalhador está apto a concorrer aquela vaga
            if(trabalhador.status == 'Ativo') {
                if(trabalhador.experiencias.length >= vaga.experiencias.length && trabalhador.habilidades.length >= vaga.habilidades.length) {
                    for(let i = 0; i < vaga.experiencias.length; i++) {
                        if(!trabalhador.experiencias.some(experiencia => (experiencia.experiencia_id == vaga.experiencias[i].experiencia_id && experiencia.tempo_id == vaga.experiencias[i].tempo_id)))
                            return;
                    }
                    for(let i = 0; i < vaga.habilidades.length; i++) {
                        if(!trabalhador.habilidades.some(habilidade => (habilidade.habilidade_id == vaga.habilidades[i].habilidade_id && habilidade.nivel_id == vaga.habilidades[i].nivel_id)))
                            return;
                    }
                }
            } else {
                return;
            }

            const [ id ] = await connection('inscricao').insert({
                data_inscricao: new Date(),
                vaga_id: vaga.id,
                trabalhador_id: trabalhador.id,
                situacao_id: 3,
                ativo: 1
            });

            await connection('trabalhador').update({
                status: 'Em processo seletivo'
            })
            .where('id', '=', trabalhador.id);

            return response.json({ id });

        } catch(error) {
            console.log(error);
        }
    }
}