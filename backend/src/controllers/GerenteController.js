const connection = require('../database/connection');

module.exports = {
    async cadastrar_habilidade(request, response){
        const { descricao } = request.body;
        const ativo = 1;

        try{
            // Cadastrando uma nova habilidade
            const [ habilidade_id ] = await connection('habilidade').insert({
                descricao,
                ativo
            });

            return response.json({ habilidade_id });

        }catch(error){
            console.log(error);
        }
    },

    async atualizar_habilidade(request, response){
        const {id,descricao} = request.body;
        const ativo = 1;

        try {
            // Atualizando a habilidade
            await connection('habilidade').update({
                descricao,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch (error) {
            console.log(error);
        }
    },

    async desativar_habilidade(request, response){
        const { id } = request.body;

        try{
            // Checando se a habilidade está ativa
            const ativo_resposta = await connection('habilidade')
                    .select('ativo')
                    .where('id','=', id);

                const ativo = ativo_resposta[0].ativo;

                // Se estiver ativa, desativa
                if(ativo ==1) {
                    await connection('habilidade').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativada, ativa
                    await connection('habilidade').update({
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

    async listar_habilidades(request, response){
        const { habilidade, ativo } = request.params;
        let habilidades = [];

        try{
            // Verifica se é para listar todas habilidades ou uma habilidade em específico
            if(habilidade != '-'){
                habilidades = await connection('habilidade')
                    .select('*')
                    .where('descricao','=',habilidade)
                    .orWhere('descricao', 'like', '%' + habilidade + '%'); 
            }else if (habilidade == '-' && ativo){
                habilidades = await connection('habilidade')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                habilidades = await connection('habilidade')
                    .select('*');
            }

            for(let i = 0; i < habilidades.length; i++) {
                let habilidade = {
                    id: habilidades[i].id,
                    descricao: habilidades[i].descricao,
                    ativo: habilidades[i].ativo
                }

                habilidades[i] = habilidade;
            }

            return response.json({ habilidades })
            
        }catch(error){
            console.log(error);
        }
    },

    async cadastrar_experiencia(request, response){
        const { descricao } = request.body;
        const ativo = 1;

        try{
            // Cadastrando uma nova experiencia
            const [ experiencia_id ] = await connection('experiencia').insert({
                descricao,
                ativo
            });

            return response.json({ experiencia_id });

        }catch(error){
            console.log(error);
        }
    },

    async atualizar_experiencia(request, response){
        const {id,descricao} = request.body;
        const ativo = 1;

        try {
            // Atualizando a experiencia
            await connection('experiencia').update({
                descricao,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch (error) {
            console.log(error);
        }
    },

    async desativar_experiencia(request, response){
        const { id } = request.body;

        try{
            // Checando se a experiencia está ativa
            const ativo_resposta = await connection('experiencia')
                    .select('ativo')
                    .where('id','=', id);

                const ativo = ativo_resposta[0].ativo;

                // Se estiver ativa, desativa
                if(ativo ==1) {
                    await connection('experiencia').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativada, ativa
                    await connection('experiencia').update({
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

    async listar_experiencias(request, response){
        const { experiencia, ativo } = request.params;
        let experiencias = [];

        try{
            // Verifica se é para listar todas experiencias ou uma experiencia em específico
            if(experiencia != '-'){
                experiencias = await connection('experiencia')
                    .select('*')
                    .where('descricao','=',experiencia)
                    .orWhere('descricao', 'like', '%' + experiencia + '%'); 
            }else if (experiencia == '-' && ativo){
                experiencias = await connection('experiencia')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                experiencias = await connection('experiencia')
                    .select('*');
            }

            for(let i = 0; i < experiencias.length; i++) {
                let experiencia = {
                    id: experiencias[i].id,
                    descricao: experiencias[i].descricao,
                    ativo: experiencias[i].ativo
                }

                experiencias[i] = experiencia;
            }

            return response.json({ experiencias })
            
        }catch(error){
            console.log(error);
        }
    },

    async cadastrar_nivel(request, response){
        const { descricao } = request.body;
        const ativo = 1;

        try{
            // Cadastrando um novo nivel
            const [ nivel_id ] = await connection('nivel').insert({
                descricao,
                ativo
            });

            return response.json({ nivel_id });

        }catch(error){
            console.log(error);
        }
    },

    async atualizar_nivel(request, response){
        const {id,descricao} = request.body;
        const ativo = 1;

        try {
            // Atualizando o nivel
            await connection('nivel').update({
                descricao,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch (error) {
            console.log(error);
        }
    },

    async desativar_nivel(request, response){
        const { id } = request.body;

        try{
            // Checando se o nivel está ativo
            const ativo_resposta = await connection('nivel')
                    .select('ativo')
                    .where('id','=', id);

                const ativo = ativo_resposta[0].ativo;

                // Se estiver ativa, desativa
                if(ativo ==1) {
                    await connection('nivel').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativada, ativa
                    await connection('nivel').update({
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

    async listar_niveis(request, response){
        const { nivel, ativo } = request.params;
        let niveis = [];

        try{
            // Verifica se é para listar todos niveis ou um nivel em específico
            if(nivel != '-'){
                niveis = await connection('nivel')
                    .select('*')
                    .where('descricao','=',nivel)
                    .orWhere('descricao', 'like', '%' + nivel + '%'); 
            }else if (nivel == '-' && ativo){
                niveis = await connection('nivel')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                niveis = await connection('nivel')
                    .select('*');
            }

            for(let i = 0; i < niveis.length; i++) {
                let nivel = {
                    id: niveis[i].id,
                    descricao: niveis[i].descricao,
                    ativo: niveis[i].ativo
                }

                niveis[i] = nivel;
            }

            return response.json({ niveis })
            
        }catch(error){
            console.log(error);
        }
    },

    async cadastrar_tempo(request, response){
        const { descricao } = request.body;
        const ativo = 1;

        try{
            // Cadastrando um novo tempo
            const [ tempo_id ] = await connection('tempo').insert({
                descricao,
                ativo
            });

            return response.json({ tempo_id });

        }catch(error){
            console.log(error);
        }
    },

    async atualizar_tempo(request, response){
        const {id,descricao} = request.body;
        const ativo = 1;

        try {
            // Atualizando o tempo
            await connection('tempo').update({
                descricao,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch (error) {
            console.log(error);
        }
    },

    async desativar_tempo(request, response){
        const { id } = request.body;

        try{
            // Checando se o tempo está ativo
            const ativo_resposta = await connection('tempo')
                    .select('ativo')
                    .where('id','=', id);

                const ativo = ativo_resposta[0].ativo;

                // Se estiver ativa, desativa
                if(ativo ==1) {
                    await connection('tempo').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativada, ativa
                    await connection('tempo').update({
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

    async listar_tempos(request, response){
        const { tempo, ativo } = request.params;
        let tempos = [];

        try{
            // Verifica se é para listar todos tempos ou um tempo em específico
            if(tempo != '-'){
                tempos = await connection('tempo')
                    .select('*')
                    .where('descricao','=', tempo)
                    .orWhere('descricao', 'like', '%' + tempo + '%'); 
            }else if (tempo == '-' && ativo){
                tempos = await connection('tempo')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                tempos = await connection('tempo')
                    .select('*');
            }

            for(let i = 0; i < tempos.length; i++) {
                let tempo = {
                    id: tempos[i].id,
                    descricao: tempos[i].descricao,
                    ativo: tempos[i].ativo
                }

                tempos[i] = tempo;
            }

            return response.json({ tempos })
            
        }catch(error){
            console.log(error);
        }
    },

    async cadastrar_situacao(request, response){
        const { descricao } = request.body;
        const ativo = 1;

        try{
            // Cadastrando uma nova situação
            const [ situacao_id ] = await connection('situacao').insert({
                descricao,
                ativo
            });

            return response.json({ situacao_id });

        }catch(error){
            console.log(error);
        }
    },

    async atualizar_situacao(request, response){
        const {id,descricao} = request.body;
        const ativo = 1;

        try {
            // Atualizando a situação
            await connection('situacao').update({
                descricao,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch (error) {
            console.log(error);
        }
    },

    async desativar_situacao(request, response){
        const { id } = request.body;

        try{
            // Checando se a situação está ativa
            const ativo_resposta = await connection('situacao')
                    .select('ativo')
                    .where('id','=', id);

                const ativo = ativo_resposta[0].ativo;

                // Se estiver ativa, desativa
                if(ativo ==1) {
                    await connection('situacao').update({
                        ativo: 0
                    })
                    .where('id','=', id);
                } else {
                    //Se estiver desativada, ativa
                    await connection('situacao').update({
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

    async listar_situacoes(request, response){
        const { situacao, ativo } = request.params;
        let situacoes = [];

        try{
            // Verifica se é para listar todas experiencias ou uma experiencia em específico
            if(situacao != '-'){
                situacoes = await connection('situacao')
                    .select('*')
                    .where('descricao','=',situacao)
                    .orWhere('descricao', 'like', '%' + situacao + '%'); 
            }else if (situacao == '-' && ativo){
                situacoes = await connection('situacao')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                situacoes = await connection('situacao')
                    .select('*');
            }

            for(let i = 0; i < situacoes.length; i++) {
                let situacao = {
                    id: situacoes[i].id,
                    descricao: situacoes[i].descricao,
                    ativo: situacoes[i].ativo
                }

                situacoes[i] = situacao;
            }

            return response.json({ situacoes })
            
        }catch(error){
            console.log(error);
        }
    },

    async atualizar_inscricao (request, response){
        const { id, trabalhador_id, vaga_id, situacao_id} = request.body;
        const ativo = 1;

        try {
            await connection('inscricao').update({
                trabalhador_id,
                vaga_id,
                situacao_id,
                ativo
            }).where('id', '=', id);
            
            if(situacao_id == 1){
                await connection('trabalhador').update({
                    status: "Selecionado"
                }).where('id','=', trabalhador_id)
            } else if (situacao_id == 2){
                await connection('trabalhador').update({
                    status: "Ativo"
                }).where('id','=', trabalhador_id)
            }

            return response.json({ id })

        }catch (error) {
            console.log(error);
        }
    },

    async listar_inscricoes (request, response){
        const {ativo} = request.params;
        let inscricoes = [];

        try{
        if(ativo){
            inscricoes = await connection('inscricao AS i')
            .select('i.id as iid', 'i.data_inscricao as idata_inscricao', 'i.vaga_id as ivaga_id', 'i.trabalhador_id as itrabalhador_id',
            'i.situacao_id as isituacao_id', 's.descricao as sdescricao','i.ativo as iativo')
            .innerJoin('situacao as s', 'i.situacao_id','s.id')
            .where('i.ativo','=',1)
        } else {
            inscricoes = await connection('inscricao AS i')
            .select('i.id as iid', 'i.data_inscricao as idata_inscricao', 'i.vaga_id as ivaga_id', 'i.trabalhador_id as trabalhador_id',
            'i.situacao_id as isituacao_id', 's.descricao as sdescricao','i.ativo as iativo')
            .innerJoin('situacao as s', 'i.situacao_id','s.id')
        }

        for(let i =0; i <inscricoes.length; i++){
            let inscricao = {
                id: inscricoes[i].iid,
                data_inscricao: inscricoes[i].idata_inscricao,
                vaga_id: inscricoes[i].ivaga_id,
                trabalhador_id: inscricoes[i].itrabalhador_id,
                situacao_id: inscricoes[i].isituacao_id,
                descricao: inscricoes[i].sdescricao
            }

            inscricoes[i]= inscricao;
        }

        return response.json ({ inscricoes })
    
        } catch (error){
            console.log(error);
        }
    },

    async avaliar_cadastros (){
        let empregadores = await connection('empregador')
        .select('id', 'data_validade')
        .where('ativo', '=', 1);

        for(let i = 0; i < empregadores.length; i++) {
            if(empregadores[i].data_validade < new Date().now) {
                await connection('empregador').update({
                    ativo : 0
                }).where('id', '=', empregadores[i].id);
            }
        }

        let trabalhadores = await connection('trabalhador')
        .select('id', 'data_validade')
        .where('ativo', '=', 1);

        for(let i = 0; i < trabalhadores.length; i++) {
            if(trabalhadores[i].data_validade < new Date().now) {
                await connection('trabalhador').update({
                    ativo : 0
                }).where('id', '=', trabalhadores[i].id);
            }
        }

        let vagas = await connection('vaga')
        .select('id', 'data_validade')
        .where('ativo', '=', 1);

        for(let i = 0; i < vagas.length; i++) {
            if(vagas[i].data_validade < new Date().now) {
                await connection('vaga').update({
                    ativo : 0
                }).where('id', '=', vagas[i].id);
            }
        }
    }
}