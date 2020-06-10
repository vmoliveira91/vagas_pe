const connection = require('../database/Connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    async cadastrar_usuario(request, response) {
        const { login, nome_usuario, tipo } = request.body;
        const ativo = 1;
        
        const senha = bcrypt.hashSync(request.body.senha,10)
        try {
            const [ id ] = await connection('usuario').insert({
                login,
                nome_usuario,
                senha,
                tipo,
                ativo
            });

            return response.json({ id });

        } catch(error) {
            console.log(error);
        }
    },

    async atualizar_usuario(request, response)  {
        const { id, login, nome_usuario, tipo, ativo } = request.body;
        const senha = bcrypt.hashSync(request.body.senha,10)
        
        try {
            await connection('usuario').update({
                id,
                login,
                nome_usuario,
                senha,
                tipo,
                ativo
            }).where('id', '=', id);

            return response.json({ id });

        } catch(error) {
            console.log(error);
        }
    },

    async desativar_usuario(request, response) {
        const { id } = request.body;

        try {
            const ativo_resposta = await connection('usuario')
                .select('ativo')
                .where('id', '=', id);

            const ativo = ativo_resposta[0].ativo;

            if(ativo != null) {
                if(ativo == 1) {
                    await connection('usuario').update({
                        ativo: 0
                    }).where('id', '=', id);
                } else {
                    await connection('usuario').update({
                        ativo: 1
                    }).where('id', '=', id);
                }
            }

            const is_ativo = !ativo;

            return response.json({ id, is_ativo });

        } catch(error) {
            console.log(error);
        }
    },

    async logar_usuario(request, response) {
        const { login, senha } = request.body;
        
        
        try {
            const [ usuario ]  = await connection('usuario')
                .select('*')
                .where('login', '=', login)
            if(bcrypt.compareSync(senha,usuario.senha)){
                if(usuario.tipo != -1) {
                    const tipo = usuario.tipo;
                    jwt.sign({usuario: usuario},'secretkey', (err, token) => {
                        if(err){
                            response.json({
                                message: "Failed to authenticate"
                            })
                        } else {
                        response.json({
                            tipo: tipo,
                            token:token
                        })
                    }
                })
        } else {
             return response.json({ tipo: -1})
        }    
    } else {
        return response.status(403).json({
            message: 'Forbidden'
        });
    }
            
    } catch(error) {
            console.log(error);
        }
    },

    async listar_usuarios(request, response) {
        const { usuario, ativo} = request.params;
        let usuarios = [];

        try {
            if(usuario != '-') {
                usuarios = await connection('usuario')
                    .select('*')
                    .where('nome_usuario', '=', usuario)
                    .orWhere('nome_usuario', 'like', '%' + usuario + '%')
                    .orWhere('login', '=', usuario)
                    .orWhere('login', 'like', usuario);
            } else if(usuario == null && ativo) {
                usuarios = await connection('usuario')
                    .select('*')
                    .where('ativo', '=', 1);
            } else {
                usuarios = await connection('usuario')
                    .select('*');
            }

            for(let i = 0; i < usuarios.length; i++) {
                let usuario = {
                    id: usuarios[i].id,
                    login: usuarios[i].login,
                    nome_usuario: usuarios[i].nome_usuario,
                    senha: usuarios[i].senha,
                    tipo: usuarios[i].tipo,
                    ativo: usuarios[i].ativo
                }

                usuarios[i] = usuario;

            }

            return response.json({ usuarios });

        } catch(error) {
            console.log(error);
        }
    }

}

 