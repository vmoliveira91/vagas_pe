
const connection = require('../database/connection');

module.exports = {
    async cadastrar_empregador(request, response) {
        const { cnpj, nomeFantasia, razaoSocial, endereco, email, telefone } = request.body;
        const data_cadastro = new Date();
        const data_validade = new Date(data_cadastro.setMonth(data_cadastro.getMonth() + 8));
        const ativo = 1;

        try {
            //Cadastrando um novo empregador
            const [ empregador_id ] = await connection('empregador').insert({
                cnpj,
                nomeFantasia,
                razaoSocial,
                endereco,
                email,
                telefone,
                data_cadastro,
                data_validade,
                ativo
            });

            return response.json({ empregador_id});

        } catch(error) {
            console.log(error);
        }
    },

    async atualizar_empregador(request, response){
        const { id,cnpj, nomeFantasia, razaoSocial, endereco, email, telefone } = request.body;
        const data_cadastro = new Date();
        const data_validade = new Date(data_cadastro.setMonth(data_cadastro.getMonth() + 8));
        const ativo = 1;

        try {
            // Atualizando o empregador
            await connection('empregador').update({
                cnpj,
                nomeFantasia,
                razaoSocial,
                endereco,
                email,
                telefone,
                data_cadastro,
                data_validade,
                ativo
            }).where('id', '=', id);
        }catch(error){
            console.log(error);
        }

        return response.json({ id });
    },

    async desativar_empregador(request, response){
            const { id } = request.body

        try{
            // Checando se o empregador está ativo
            const ativo_resposta = await connection('empregador')
                .select('ativo')
                .where('id','=', id);

            const ativo = ativo_resposta[0].ativo;

                // Se estiver ativo, desativa
                if(ativo ==1) {
                    await connection('empregador').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativado, ativa
                    await connection('empregador').update({
                        ativo: 1
                    })
                    .where('id','=', id);
                }

            const is_ativo = !ativo;

            return response.json({ id, is_ativo });
            
        }catch (error) {
            console.log(error);
        }
    },

    async listar_empregadores(request, response){
        const { empregador, ativo} = request.params;
        let empregadores = [];

        try{
            // Verifica se é para listar todos os trabalhadores ou um trabalhador específico
            if(empregador != '-'){
                empregadores = await connection('empregador')
                .select('*')
                .where('nomeFantasia','=',empregador)
                .orWhere('nomeFantasia', 'like', '%' + empregador + '%'); 
            }else if (empregador == '-' && ativo){
                empregadores = await connection('empregador')
                .select('*')
                .where('ativo', '=', 1);
            } else {
                trabalhadores = await connection('empregador')
                .select('*');
            }

            for (let i = 0; i < empregadores.length; i++) {
                let empregador = {
                    id : empregadores[i].id,
                    cnpj: empregadores[i].cnpj,
                    nomeFantasia: empregadores[i].nomeFantasia,
                    razaoSocial: empregadores[i].razaoSocial,
                    endereco: empregadores[i].endereco,
                    email: empregadores[i].email,
                    telefone: empregadores[i].telefone,
                    data_cadastro: empregadores[i].data_cadastro,
                    data_validade: empregadores[i].data_validade,
                    ativo: empregadores[i].ativo          
                }

                empregadores[i] = empregador;

            }

            return response.json({ empregadores });

        }catch(error){
            console.log(error);
        }
    },

    async cadastrar_funcao(request, response){
        const { sigla, nome} = request.body;
        const ativo = 1;

        try{
            // Cadastrando uma nova função
            const [ funcao_id ] = await connection('funcao').insert({
                sigla,
                nome,
                ativo
            });

            return response.json({ funcao_id });

        }catch(error){
            console.log(error);
        }
    },

    async atualizar_funcao(request, response){
        const {id,sigla, nome} = request.body;
        const ativo = 1;

        try {
            // Atualizando a função
            await connection('funcao').update({
                sigla,
                nome,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch (error) {
            console.log(error);
        }
    },

    async desativar_funcao(request, response){
        const { id } = request.body;

        try{
            // Checando se a funcao está ativa
            const ativo_resposta = await connection('funcao')
                .select('ativo')
                .where('id','=', id);

                const ativo = ativo_resposta[0].ativo;

                // Se estiver ativa, desativa
                if(ativo ==1) {
                    await connection('funcao').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativada, ativa
                    await connection('funcao').update({
                        ativo: 1
                    })
                    .where('id','=', id);
                }
                
                const is_ativo = !ativo;

                return response.json({ id, is_ativo });

        }catch (error) {
            console.log(error);
        }
    },

    async listar_funcoes(request, response){
        const { funcao, ativo } = request.params
        let funcoes = [];

        try{
            // Verifica se é para listar todas funções ou uma função em específico
            if(funcao != '-'){
                funcoes = await connection('funcao')
                .select('*')
                .where('nome','=',funcao)
                .orWhere('nome', 'like', '%' + funcao + '%'); 
            }else if (funcao == '-' && ativo){
                funcoes = await connection('funcao')
                .select('*')
                .where('ativo', '=', 1);
            } else {
                funcoes = await connection('funcao')
                .select('*');
            }

            for(let i = 0; i < funcoes.length; i++) {
                let funcao = {
                    id: funcoes[i].id,
                    sigla: funcoes[i].sigla,
                    nome: funcoes[i].nome,
                    ativo: funcoes[i].ativo
                }

                funcoes[i] = funcao;
            }

            return response.json({ funcoes })
            
        }catch(error){
            console.log(error);
        }
    },

    async cadastrar_vaga(request, response){
        const { descricao, salario, funcao_id, empregador_id, beneficios, experiencias,habilidades } = request.body;
        const data_cadastro = new Date();
        const data_validade = new Date(data_cadastro.setMonth(data_cadastro.getMonth()+8));
        const ativo = 1;

        try{
            // Cadastrando uma nova vaga
            const [ vaga_id ] = await connection('vaga').insert({
                descricao,
                salario,
                data_cadastro,
                data_validade,
                funcao_id,
                empregador_id,
                ativo
            });

            // Verifica se há beneficios, se tiver adiciona
            if(beneficios != null) {
                for (let i= 0; i< beneficios.length; i++){
                    const { beneficio_id } = beneficios[i];
                    var valor = '0';

                    await connection('vaga_beneficio').insert({
                        beneficio_id,
                        valor,
                        vaga_id,
                        ativo
                    });
                }
            }

            // Verifica se ha experiencias, se tiver adiciona
            if(experiencias != null) {
                for(let i = 0; i < experiencias.length; i++) {
                    const { experiencia_id, tempo_id } = experiencias[i];

                    await connection('vaga_experiencia').insert({
                        experiencia_id,
                        tempo_id,
                        vaga_id,
                        ativo
                    });
                }
            }

            // Verifica se há habilidades, se tiver adiciona
            if(habilidades != null) {                
                for(let i = 0; i < habilidades.length; i++) {
                    const { habilidade_id, nivel_id } = habilidades[i];

                    await connection('vaga_habilidade').insert({
                        habilidade_id,
                        nivel_id,
                        vaga_id,
                        ativo
                    });
                }
            }

            return response.json({ vaga_id})

        } catch (error) {
            console.log(error);
        }
    },

    async atualizar_vaga(request, response){
        const { id, descricao, salario, funcao_id, empregador_id, beneficios, experiencias, habilidades} = request.body;
        const vaga_id = id;
        const data_validade = new Date(new Date().setMonth(new Date().getMonth() + 8));
        const ativo = 1
        
        try{
            // Atualizando vaga
            await connection('vaga').update({
                descricao,
                salario,
                data_validade,
                empregador_id,
                funcao_id,
                ativo
            }).where('id', '=', id);

            // Deleta as beneficios já cadastrados
            await connection('vaga_beneficio').del()
            .where('vaga_id', '=', id);

            // Insere os beneficios atualizados
            if(beneficios != null) {
                for(let i = 0; i < beneficios.length; i++) {
                    const { beneficio_id } = beneficios[i];
                    let valor = 0;
                    
                    await connection('vaga_beneficio').insert({
                        beneficio_id,
                        valor,
                        vaga_id,
                        ativo
                    });
                }
            }
            

            // Deleta as experiências já cadastradas
            await connection('vaga_experiencia').del()
            .where('vaga_id', '=', id);
        
            // Insere as experiências atualizadas
            if(experiencias != null) {
                for(let i = 0; i < experiencias.length; i++) {
                    const { experiencia_id, tempo_id } = experiencias[i];

                    await connection('vaga_experiencia').insert({
                        experiencia_id,
                        tempo_id,
                        vaga_id,
                        ativo
                    });
                }
            }
            
            // Deleta as habilidades já cadastradas
            await connection('vaga_habilidade').del()
                .where('vaga_id', '=', id);
            
            // Insere as habilidades atualizadas
            if(habilidades != null) {
                for(let i = 0; i < habilidades.length; i++) {
                    const { habilidade_id, nivel_id } = habilidades[i];

                    await connection('vaga_habilidade').insert({
                        habilidade_id,
                        nivel_id,
                        vaga_id,
                        ativo
                    });
                }
            }

            return response.json({ id });

        } catch(error) {
            console.log(error);
        }
    },

    async desativar_vaga(request, response){
        const { id } = request.body;

        try{
            // Checando se a vaga está ativa
            const ativo_resposta = await connection('vaga')
                .select('ativo')
                .where('id', '=', id);

            const ativo = ativo_resposta[0].ativo;

            if ( ativo == 1){
                // Se estiver ativo, desativa
                await connection('vaga').update({
                    ativo: 0
                })
                .where('id', '=', id);
            // Se estiver inativo, ativa
            } else {
                await connection('vaga').update({
                    ativo: 1
                })
                .where('id', '=', id);
            }

            const is_ativo = !ativo;

            return response.json({ id, is_ativo});

        } catch (error) {
            console.log(error);
        }
    },

    async cadastrar_beneficio(request, response){
        const { descricao } = request.body;
        const ativo = 1;

        try{
            // Cadastrando uma nova função
            const [ beneficio_id ] = await connection('beneficio').insert({
                descricao,
                ativo
            });

            return response.json({ beneficio_id });

        }catch(error){
            console.log(error);
        }
    },

    async atualizar_beneficio(request, response){
        const {id,descricao} = request.body;
        const ativo = 1;

        try {
            // Atualizando a função
            await connection('beneficio').update({
                descricao,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch (error) {
            console.log(error);
        }
    },

    async desativar_beneficio(request, response){
        const { id } = request.body;

        try{
            // Checando se a funcao está ativa
            const ativo_resposta = await connection('beneficio')
                    .select('ativo')
                    .where('id','=', id);

                const ativo = ativo_resposta[0].ativo;

                // Se estiver ativa, desativa
                if(ativo ==1) {
                    await connection('beneficio').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativada, ativa
                    await connection('beneficio').update({
                        ativo: 1
                    })
                    .where('id','=', id);
                }
                
                const is_ativo = !ativo;

                return response.json({ id, is_ativo });

        }catch (error) {
            console.log(error);
        }
    },

    async listar_beneficios(request, response){
        const { beneficio, ativo } = request.params;
        let beneficios = [];

        try{
            // Verifica se é para listar todos beneficios ou um beneficio em específico
            if(beneficio != '-'){
                beneficios = await connection('beneficio')
                    .select('*')
                    .where('descricao','=',beneficio)
                    .orWhere('descricao', 'like', '%' + beneficio + '%'); 
            }else if (beneficio == '-' && ativo){
                beneficios = await connection('beneficio')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                beneficios = await connection('beneficio')
                    .select('*');
            }

            for(let i = 0; i < beneficios.length; i++) {
                let beneficio = {
                    id: beneficios[i].id,
                    descricao: beneficios[i].descricao,
                    ativo: beneficios[i].ativo
                }

                beneficios[i] = beneficio;
            }

            return response.json({ beneficios })
            
        } catch(error){
            console.log(error);
        }
    }
}