const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const AgenteController = require('./controllers/AgenteController');

const routes = express.Router();

// UsuarioController's Routes
// GETs
routes.get('/listar_usuarios', UsuarioController.listar_usuarios);
// POSTs
routes.post('/cadastrar_usuario', UsuarioController.cadastrar_usuario);
routes.post('/atualizar_usuario', UsuarioController.atualizar_usuario);
routes.post('/desativar_usuario', UsuarioController.desativar_usuario);
routes.post('/logar_usuario', UsuarioController.logar_usuario);

// AgenteController's Routes
// GETs
routes.get('/listar_trabalhadores', AgenteController.listar_trabalhadores);
routes.get('/listar_vagas', AgenteController.listar_vagas);
// POSTs
routes.post('/cadastrar_trabalhador', AgenteController.cadastrar_trabalhador);
routes.post('/atualizar_trabalhador', AgenteController.atualizar_trabalhador);
routes.post('/desativar_trabalhador', AgenteController.desativar_trabalhador);
routes.post('/efetuar_inscricao', AgenteController.efetuar_inscricao);

module.exports = routes;