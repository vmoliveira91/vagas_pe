const connection = require('../database/connection');

module.exports = {
    async cadastrar_trabalhador(trabalhador) {
        const { nome, cpf, rg, endereco, nacionalidade, telefone, email, sexo, data_nascimento, experiencias, habilidades } = trabalhador;
        const data_cadastro = new Date();
        const data_validade = new Date(data_cadastro.setMonth(data_cadastro.getMonth() + 8));
        const status = 'Ativo';
        const ativo = 1;

        try {
            // Cadastrando um novo trabalhador
            const trab_id = await connection('trabalhador').insert({
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

            const trabalhador_id = trab_id[0];

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
        } catch(error) {
            console.log(error);
        }
    },

    async atualizar_trabalhador(trabalhador) {
        const { id, nome, cpf, rg, endereco, nacionalidade, telefone, email, sexo, data_nascimento, experiencias, habilidades } = trabalhador;
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
        } catch(error) {
            console.log(error);
        }

        


    },

    async desativar_trabalhador(trabalhador_id) {
        try {
            // Pegando o status atual do trabalhador
            const status = await connection('trabalhador')
                .select('ativo')
                .where('id', '=', trabalhador_id);
            
            const ativo = status[0].ativo;
            
            if(ativo != null) {
                // Se estiver ativo, desativa
                if(ativo == 1) {
                    await connection('trabalhador').update({
                        status: 'Inativo',
                        ativo: 0
                    })
                    .where('id', '=', trabalhador_id);
                // Se estiver inativo, ativa
                } else {
                    await connection('trabalhador').update({
                        status: 'Ativo',
                        ativo: 1
                    })
                    .where('id', '=', trabalhador_id);
                }
            }
        } catch(error) {
            console.log(error);
        }
        
    },

    async listar_trabalhadores(trabalhador, ativo) {
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
            
            return trabalhadores;            
        } catch(error) {
            console.log(error);
        }
    },

    async listar_vagas(vaga, ativo) {
        let vagas = [];

        try {
            // Verifica se é pra listar todas as vagas ou uma vaga específica
            if(vaga != null) {
                console.log('HERE1');
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
                console.log('HERE2');
                vagas = await connection('vaga AS v')
                    .select('v.id AS vid', 'v.descricao AS vdescricao', 'v.salario AS vsalario', 'v.data_cadastro AS vdata_cadastro', 'v.data_validade AS vdata_validade',
                        'v.funcao_id AS vfuncao_id', 'v.empregador_id AS vempregador_id', 'v.ativo AS vativo', 'f.sigla AS fsigla', 'f.nome AS fnome', 'f.ativo AS fativo',
                        'e.cnpj AS ecnpj', 'e.nomeFantasia AS enomeFantasia', 'e.razaoSocial AS erazaoSocial', 'e.endereco AS eendereco', 'e.email AS eemail',
                        'e.telefone AS etelefone', 'e.data_cadastro AS edata_cadastro', 'e.data_validade AS edata_validade', 'e.ativo AS eativo')
                    .innerJoin('funcao AS f', 'v.funcao_id', 'f.id')
                    .innerJoin('empregador AS e', 'v.empregador_id', 'e.id')
                    .where('v.ativo', '=', 1);
            } else {
                console.log('HERE3');
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
                    }
                };
                vagas[i] = vaga;
            }
            
            console.log(vagas);

        } catch(error) {
            console.log(error);
        }
    },

    async efetuar_inscricao(inscricao) {

    }
}