const express = require('express');
const AgenteController = require('./controllers/AgenteController');

const routes = express.Router();

// AgenteController's Routes
// GETs
routes.get('/listar_trabalhadores', AgenteController.listar_trabalhadores);
routes.get('/listar_vagas', AgenteController.listar_vagas);
// POSTS
routes.post('/cadastrar_trabalhador', AgenteController.cadastrar_trabalhador);
routes.post('/atualizar_trabalhador', AgenteController.atualizar_trabalhador);
routes.post('/desativar_trabalhador', AgenteController.desativar_trabalhador);
routes.post('/efetuar_inscricao', AgenteController.efetuar_inscricao);

module.exports = routes;