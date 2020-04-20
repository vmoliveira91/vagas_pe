const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const AgenteController = require('./controllers/AgenteController');
const CaptadorController = require('./controllers/CaptadorController');
const GerenteController = require('./controllers/GerenteController');

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

// CaptadorController's Routes
// GETs
routes.get('/listar_empregadores', CaptadorController.listar_empregadores)
routes.get('/listar_funcoes', CaptadorController.listar_funcoes)
routes.get('/listar_beneficios', CaptadorController.listar_beneficios)
// POSTs
routes.post('/cadastrar_empregador', CaptadorController.cadastrar_empregador);
routes.post('/atualizar_empregador', CaptadorController.atualizar_empregador);
routes.post('/desativar_empregador', CaptadorController.desativar_empregador);
routes.post('/cadastrar_funcao', CaptadorController.cadastrar_funcao);
routes.post('/atualizar_funcao', CaptadorController.atualizar_funcao);
routes.post('/desativar_funcao', CaptadorController.desativar_funcao);
routes.post('/cadastrar_vaga', CaptadorController.cadastrar_vaga);
routes.post('/atualizar_vaga', CaptadorController.atualizar_vaga);
routes.post('/desativar_vaga', CaptadorController.desativar_vaga);
routes.post('/cadastrar_benefico', CaptadorController.cadastrar_benefico);
routes.post('/atualizar_beneficio', CaptadorController.atualizar_beneficio);
routes.post('/desativar_beneficio', CaptadorController.desativar_beneficio);

// GerenteController's Routes
// GETs
routes.get('/listar_habilidade', GerenteController.listar_habilidades);
routes.get('/listar_experiencia', GerenteController.listar_experiencias);
routes.get('/listar_nivel', GerenteController.listar_niveis);
routes.get('/listar_tempo', GerenteController.listar_tempos);
routes.get('/listar_situacao', GerenteController.listar_situacoes);
routes.get('/listar_insricao', GerenteController.listar_inscricoes);
routes.get('/avaliar_cadastro', GerenteController.avaliar_cadastros);
// POSTs
routes.post('/cadastrar_habilidade', GerenteController.cadastrar_habilidade);
routes.post('/atualizar_habilidade', GerenteController.atualizar_habilidade);
routes.post('/desativar_habilidade', GerenteController.desativar_habilidade);
routes.post('/cadastrar_experiencia', GerenteController.cadastrar_experiencia);
routes.post('/atualizar_experiencia', GerenteController.atualizar_experiencia);
routes.post('/desativar_experiencia', GerenteController.desativar_experiencia);
routes.post('/cadastrar_nivel', GerenteController.cadastrar_nivel);
routes.post('/atualizar_nivel', GerenteController.atualizar_nivel);
routes.post('/desativar_nivel', GerenteController.desativar_nivel);
routes.post('/cadastrar_tempo', GerenteController.cadastrar_tempo);
routes.post('/atualizar_tempo', GerenteController.atualizar_tempo);
routes.post('/desativar_tempo', GerenteController.desativar_tempo);
routes.post('/cadastrar_', GerenteController.cadastrar_situacao);
routes.post('/atualizar_situacao', GerenteController.atualizar_situacao);
routes.post('/desativar_situacao', GerenteController.desativar_situacao);
routes.post('/atualizar_inscricao', GerenteController.atualizar_inscricao);


module.exports = routes;