const connection = require('../database/connection');

module.exports = {
    async cadastrar_trabalhador(trabalhador, response) {
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
    }
}